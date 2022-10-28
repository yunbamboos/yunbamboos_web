<template>
  <el-config-provider :message="message">
    <router-view></router-view>
  </el-config-provider>
</template>
<script lang="ts">
import {defineComponent, nextTick} from 'vue';
import tool from '@/utils/tool';
import store from '@/store';
import {Session} from '@/utils/storage';

export default defineComponent({
  name: 'app',
  data() {
    return {
      message:{ // 消息弹框最多3个
        max: 3
      }
    };
  },

  watch: {
    // 监听路由变化 修改网页标题
    '$route.path': {
      handler() {
        tool.useTitle();
      },
      immediate: true
    }
  },
  mounted: function () {
    nextTick(() => {
      // 获取缓存中的布局配置
      if (Session.get('config')) {
        store.dispatch('config/setConfigFromSession');
        //document.documentElement.style.cssText = Session.get('themeConfigStyle');
      }
    });
  }
});
</script>

