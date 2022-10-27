<template>
  <el-container class="layout-container">
    <LayoutAside></LayoutAside>
  </el-container>
</template>

<script lang="ts">
import { computed, getCurrentInstance, watch, defineComponent } from 'vue';
import LayoutAside from '@/layout/component/aside.vue';

export default defineComponent({
  name: "LayoutDefaults",
  components:{
    LayoutAside
  }
});
</script>

<style scoped>

</style>