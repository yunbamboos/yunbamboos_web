<template>
  <router-view></router-view>
</template>
<script lang="ts">
import {watch} from 'vue';
import tool from '@/utils/tool';
import { useRoute } from 'vue-router';

export default {
  name: 'app',
  setup() {
    // 监听路由的变化，设置网站标题
    const route = useRoute();
    watch(
        () => route.path, () => {
          tool.useTitle();
        },
        {
          deep: true
        }
    );
    return {};
  }
}
</script>

