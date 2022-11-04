<template>
  <!--展开收缩按钮-->
  <div class="layout-nav-bars-collapse-bar" @click="onThemeConfigChange">
    <SvgIcon :name="getCollapse" size="20" style="margin: auto;"></SvgIcon>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import SvgIcon from '@/components/svg-icon/index.vue';
import store from "@/store";

export default defineComponent({
  name: 'LayoutNavBarsCollapse',
  components: {
    SvgIcon
  },
  computed: {
    getCollapse() {
      return store.getters['config/getConfig']("collapse", "setting") ? 'expand' : 'collapse';
    },
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