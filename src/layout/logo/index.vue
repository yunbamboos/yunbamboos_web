<template>
  <div class="layout-logo" v-if="getCollapse" :style="getLayoutLogoStyle" @click="onThemeConfigChange">
    <SvgIcon name="logo" size="32" class="layout-logo-medium-img"></SvgIcon>
    <span>{{ title }}</span>
  </div>
  <div class="layout-logo-size" v-else @click="onThemeConfigChange">
    <SvgIcon name="logo" size="32" class="layout-logo-medium-img"></SvgIcon>
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
  setup() {
    return {
      title: APP_TITLE,
    }
  },
  computed: {
    // 获取侧边栏 展开关闭状态
    getCollapse() {
      return !store.getters['config/getConfig']("collapse", "setting");
    },
    getLayoutLogoStyle() {
      let collapse = store.getters['config/getConfig']("collapse", "setting");
      if (collapse) {
        return `--layout-logo-width:var(--layout-aside-collapse-width);`;
      } else {
        return `--layout-logo-width:var(--layout-aside-width);`;
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
}
</script>

<style scoped lang="scss">
.layout-logo {
  width: var(--layout-logo-width);
  height: var(--layout-logo-height);
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgb(0 21 41 / 2%) 0 1px 4px;
  font-size: 16px;
  cursor: pointer;
  animation: logoAnimation 0.3s ease-in-out;

  span {
    white-space: nowrap;
    display: inline-block;
  }

  &:hover {
    span {
      color: var(--color-primary-light-2);
    }
  }

  &-medium-img {
    width: 20px;
    margin-right: 5px;
  }
}

.layout-logo-size {
  width: 100%;
  height: var(--layout-logo-height);
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  animation: logoAnimation 0.3s ease-in-out;

  &-img {
    width: 20px;
    margin: auto;
  }

  &:hover {
    img {
      animation: logoAnimation 0.3s ease-in-out;
    }
  }
}
</style>