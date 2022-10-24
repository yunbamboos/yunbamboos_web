<template>
  <el-main class="layout-main">
    <el-scrollbar class="layout-scrollbar" :style="{ transition: 'padding 0.3s ease-in-out' }">
      <LayoutParentView :style="{ minHeight: `calc(100vh - ${headerHeight} - 30px )` }"/>
    </el-scrollbar>
  </el-main>
</template>

<script>
import {computed, defineComponent} from 'vue';
import LayoutParentView from '@/layout/routerView/parent.vue';
import {store} from "@/store";

export default defineComponent({
  name: 'layoutMain',
  components: {LayoutParentView},
  setup() {
    // Header的高度
    const headerHeight = computed(() => {
      return store.state.app.app.headerHeight;
    });
    return {
      headerHeight
    }
  }
});
</script>
