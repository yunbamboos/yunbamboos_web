<template>
  <div class="layout-nav-bars-logo-bar" :style="getLayoutLogoStyle">
    <Logo/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Logo from '@/layout/logo/index.vue';
import store from "@/store";

export default defineComponent({
  name: 'LayoutNavBarsLogo',
  components:{
    Logo
  },
  computed:{
    getLayoutLogoStyle() {
      let collapse = store.getters['config/getConfig']("collapse", "setting");
      if (collapse) {
        return `--layout-logo-width:var(--layout-aside-collapse-width);`;
      } else {
        return `--layout-logo-width:var(--layout-aside-width);`;
      }
    }
  },
  methods: {

  }
});
</script>