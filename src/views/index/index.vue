<template>
  <div class="index-container">
    首页

    <el-color-picker v-model="color" size="large" />
  </div>
</template>

<script lang="ts">

export default {
  name: "index",
  setup(){
    return {
      color:'#ffffff'
    };
  }
}
</script>
