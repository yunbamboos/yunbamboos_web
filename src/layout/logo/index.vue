<template>
  <div class="layout-aside-logo" :style="{minHeight: setHeaderHeight }">
    <img :src="logo" class="layout-aside-logo-medium-img"  alt=""/>
    <span>{{title}}</span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store';
import NavBarsIndex from '@/layout/navBars/index.vue';
import logo from '@/assets/logo.png';

export default defineComponent({
  name: 'layoutHeader',
  components: { NavBarsIndex },
  setup() {
    const store = useStore();
    // 设置 header 的高度
    const setHeaderHeight = computed(() => {
      return store.state.app.app.headerHeight;
    });
    return {
      setHeaderHeight,
      title: import.meta.env.VITE_APP_TITLE,
      logo
    };
  },
});
</script>
