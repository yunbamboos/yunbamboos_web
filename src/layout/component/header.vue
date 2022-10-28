<template>
  <el-header class="layout-header" :style="getLayoutHeaderHeight">
    <NavBarsIndex/>
  </el-header>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue';
import store from '@/store';
import NavBarsIndex from '@/layout/nav-bars/index.vue';

export default defineComponent({
  name: 'LayoutHeader',
  components: {NavBarsIndex},
  computed: {
    getLayoutHeaderHeight: () => {
      return `--el-header-height:var(--layout-header-height)`;
    }
  }
});
</script>
