<template>
  <el-header class="layout-header" :height="setHeaderHeight">
    <NavBarsIndex />
  </el-header>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store';
import NavBarsIndex from '@/layout/navBars/index.vue';

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
      setHeaderHeight
    };
  },
});
</script>
