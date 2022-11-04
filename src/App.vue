<template>
  <el-config-provider :size="getGlobalComponentSize" :message="message">
    <router-view></router-view>
    <Setings ref="setingsRef"/>
  </el-config-provider>
</template>
<script lang="ts">
import {defineComponent, nextTick} from 'vue';
import tool from '@/utils/tool';
import store from '@/store';
import Setings from '@/layout/setings/index.vue';

export default defineComponent({
  name: 'app',
  components: {
    Setings
  },
  data() {
    return {
      message: { // 消息弹框最多3个
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
      this.mittBus.on('openSetingsDrawer', () => {
         this.openSetingsDrawer();
      });
    });
  },
  computed: {
    getGlobalComponentSize: () => {
      return store.getters['config/getConfig']('globalComponentSize');
    }
  },
  methods: {
    openSetingsDrawer() {
      store.dispatch('config/setConfig',{key: 'drawer', value: true});
    },

  }
});
</script>

