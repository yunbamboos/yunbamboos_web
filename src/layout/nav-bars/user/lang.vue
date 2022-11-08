<template>
  <el-dropdown :show-timeout="70"
               :hide-timeout="50"
               trigger="click"
               :style="getStyle"
               @command="onLanguageChange">
    <div class="layout-nav-bars-user-bar-icon" :title="$t('user.bars.lang.title')">
      <SvgIcon class="icon" :name="getLang" :size="getComponentSize"></SvgIcon>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="zh-cn" :disabled="disabledI18n === 'zh-cn'">简体中文</el-dropdown-item>
        <el-dropdown-item command="en" :disabled="disabledI18n === 'en'">English</el-dropdown-item>
        <el-dropdown-item command="zh-tw" :disabled="disabledI18n === 'zh-tw'">繁體中文</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import {computed, defineComponent, getCurrentInstance, reactive, toRefs} from 'vue';
import SvgIcon from "@/components/svg-icon/index.vue";
import tool from '@/utils/tool';
import store from '@/store';

export default defineComponent({
  name: "UserBarLang",
  components: {
    SvgIcon
  },
  setup() {
    const {proxy} = <any>getCurrentInstance();
    const state = reactive({
      disabledI18n: 'zh-cn',
    });
    // 语言切换
    const onLanguageChange = (lang: string) => {
      proxy.$i18n.locale = lang;
      state.disabledI18n = lang;
      store.dispatch('config/setConfig', {
        key: 'globalI18n',
        value: lang
      });
      tool.useTitle();
    };
    return {
      ...toRefs(state),
      onLanguageChange
    }
  },
  computed: {
    getLang: () => {
      return store.getters['config/getConfig']('globalI18n');
    },
    getComponentSize: () => {
      let size = store.getters['config/getConfig']('globalComponentSize');
      return size === 'large' ? '20' : size === 'default' ? '16' : '14';
    },
    getStyle() {
      return `height: 100%;
              --el-text-color-regular: var(--layout-nav-bars-color);
              `;
    }
  }
});
</script>
