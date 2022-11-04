<template>
  <div class="layout-nav-bars-breadcrumb-bar">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, onMounted} from 'vue';
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';

// 定义接口来定义对象的类型
interface BreadcrumbState {
  breadcrumbList: Array<any>;
  routeSplit: Array<string>;
  routeSplitFirst: string;
  routeSplitIndex: number;
}

export default defineComponent({
  name: "LayoutNavBarsBreadcrumbBar",
  setup(){
    const route = useRoute();
    const router = useRouter();
    const state = reactive<BreadcrumbState>({
      breadcrumbList: [],
      routeSplit: [],
      routeSplitFirst: '',
      routeSplitIndex: 1,
    });
    // 当前路由字符串切割成数组，并删除第一项空内容
    const initRouteSplit = (path: string) => {
      console.log(path);
    }
    // 页面加载时
    onMounted(() => {
      initRouteSplit(route.path);
    });
    // 路由更新时
    onBeforeRouteUpdate((to) => {
      initRouteSplit(to.path);
    });
    return {
      ...toRefs(state)
    }
  }
});
</script>