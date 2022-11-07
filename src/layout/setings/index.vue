<template>
  <div class="layout-theme-skin-setings">
    <el-drawer
        :title="$t('layout.config.title')"
        v-model="drawer"
        direction="rtl"
        destroy-on-close
        size="260px"
        @close="closeSetingsDrawer"
    >
      <el-scrollbar class="layout-theme-skin-setings-scrollbar">
        <!-- 全局主题 -->
        <el-divider content-position="left">{{ $t('layout.config.global.title') }}</el-divider>
        <div class="layout-theme-skin-setings-flex">
          <div class="layout-theme-skin-setings-flex-label">{{ $t('layout.config.global.primary') }}</div>
          <div class="layout-theme-skin-setings-flex-value">
            <el-color-picker v-model="primary" size="default" @change="onPrimaryColorChange"></el-color-picker>
          </div>
        </div>
        <div class="layout-theme-skin-setings-flex mt15">
          <div class="layout-theme-skin-setings-flex-label">{{ $t('layout.config.global.bg') }}</div>
          <div class="layout-theme-skin-setings-flex-value">
            <el-color-picker v-model="bg" size="default" @change="onBgChange"></el-color-picker>
          </div>
        </div>
        <div class="layout-theme-skin-setings-flex mt15">
          <div class="layout-theme-skin-setings-flex-label">{{ $t('layout.config.global.color') }}</div>
          <div class="layout-theme-skin-setings-flex-value">
            <el-color-picker v-model="color" size="default" @change="onColorChange"></el-color-picker>
          </div>
        </div>
        <div class="layout-theme-skin-setings-flex mt15">
          <div class="layout-theme-skin-setings-flex-label">{{ $t('layout.config.global.border') }}</div>
          <div class="layout-theme-skin-setings-flex-value">
            <el-color-picker v-model="border" size="default" @change="onBorderChange"></el-color-picker>
          </div>
        </div>

        <!-- 顶栏设置 -->
        <el-divider content-position="left">{{ $t('layout.config.top_bar.title') }}</el-divider>
        <div class="layout-theme-skin-setings-flex">
          <div class="layout-theme-skin-setings-flex-label">{{ $t('layout.config.top_bar.bg') }}</div>
          <div class="layout-theme-skin-setings-flex-value">
            <el-color-picker v-model="topBarBg" size="default" @change="onTopBarBgChange"></el-color-picker>
          </div>
        </div>
        <div class="layout-theme-skin-setings-flex mt15">
          <div class="layout-theme-skin-setings-flex-label">{{ $t('layout.config.top_bar.gradual') }}</div>
          <div class="layout-theme-skin-setings-flex-value">
            <el-switch v-model="topBarBgGradual" size="small" @change="onTopBarBgGradualChange"></el-switch>
          </div>
        </div>
        <div class="layout-theme-skin-setings-flex mt15">
          <div class="layout-theme-skin-setings-flex-label">{{ $t('layout.config.top_bar.color') }}</div>
          <div class="layout-theme-skin-setings-flex-value">
            <el-color-picker v-model="topBarDefaultColor" size="default"  @change="onTopBarDefaultColorChange"></el-color-picker>
          </div>
        </div>
        <div class="layout-theme-skin-setings-flex mt15">
          <div class="layout-theme-skin-setings-flex-label">{{ $t('layout.config.top_bar.selected_color') }}</div>
          <div class="layout-theme-skin-setings-flex-value">
            <el-color-picker v-model="topBarSelectedColor" size="default" @change="onTopBarSelectedColorChange"></el-color-picker>
          </div>
        </div>
        <div class="layout-theme-skin-setings-flex mt15">
          <div class="layout-theme-skin-setings-flex-label">{{ $t('layout.config.top_bar.selected_bg') }}</div>
          <div class="layout-theme-skin-setings-flex-value">
            <el-color-picker v-model="topBarBg" size="default"></el-color-picker>
          </div>
        </div>

      </el-scrollbar>
    </el-drawer>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useDark, useToggle} from '@vueuse/core';
import store from '@/store';
import {ElMessage} from "element-plus";
import {getDarkColor, getLightColor} from "@/utils/theme";

export default defineComponent({
  name: 'setings',
  mounted() {
    this.$nextTick(() => {
      store.dispatch('config/setConfigFromSession').then(() => {
        this.onPrimaryColorChange();
        this.onBgChange();
        this.onColorChange();
        this.onBorderChange();
        this.onTopBarBgChange();
        this.onTopBarDefaultColorChange();
      });
    });
  },
  computed: {
    drawer() { // 是否打开设置抽屉
      return store.getters['config/getConfig']('drawer');
    },
    primary: { // 获取主颜色
      get() {
        return store.getters['config/getConfig']('primary');
      },
      set(value) {
        store.dispatch('config/setConfig', {key: 'primary', value: value});
      }
    },
    bg: { // 默认背景颜色
      get() {
        return store.getters['config/getConfig']('bg');
      },
      set(value) {
        store.dispatch('config/setConfig', {key: 'bg', value: value});
      }
    },
    color: {
      get() {
        return store.getters['config/getConfig']('color');
      },
      set(value) {
        store.dispatch('config/setConfig', {key: 'color', value: value});
      }
    },
    border: {
      get() {
        return store.getters['config/getConfig']('border');
      },
      set(value) {
        store.dispatch('config/setConfig', {key: 'border', value: value});
      }
    },
    topBarBg: { // 顶栏背景色
      get() {
        return store.getters['config/getConfig']('topBarBg');
      },
      set(value) {
        store.dispatch('config/setConfig', {key: 'topBarBg', value: value});
      }
    },
    topBarBgGradual: { // 顶栏背景色渐变
      get() {
        return store.getters['config/getConfig']('topBarBgGradual');
      },
      set(value) {
        store.dispatch('config/setConfig', {key: 'topBarBgGradual', value: value});
      }
    },
    topBarDefaultColor:{
      get() {
        return store.getters['config/getConfig']('topBarDefaultColor');
      },
      set(value) {
        store.dispatch('config/setConfig', {key: 'topBarDefaultColor', value: value});
      }
    },
    topBarSelectedColor:{
      get() {
        return store.getters['config/getConfig']('topBarSelectedColor');
      },
      set(value) {
        store.dispatch('config/setConfig', {key: 'topBarSelectedColor', value: value});
      }
    }
  },
  methods: {
    // 关闭
    closeSetingsDrawer() {
      store.dispatch('config/setConfig', {key: 'drawer', value: false});
    },
    onPrimaryColorChange() { // 全局  Primary Color 事件
      let primary = store.getters['config/getConfig']('primary');
      if (!primary) return ElMessage.warning('全局主题 primary 颜色值不能为空');
      // 颜色加深
      document.documentElement.style.setProperty('--el-color-primary-dark-2', `${getDarkColor(primary, 0.1)}`);
      document.documentElement.style.setProperty('--el-color-primary', primary);
      // 颜色变浅
      for (let i = 1; i <= 9; i++) {
        document.documentElement.style.setProperty(`--el-color-primary-light-${i}`, `${getLightColor(primary, i / 10)}`);
      }
    },
    onBgChange() {
      let bg = store.getters['config/getConfig']('bg');
      document.documentElement.style.setProperty('--layout-bg', bg);
    },
    onColorChange() {
      let color = store.getters['config/getConfig']('color');
      document.documentElement.style.setProperty('--layout-color', color);
    },
    onBorderChange() {
      let border = store.getters['config/getConfig']('border');
      document.documentElement.style.setProperty('--layout-border', border);
    },
    onTopBarBgChange(){
      this.onTopBarBgGradualChange();
    },
    onTopBarBgGradualChange(){
      let topBarBgGradual = store.getters['config/getConfig']('topBarBgGradual');
      let color = store.getters['config/getConfig']('topBarBg');
      if(topBarBgGradual){
        document.documentElement.style.setProperty('--layout-nav-bars-bg', `linear-gradient(to bottom left , ${color}, ${getLightColor(color, 0.6)})`);
      } else {
        document.documentElement.style.setProperty('--layout-nav-bars-bg', color);
      }
    },
    onTopBarDefaultColorChange(){
      let topBarDefaultColor = store.getters['config/getConfig']('topBarDefaultColor');
      document.documentElement.style.setProperty('--layout-nav-bars-color', topBarDefaultColor);
    },
    onTopBarSelectedColorChange(){
      let topBarDefaultColor = store.getters['config/getConfig']('topBarDefaultColor');
      document.documentElement.style.setProperty('--layout-nav-bars-hover-bg-color', topBarDefaultColor);
    }
  },
});
</script>
