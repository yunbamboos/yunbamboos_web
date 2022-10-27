<template>
  <el-aside class="layout-aside" :style="getLayoutAsidesStyle">
    <Logo v-show="getShowLogo"/>
    <NavMenuVertical/>
  </el-aside>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
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
  computed:{
    getShowLogo: function (){
      return store.getters['config/getConfig']("logo", "display");
    },
    getLayoutAsidesStyle: ()=>{
      let collapse = store.getters['config/getConfig']("collapse", "setting");
      if (collapse) {
        return `--el-aside-width:var(--layout-aside-collapse-width);`;
      } else {
        return '--el-aside-width:var(--layout-aside-width)';
      }
    }
  }
});
</script>
