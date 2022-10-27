<template>
  <div class="layout-aside">
    <Logo/>
    <NavMenuVertical/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Logo from '@/layout/logo/index.vue';
import NavMenuVertical from '@/layout/nav-menu/vertical.vue';
/**
 * 侧边栏
 * */
export default defineComponent({
  name: 'aside',
  components: {
    Logo,
    NavMenuVertical
  }
});
</script>
