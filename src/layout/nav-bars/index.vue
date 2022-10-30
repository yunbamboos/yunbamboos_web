<template>
  <div class="layout-nav-bars-container">
    <LogoBar/>
    <CollapseBar/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import LogoBar from '@/layout/nav-bars/logo-bar.vue';
import CollapseBar from '@/layout/nav-bars/collapse-bar.vue';

export default defineComponent({
  name: "LayoutNavBars",
  components: {
    LogoBar,     // logo
    CollapseBar, // 展开收缩按钮
    // 面包屑导航
    // 用户信息
  }
});
</script>
<style scoped lang="scss">
.layout-nav-bars-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background: var(--layout-nav-bars-bg);
  border-bottom: 1px solid var(--layout-nav-bars-border-color-light);
}
.layout-nav-bars-item{
  height: 100%;
  display: flex;
  align-items: center;
  cursor:pointer;
  &:hover{
    background: #4bc5d8;
  }
}
</style>