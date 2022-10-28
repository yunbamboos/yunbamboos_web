<template>
  <div class="index-container">
    首页
  </div>
</template>

<script lang="ts">
import store from '@/store';

export default {
  name: "index",
  setup(){
    store.dispatch("config/setConfigFromSession");
    return {};
  }
}
</script>
