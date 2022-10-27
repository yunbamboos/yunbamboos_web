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
    store.dispatch("config/setConfig", {
      key:"1",
      value:1
    });
    store.dispatch("config/setConfig", {
      group: "2",
      key:"1",
      value:1
    });
    console.log(store.getters["config/getConfig"]("1","2"));
    return {};
  }
}
</script>
