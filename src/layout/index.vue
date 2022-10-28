<template>
  <component :is="layout"/>
</template>
<script lang="ts">
import {onBeforeMount, onUnmounted, getCurrentInstance, defineComponent, defineAsyncComponent} from 'vue';
import store from '@/store';
import {Session} from '@/utils/storage';

export default defineComponent({
  name: 'Layout',
  components: {
    defaults: defineAsyncComponent(() => import('@/layout/main/defaults.vue')),
    classic: defineAsyncComponent(() => import('@/layout/main/classic.vue')),
    transverse: defineAsyncComponent(() => import('@/layout/main/transverse.vue')),
    columns: defineAsyncComponent(() => import('@/layout/main/columns.vue')),
  },
  setup() {
    const {proxy} = <any>getCurrentInstance();
    const layout = store.getters['config/getConfig']('layout');
    // 窗口大小改变时执行
    const onLayoutResize = () => {
      if (!Session.get('oldLayout')) Session.set('oldLayout', layout);
      const clientWidth = document.body.clientWidth;
      if (clientWidth < 1000) {
        store.dispatch('config/setConfig', {
          group: 'setting', key: 'collapse', value: false
        });
        proxy.mittBus.emit('layoutMobileResize', {
          layout: 'defaults',
          clientWidth,
        });
      } else {
        proxy.mittBus.emit('layoutMobileResize', {
          layout: Session.get('oldLayout') ? Session.get('oldLayout') : layout,
          clientWidth,
        });
      }
    };
    // 页面加载前
    onBeforeMount(() => {
      onLayoutResize();
      window.addEventListener('resize', onLayoutResize);
    });
    // 页面卸载时
    onUnmounted(() => {
      window.removeEventListener('resize', onLayoutResize);
    });
    return {
      layout
    }
  }
})
</script>
