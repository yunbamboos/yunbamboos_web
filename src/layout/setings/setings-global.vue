<template>
  <!-- 全局主题 -->
  <div>
    <el-divider content-position="left">{{ $t('layout.config.global.title') }}</el-divider>
    <div class="layout-theme-skin-setings-flex">
      <div class="layout-theme-skin-setings-flex-label">primary</div>
      <div class="layout-theme-skin-setings-flex-value">
        <el-color-picker v-model="primary" size="default" @change="onPrimaryColorChange"></el-color-picker>
      </div>
    </div>
    <div class="layout-theme-skin-setings-flex mt15">
      <div class="layout-theme-skin-setings-flex-label">{{ $t('layout.config.global.dark') }}</div>
      <div class="layout-theme-skin-setings-flex-value">
        <el-switch v-model="dark" size="small"></el-switch>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import store from "@/store";
import {ElMessage} from "element-plus";
import {getDarkColor, getLightColor} from "@/utils/theme";

export default defineComponent({
  name: "SetingsGlobal",
  computed: {
    primary: { // 获取主颜色
      get() {
        return store.getters['config/getConfig']('primary');
      },
      set(value) {
        store.dispatch('config/setConfig', {key: 'primary', value: value});
      }
    },
    dark: { // 是否开启深色模式
      get() {
        return store.getters['config/getConfig']('dark');
      },
      set(value) {
        store.dispatch('config/setConfig', {key: 'dark', value: value});
      }
    }
  },
  methods: {
    // 全局  Primary Color 事件
    onPrimaryColorChange() {
      let primary = store.getters['config/getConfig']('primary');
      if (!primary) return ElMessage.warning('全局主题 primary 颜色值不能为空');
      // 颜色加深
      document.documentElement.style.setProperty('--el-color-primary-dark-2', `${getDarkColor(primary, 0.1)}`);
      document.documentElement.style.setProperty('--el-color-primary', primary);
      // 颜色变浅
      for (let i = 1; i <= 9; i++) {
        document.documentElement.style.setProperty(`--el-color-primary-light-${i}`, `${getLightColor(primary, i / 10)}`);
      }
    }
  }
});
</script>
