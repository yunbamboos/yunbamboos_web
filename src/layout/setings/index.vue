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
            <el-color-picker v-model="primary" size="default" @change="onPrimaryColorChange"/>
          </div>
        </div>
        <div class="layout-theme-skin-setings-flex mt15">
          <div class="layout-theme-skin-setings-flex-label">{{ $t('layout.config.global.bg') }}</div>
          <div class="layout-theme-skin-setings-flex-value">
            <el-color-picker v-model="bg" size="default" @change="onBgChange"/>
          </div>
        </div>
        <div class="layout-theme-skin-setings-flex mt15">
          <div class="layout-theme-skin-setings-flex-label">{{ $t('layout.config.global.color') }}</div>
          <div class="layout-theme-skin-setings-flex-value">
            <el-color-picker v-model="color" size="default" @change="onColorChange"/>
          </div>
        </div>
        <div class="layout-theme-skin-setings-flex mt15">
          <div class="layout-theme-skin-setings-flex-label">{{ $t('layout.config.global.border') }}</div>
          <div class="layout-theme-skin-setings-flex-value">
            <el-color-picker v-model="border" size="default" @change="onBorderChange"/>
          </div>
        </div>

        <!-- 顶栏设置 -->
        <el-divider content-position="left">{{ $t('layout.config.top_bar.title') }}</el-divider>
        <div class="layout-theme-skin-setings-flex">
          <div class="layout-theme-skin-setings-flex-label">{{ $t('layout.config.top_bar.bg') }}</div>
          <div class="layout-theme-skin-setings-flex-value">
            <el-color-picker v-model="topBarBg" size="default" @change="onTopBarBgChange"/>
          </div>
        </div>
        <div class="layout-theme-skin-setings-flex mt15">
          <div class="layout-theme-skin-setings-flex-label">{{ $t('layout.config.top_bar.gradual') }}</div>
          <div class="layout-theme-skin-setings-flex-value">
            <el-switch v-model="topBarBgGradual" size="small" @change="onTopBarBgGradualChange"/>
          </div>
        </div>
        <div class="layout-theme-skin-setings-flex mt15">
          <div class="layout-theme-skin-setings-flex-label">{{ $t('layout.config.top_bar.color') }}</div>
          <div class="layout-theme-skin-setings-flex-value">
            <el-color-picker v-model="topBarDefaultColor" size="default" @change="onTopBarDefaultColorChange"/>
          </div>
        </div>
        <div class="layout-theme-skin-setings-flex mt15">
          <div class="layout-theme-skin-setings-flex-label">{{ $t('layout.config.top_bar.selected_color') }}</div>
          <div class="layout-theme-skin-setings-flex-value">
            <el-color-picker v-model="topBarSelectedColor" size="default" @change="onTopBarSelectedColorChange"/>
          </div>
        </div>
        <div class="layout-theme-skin-setings-flex mt15">
          <div class="layout-theme-skin-setings-flex-label">{{ $t('layout.config.top_bar.selected_bg') }}</div>
          <div class="layout-theme-skin-setings-flex-value">
            <el-color-picker v-model="topBarSelectedBg" size="default" @change="onTopBarSelectedBgChange"/>
          </div>
        </div>

        <!-- 菜单栏设置 -->
        <el-divider content-position="left">{{ $t('layout.config.aside_menu.title') }}</el-divider>
        <div class="layout-theme-skin-setings-flex">
          <div class="layout-theme-skin-setings-flex-label">{{ $t('layout.config.aside_menu.bg') }}</div>
          <div class="layout-theme-skin-setings-flex-value">
            <el-color-picker v-model="asideMenuBg" size="default" @change="onAsideMenuBgChange"/>
          </div>
        </div>
        <div class="layout-theme-skin-setings-flex mt15">
          <div class="layout-theme-skin-setings-flex-label">{{ $t('layout.config.aside_menu.gradual') }}</div>
          <div class="layout-theme-skin-setings-flex-value">
            <el-switch v-model="asideMenuBgGradual" size="small" @change="onAsideMenuBgGradualChange"/>
          </div>
        </div>
        <div class="layout-theme-skin-setings-flex mt15">
          <div class="layout-theme-skin-setings-flex-label">{{ $t('layout.config.aside_menu.color') }}</div>
          <div class="layout-theme-skin-setings-flex-value">
            <el-color-picker v-model="asideMenuDefaultColor" size="default" @change="onAsideMenuDefaultColorChange"/>
          </div>
        </div>
        <div class="layout-theme-skin-setings-flex mt15">
          <div class="layout-theme-skin-setings-flex-label">{{ $t('layout.config.aside_menu.selected_color') }}</div>
          <div class="layout-theme-skin-setings-flex-value">
            <el-color-picker v-model="asideMenuSelectedColor" size="default" @change="onAsideMenuSelectedColorChange"/>
          </div>
        </div>
        <div class="layout-theme-skin-setings-flex mt15">
          <div class="layout-theme-skin-setings-flex-label">{{ $t('layout.config.aside_menu.selected_bg') }}</div>
          <div class="layout-theme-skin-setings-flex-value">
            <el-color-picker v-model="asideMenuSelectedBg" size="default" @change="onAsideMenuSelectedBgChange"/>
          </div>
        </div>

      </el-scrollbar>
    </el-drawer>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import store from '@/store';
import computed from "@/layout/setings/computed";
// @ts-ignore
import methods from "@/layout/setings/methods";

export default defineComponent({
  name: 'setings',
  mounted() {
    this.$nextTick(() => {
      store.dispatch('config/setConfigFromSession').then(() => {
        this.init();
        this.initTopBar();
      });
    });
  },
  computed: {
    ...computed
  },
  methods: {
    ...methods
  }
});
</script>
