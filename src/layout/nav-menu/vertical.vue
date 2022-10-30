<template>
  <el-scrollbar class="layout-aside-menu">
    <el-menu router
             :collapse="getCollapse"
             :default-active="defaultActive"
             :unique-opened="unique_opened"
             background-color="transparent"
             :collapse-transition="false">
      <template v-for="menu in menuList">
        <el-sub-menu :index="menu.path" v-if="menu.children && menu.children.length > 0" :key="menu.path">
          <template #title>
            <SvgIcon :name="menu.meta.icon"/>
            <span>{{ $t(menu.meta.title) }}</span>
          </template>
          <SubItem :children="menu.children"/>
        </el-sub-menu>
        <template v-else>
          <el-menu-item :index="menu.path" :key="menu.path">
            <SvgIcon :name="menu.meta.icon"/>
            <template #title v-if="!menu.meta.link || (menu.meta.link && menu.meta.iframe)">
              <span>{{ $t(menu.meta.title) }}</span>
            </template>
            <template #title v-else>
              <a :href="menu.meta.link" target="_blank" rel="opener" class="w100">
                {{ $t(menu.meta.title) }}
              </a>
            </template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import {toRefs, reactive, defineComponent, computed} from 'vue';
import store from '@/store';
import Logo from '@/layout/logo/index.vue';
import {Route} from "@/model";
import SubItem from "@/layout/nav-menu/subItem.vue";
import SvgIcon from "@/components/svg-icon/index.vue";
import {useRoute} from 'vue-router';

interface StateType {
  defaultActive: string;
  unique_opened: boolean;
  menuList: Array<Route>;
}

export default defineComponent({
  name: "NavMenuVertical",
  components: {
    Logo,
    SubItem,
    SvgIcon
  },
  setup() {
    const route = useRoute();
    const state = reactive<StateType>({
      defaultActive: route.path,
      unique_opened: true,
      menuList: []
    });
    const getCollapse = computed(() => {
      return store.getters['config/getConfig']("collapse", "setting");
    });

    let routeList = store.getters['routeList/getAll']();
    for (let i = 0; i < routeList.length; i++) {
      let route = routeList[i];
      if (route.meta && !route.meta.hide) {
        state.menuList.push(route);
      }
    }
    return {
      ...toRefs(state),
      getCollapse
    };
  }
});
</script>
