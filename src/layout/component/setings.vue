<template>
  <div class="layout-theme-skin-setings">
    <el-drawer
        :title="$t('layout.configTitle')"
        v-model="Drawer"
        direction="rtl"
        destroy-on-close
        size="260px">

    </el-drawer>
  </div>
</template>

<script lang="ts">
import { nextTick, onUnmounted, onMounted, getCurrentInstance, defineComponent, computed, reactive, toRefs } from 'vue';
export default defineComponent({
  name: "setings"
});
</script>

<style scoped>

</style>