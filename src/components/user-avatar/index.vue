<template>
  <el-avatar class="layout-nav-bars-user-bar-link-photo" :size="36" :src="src"/>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue';

export default defineComponent({
  name: "UserAvatar",
  props:{
    user_id: {
      type: Number,
      default: ()=>0,
    }
  },
  setup(){
    return {
      src:'/user/image'
    }
  }
});
</script>

<style scoped>

</style>