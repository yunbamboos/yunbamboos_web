<template>
  <el-aside class="layout-aside" :style="getLayoutAsidesStyle">
    <Logo/>
    <NavMenuVertical/>
  </el-aside>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue';
import Logo from '@/layout/logo/index.vue';
import NavMenuVertical from '@/layout/nav-menu/vertical.vue';
import store from "@/store";

/**
 * 侧边栏
 * */
export default defineComponent({
  name: 'LayoutAside',
  components: {
    Logo,
    NavMenuVertical
  },
  setup() {

    const getLayoutAsidesStyle = computed(() => {
      let collapse = store.getters['config/getConfig']("collapse", "setting");
      if (collapse) {
        return `--el-aside-width:64px;`;
      } else {
        return '--el-aside-width:var(--layout-aside-width)';
      }
    });

    return {
      getLayoutAsidesStyle,
    }
  }
});
</script>
