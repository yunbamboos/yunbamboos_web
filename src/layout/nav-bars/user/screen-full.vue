<template>
  <div class="layout-nav-bars-user-bar-icon" @click="onFullScreenClick"
       :title="screen_full?$t('user.bars.screen_full.cancel_title'):$t('user.bars.screen_full.title')">
    <SvgIcon
        class="icon"
        :name="!screen_full? 'full_screen':'cancel_full_screen'"
        :size="getComponentSize"
    >
    </SvgIcon>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue';
import { ElMessage } from 'element-plus';
import SvgIcon from "@/components/svg-icon/index.vue";
import fullScreen from 'screenfull';
import store from "@/store";

export default defineComponent({
  name: "UserBarScreenFull",
  components: {
    SvgIcon,
  },
  setup() {
    const state = reactive({
      screen_full: false,
    });

    // 全屏点击时
    const onFullScreenClick = () => {
      if (!fullScreen.isEnabled) {
        ElMessage.warning('暂不不支持全屏');
        return false;
      }
      fullScreen.toggle();
      fullScreen.on('change', () => {
        state.screen_full = fullScreen.isFullscreen;
      });
    };
    return {
      ...toRefs(state),
      onFullScreenClick
    }
  },
  computed: {
    getComponentSize: () => {
      let size = store.getters['config/getConfig']('globalComponentSize');
      return size === 'large' ? '20' : size === 'default' ? '16' : '14';
    }
  }
});
</script>