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
        <SetingsGlobal ref="globalRef"/>
        <!-- 顶栏设置 -->
        <SetingsTopBar/>
      </el-scrollbar>
    </el-drawer>
  </div>
</template>

<script lang="ts">
import {nextTick, defineComponent} from 'vue';
import store from '@/store';
import {Session} from "@/utils/storage";

import SetingsGlobal from "@/layout/setings/setings-global.vue";
import SetingsTopBar from "@/layout/setings/setings-top-bar.vue";

export default defineComponent({
  name: 'setings',
  components:{
    SetingsGlobal,
    SetingsTopBar
  },
  mounted() {
    nextTick(()=>{
      if (Session.get('config')) {
        store.dispatch('config/setConfigFromSession').then(()=>{
          this.$refs.globalRef.onPrimaryColorChange();
        });
      }
    })
  },
  computed: {
    drawer() { // 是否打开设置抽屉
      return store.getters['config/getConfig']('drawer');
    }
  },
  methods: {
    // 关闭
    closeSetingsDrawer() {
      store.dispatch('config/setConfig', {key: 'drawer', value: false});
    }
  },
});
</script>
