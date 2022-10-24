<template>
  <div class="h100">
    <el-aside class="layout-aside">
      <Logo/>
      <el-scrollbar class="layout-aside-menu">
        <el-menu router
                 :default-active="defaultActive"
                 :background-color="menu_background_color"
                 :text-color="menu_text_color"
                 :active-text-color="menu_active_text_color"
                 :collapse="isCollapse"
                 style="border-width: 0;">
          <template v-for="menu in menuList" :key="menu.path">
            <el-menu-item :index="menu.path" :title="menu.meta.title">
              <el-icon :class="menu.meta.icon"></el-icon>
              <span>{{ menu.meta.title }}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </el-scrollbar>
    </el-aside>
  </div>
</template>

<script lang="ts">
import {toRefs, reactive, onBeforeMount, defineComponent} from 'vue';
import {useRoute, onBeforeRouteUpdate} from 'vue-router';
import {useStore} from '@/store';
import Logo from '@/layout/logo/index.vue';

export default defineComponent({
  name: 'layoutAside',
  components: {Logo},
  setup() {
    const store = useStore();
    const route = useRoute();
    const state = reactive({
      defaultActive: route.path,
      menu_background_color: 'transparent',
      menu_text_color: '#ffffff',
      menu_active_text_color: '#3ac8df',
      isCollapse: false,
      menuList: []
    });
    // 设置/过滤路由（非静态路由/是否显示在菜单中）
    const setFilterRoutes = () => {
      console.log(store.state.routesList.routesList);
      (state.menuList as any) = filterRoutesFun(store.state.routesList.routesList);
    };
    // 路由过滤递归函数
    const filterRoutesFun = (arr: Array<object>) => {
      return arr
          .filter((item: any) => !item.meta.isHide)
          .map((item: any) => {
            item = Object.assign({}, item);
            if (item.children) item.children = filterRoutesFun(item.children);
            return item;
          });
    };
    // 页面加载前
    onBeforeMount(() => {
      setFilterRoutes();
    });
    return {
      ...toRefs(state)
    };
  }
});
</script>
