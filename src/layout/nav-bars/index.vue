<template>
  <div class="layout-nav-bars-container">
    <LogoBar/>
    <CollapseBar/>
    <BreadcrumbBar v-if="false"/>
    <MenuBar/>
    <UserBar/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import LogoBar from '@/layout/nav-bars/logo-bar.vue';
import CollapseBar from '@/layout/nav-bars/collapse-bar.vue';
import BreadcrumbBar from '@/layout/nav-bars/breadcrumb-bar.vue';
import MenuBar from '@/layout/nav-bars/menu-bar.vue';
import UserBar from '@/layout/nav-bars/user-bar.vue';

export default defineComponent({
  name: "LayoutNavBars",
  components: {
    LogoBar,     // logo
    CollapseBar, // 展开收缩按钮
    BreadcrumbBar, // 面包屑导航
    MenuBar, // 菜单
    UserBar, // 用户信息
  }
});
</script>
