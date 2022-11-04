<template>
  <!-- 顶栏设置 -->
  <div>
    <el-divider content-position="left">{{ $t('layout.config.top_bar.title') }}</el-divider>
    <div class="layout-theme-skin-setings-flex">
      <div class="layout-theme-skin-setings-flex-label">{{ $t('layout.config.top_bar.bg') }}</div>
      <div class="layout-theme-skin-setings-flex-value">
        <el-color-picker v-model="topBarBg" size="default"></el-color-picker>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import store from "@/store";

export default defineComponent({
  name: "SetingsTopBar",
  computed: {
    topBarBg: {
      get() {
        return store.getters['config/getConfig']('topBarBg');
      },
      set(value) {
        store.dispatch('config/setConfig', {key: 'topBarBg', value: value});
      }
    }
  }
});
</script>
