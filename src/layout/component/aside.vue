<template>
  <el-aside class="layout-aside" :style="getLayoutAsidesStyle">
    <Logo v-if="getShowLogo"/>
    <NavMenuVertical/>
  </el-aside>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Logo from '@/layout/nav-menu/logo.vue';
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
  computed: {
    getShowLogo: () => {
      return store.getters['config/getConfig']("logo");
    },
    getLayoutAsidesStyle: () => {
      let collapse = store.getters['config/getConfig']("collapse");
      if (collapse) {
        return `--el-aside-width:var(--layout-aside-collapse-width);`;
      } else {
        return '--el-aside-width:var(--layout-aside-width)';
      }
    }
  }
});
</script>
