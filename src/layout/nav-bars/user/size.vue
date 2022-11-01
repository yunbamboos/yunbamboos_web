<template>
  <el-dropdown :show-timeout="70" :hide-timeout="50" trigger="click" style="height: 100%;" @command="onSizeChange">
    <div class="layout-nav-bars-user-bar-icon" :title="$t('user.bars.size.title')">
      <SvgIcon class="icon" name="size" size="16"></SvgIcon>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="large" :disabled="getGlobalComponentSize === 'large'">{{$t('user.bars.size.large')}}</el-dropdown-item>
        <el-dropdown-item command="default" :disabled="getGlobalComponentSize === 'default'">{{$t('user.bars.size.default')}}</el-dropdown-item>
        <el-dropdown-item command="small" :disabled="getGlobalComponentSize === 'small'">{{$t('user.bars.size.small')}}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, computed} from 'vue';
import SvgIcon from "@/components/svg-icon/index.vue";
import store from '@/store';

export default defineComponent({
  name: "UserBarSize",
  components: {
    SvgIcon
  },
  setup() {
    const state = reactive({
      disabledSize: 'large',
    });
    const onSizeChange = (size: string) => {
      store.dispatch('config/setConfig', {
        key: 'globalComponentSize',
        value: size
      });
    };
    const getGlobalComponentSize = computed(()=>{
      return store.getters['config/getConfig']('globalComponentSize');
    });
    return {
      ...toRefs(state),
      onSizeChange,
      getGlobalComponentSize
    }
  },

});
</script>
