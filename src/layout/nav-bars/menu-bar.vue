<template>
  <div class="layout-nav-bars-menu-bar">
    <NavMenuHorizontal/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import NavMenuHorizontal from '@/layout/nav-menu/horizontal.vue';

export default defineComponent({
  name: "LayoutNavBarsMenuBar",
  components:{
    NavMenuHorizontal
  }
});
</script>
