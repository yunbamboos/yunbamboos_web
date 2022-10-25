<template>
  <div class="layout-aside">
    <Logo/>
    <el-scrollbar class="layout-aside-menu">
      <el-menu router
               :collapse="collapse"
               :default-active="defaultActive"
               :unique-opened="unique_opened"
               background-color="transparent">
        <template v-for="menu in menuList">
          <el-sub-menu :index="menu.path" v-if="menu.children && menu.children.length > 0" :key="menu.path">
            <template #title>
              <SvgIcon :name="menu.meta.icon"/>
              <span>{{ menu.meta.title }}</span>
            </template>
            <SubItem :children="menu.children"/>
          </el-sub-menu>
          <template v-else>
            <el-menu-item :index="menu.path" :key="menu.path">
              <template #title v-if="!menu.meta.link || (menu.meta.link && menu.meta.iframe)">
                <SvgIcon :name="menu.meta.icon"/>
                {{ menu.meta.title }}
              </template>
              <template #title v-else>
                <a :href="menu.meta.link" target="_blank" rel="opener" class="w100">
                  <SvgIcon :name="menu.meta.icon"/>
                  {{ menu.meta.title }}
                </a>
              </template>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import {toRefs, reactive, defineComponent} from 'vue';
import store from '@/store';
import Logo from '@/layout/component/logo.vue';
import {Route} from "@/model";
import SubItem from "@/layout/component/subItem.vue";
import SvgIcon from "@/components/svg-icon/index.vue";
import { useRoute, onBeforeRouteUpdate } from 'vue-router';

interface StateType {
  collapse: boolean;
  defaultActive: string;
  unique_opened: boolean;
  menuList: Array<Route>;
}

export default defineComponent({
  name: 'aside',
  components: {
    Logo,
    SubItem,
    SvgIcon
  },
  setup() {
    const route = useRoute();
    const state = reactive<StateType>({
      collapse: false,
      defaultActive: route.path,
      unique_opened: true,
      menuList: []
    });
    let routeList = store.getters['routeList/getAll']();
    for (let i = 0; i < routeList.length; i++) {
      let route = routeList[i];
      console.log(route);
      if (route.meta && !route.meta.hide) {
        state.menuList.push(route);
      }
    }
    return {
      ...toRefs(state)
    };
  }
});
</script>
