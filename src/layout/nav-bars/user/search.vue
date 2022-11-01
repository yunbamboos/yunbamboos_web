<template>
  <div class="layout-nav-bars-user-bar-icon" :title="$t('user.bars.search.title')">
    <SvgIcon class="icon" name="search" :size="getComponentSize"></SvgIcon>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue';
import SvgIcon from "@/components/svg-icon/index.vue";
import store from "@/store";

export default defineComponent({
  name: "UserBarSearch",
  components:{
    SvgIcon
  },
  computed: {
    getComponentSize: () => {
      let size = store.getters['config/getConfig']('globalComponentSize');
      return size === 'large' ? '20' : size === 'default' ? '16' : '14';
    }
  }
});
</script>
