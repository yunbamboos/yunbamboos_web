<template>
  <div class="layout-logo-container">
    <div class="layout-logo" v-if="getCollapse" :style="getLayoutLogoStyle" @click="onThemeConfigChange">
      <SvgIcon name="logo" size="32" class="layout-logo-medium-img"></SvgIcon>
      <span>{{ $t(title) }}</span>
    </div>
    <div class="layout-logo-size" v-else @click="onThemeConfigChange">
      <SvgIcon name="logo" size="32" class="layout-logo-medium-img"></SvgIcon>
    </div>
  </div>
</template>

<script lang="ts">
import {APP_TITLE} from "@/constant";
import SvgIcon from "@/components/svg-icon/index.vue";
import store from '@/store';

export default {
  name: "LayoutLogo",
  components: {
    SvgIcon
  },
  data() {
    return {
      title: APP_TITLE,
    }
  },
  computed: {
    // 获取侧边栏 展开关闭状态
    getCollapse() {
      return !store.getters['config/getConfig']("collapse");
    },
    getLayoutLogoStyle() {
      let collapse = store.getters['config/getConfig']("collapse");
      let defaultColor = store.getters['config/getConfig']("asideMenuDefaultColor");
      let selectedColor = store.getters['config/getConfig']("asideMenuSelectedColor");
      let color = defaultColor? defaultColor: 'var(--el-color-primary)';
      let hColor = selectedColor? selectedColor: 'var(--color-primary-light-5)';
      if (collapse) {
        return `
                --layout-logo-width:var(--layout-aside-collapse-width);
                --layout-logo-color: ${color};
                --layout-logo-hover-color: ${hColor};
                `;
      } else {
        return `
                --layout-logo-width:var(--layout-aside-width);
                --layout-logo-color: ${color};
                --layout-logo-hover-color: ${hColor};
                 `;
      }
    }
  },
  methods: {
    onThemeConfigChange() {
      let collapse = store.getters['config/getConfig']("collapse");
      store.dispatch('config/setConfig', {
        key: 'collapse',
        value: !collapse
      });
    }
  }
}
</script>
