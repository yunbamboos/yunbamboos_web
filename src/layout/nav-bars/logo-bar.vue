<template>
  <div class="layout-nav-bars-logo-bar layout-logo-container" :style="getLayoutLogoStyle">
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
import {defineComponent} from 'vue';
import SvgIcon from "@/components/svg-icon/index.vue";
import store from "@/store";
import {APP_TITLE} from "@/constant";

export default defineComponent({
  name: 'LayoutNavBarsLogo',
  components:{
    SvgIcon
  },
  data() {
    return {
      title: APP_TITLE,
    }
  },
  computed:{
    // 获取侧边栏 展开关闭状态
    getCollapse() {
      return !store.getters['config/getConfig']("collapse");
    },
    getLayoutLogoStyle() {
      let collapse = store.getters['config/getConfig']("collapse");
      let topBarDefaultColor = store.getters['config/getConfig']("topBarDefaultColor");
      let topBarSelectedColor = store.getters['config/getConfig']("topBarSelectedColor");
      let color = topBarDefaultColor? topBarDefaultColor: 'var(--el-color-primary)';
      let hColor = topBarSelectedColor? topBarSelectedColor: 'var(--color-primary-light-5)';
      if (collapse) {
        return `
                --layout-logo-width: var(--layout-aside-collapse-width);
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
      let collapse = store.getters['config/getConfig']("collapse", "setting");
      store.dispatch('config/setConfig', {
        group: 'setting',
        key: 'collapse',
        value: !collapse
      });
    }
  }
});
</script>