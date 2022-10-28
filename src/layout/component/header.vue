<template>
  <el-header class="layout-header" :style="getLayoutHeaderHeight">
    <LayoutNavBars/>
  </el-header>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import store from '@/store';
import LayoutNavBars from '@/layout/nav-bars/index.vue';

export default defineComponent({
  name: 'LayoutHeader',
  components: {LayoutNavBars},
  computed: {
    getLayoutHeaderHeight: () => {
      return `--el-header-height:var(--layout-header-height)`;
    }
  }
});
</script>
