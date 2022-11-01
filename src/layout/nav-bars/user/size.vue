<template>
  <el-dropdown :show-timeout="70" :hide-timeout="50" trigger="click" style="height: 100%;" @command="onSizeChange">
    <div class="layout-nav-bars-user-bar-icon" :title="$t('user.bars.size.title')">
      <SvgIcon class="icon" name="size" :size="getComponentSize"></SvgIcon>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="large" :disabled="getGlobalComponentSize === 'large'">
          {{ $t('user.bars.size.large') }}
        </el-dropdown-item>
        <el-dropdown-item command="default" :disabled="getGlobalComponentSize === 'default'">
          {{ $t('user.bars.size.default') }}
        </el-dropdown-item>
        <el-dropdown-item command="small" :disabled="getGlobalComponentSize === 'small'">
          {{ $t('user.bars.size.small') }}
        </el-dropdown-item>
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
  methods: {
    onSizeChange(size: string) {
      store.dispatch('config/setConfig', {
        key: 'globalComponentSize',
        value: size
      });
    }
  },
  computed: {
    getGlobalComponentSize() {
      return store.getters['config/getConfig']('globalComponentSize');
    },
    getComponentSize() {
      let size = store.getters['config/getConfig']('globalComponentSize');
      return size === 'large' ? '20' : size === 'default' ? '16' : '14';
    }
  }
});
</script>
