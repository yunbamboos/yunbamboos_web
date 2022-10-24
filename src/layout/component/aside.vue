<template>
  <div class="layout-aside">
    <Logo/>
    <el-scrollbar class="layout-aside-menu">
      <el-menu :collapse="collapse">
        <template v-for="menu in menuList" :key="menu.path">
          <el-menu-item :index="menu.path" :title="menu.title">
            <span>{{ menu.title }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import {toRefs, reactive, defineComponent} from 'vue';
import Logo from '@/layout/component/logo.vue';

export default defineComponent({
  name: 'aside',
  components: {
    Logo
  },
  setup() {
    const state = reactive({
      collapse: false,
      menuList:[]
    });
    for(let i=0;i<100;i++){
      state.menuList.push({
        path: "path" + i,
        title: "path" + i,
      });
    }
    return {
      ...toRefs(state)
    };
  }
});
</script>
