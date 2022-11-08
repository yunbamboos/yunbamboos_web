<template>
  <div class="index-container">
    <el-color-picker v-model="color" size="large" />
    <template v-for="i in 100">
      首页{{i}}<br>
    </template>
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
