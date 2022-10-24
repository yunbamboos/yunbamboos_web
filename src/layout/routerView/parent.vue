<template>
  <div class="h100" :style="{ minHeight }">
    <router-view v-slot="{ Component }">
      <transition :name="setTransitionName" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="refreshRouterViewKey"/>
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, toRefs, reactive, onBeforeMount, nextTick, watch} from 'vue';
import { useRoute } from 'vue-router';
import {store} from '@/store';

// 定义接口来定义对象的类型
interface ParentViewState {
  refreshRouterViewKey: null | string;
  keepAliveNameList: string[];
}

export default defineComponent({
  name: "layoutParentView",
  props: {
    minHeight: {
      type: String,
      default: '',
    },
  },
  setup() {
    const route = useRoute();
    const state = reactive<ParentViewState>({
      refreshRouterViewKey: null,
      keepAliveNameList: [],
    });
    // 设置主界面切换动画
    const setTransitionName = computed(() => {
      return store.state.app.app.animation;
    });
    // 页面加载前，处理缓存，页面刷新时路由缓存处理
    onBeforeMount(() => {
      nextTick(() => {
        // state.refreshRouterViewKey = fullPath;
        // state.keepAliveNameList = getKeepAliveNames.value;
      });
    });
    // 监听路由变化，防止 tagsView 多标签时，切换动画消失
    watch(
        () => route.fullPath,
        () => {
          state.refreshRouterViewKey = route.fullPath;
        }
    );
    return {
      setTransitionName,
      ...toRefs(state)
    };
  }
});
</script>
