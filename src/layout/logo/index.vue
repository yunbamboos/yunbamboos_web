<template>
  <div class="layout-logo" v-if="setShowLogo" :style="getLayoutLogoStyle" @click="onThemeConfigChange">
    <SvgIcon name="logo" size="36" color="#409eff" class="layout-logo-medium-img"></SvgIcon>
    <span>{{ title }}</span>
  </div>
  <div class="layout-logo-size" v-else @click="onThemeConfigChange">
    <SvgIcon name="logo" size="36" color="#409eff" class="layout-logo-medium-img"></SvgIcon>
  </div>
</template>

<script lang="ts">
import {computed} from "vue";
import {APP_TITLE} from "@/constant";
import SvgIcon from "@/components/svg-icon/index.vue";
import store from '@/store';

export default {
  name: "LayoutLogo",
  components: {
    SvgIcon
  },
  setup() {
    // 设置 logo 的显示
    const setShowLogo = computed(() => {
      return !store.getters['config/getConfig']("collapse", "setting");
    });

    const getLayoutLogoStyle = computed(() => {
      let collapse = store.getters['config/getConfig']("collapse", "setting");
      if (collapse) {
        return `--layout-logo-width:64px;`;
      } else {
        return `--layout-logo-width:var(--layout-aside-width);`;
      }
    });

    // 点击logo实现菜单展开/收起
    const onThemeConfigChange = () => {
      let collapse = store.getters['config/getConfig']("collapse", "setting");
      store.dispatch('config/setConfig', {
        group: 'setting',
        key: 'collapse',
        value: !collapse
      });
    };
    return {
      title: APP_TITLE,
      setShowLogo,
      getLayoutLogoStyle,
      onThemeConfigChange
    }
  }
}
</script>

<style scoped lang="scss">
.layout-logo {
  width: var(--layout-logo-width);
  height: var(--layout-logo-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgb(0 21 41 / 2%) 0 1px 4px;
  color: var(--el-color-primary);
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