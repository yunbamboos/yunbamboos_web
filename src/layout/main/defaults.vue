<template>
  <el-container class="layout-container">
    <LayoutAside/>
    <el-container class="flex-center">
      <LayoutHeader v-show="getFixedHeader" />
      <el-scrollbar>
        <LayoutHeader v-show="!getFixedHeader" />
      </el-scrollbar>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from '@/store';
import LayoutAside from '@/layout/component/aside.vue';
import LayoutHeader from '@/layout/component/header.vue';

export default defineComponent({
  name: "LayoutDefaults",
  components:{
    LayoutAside,
    LayoutHeader
  },
  computed:{
    getFixedHeader(){
      return store.getters['config/getConfig']('fixedHeader', 'setting');
    }
  }
});
</script>
