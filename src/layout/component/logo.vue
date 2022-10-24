<template>
  <div class="layout-aside-logo">
    <div class="layout-aside-logo-image">
      <el-image src="/images/logo.png" style="width: 45px; height: 45px;margin:0 auto;"></el-image>
    </div>
    <div class="layout-aside-logo-text">
      电影推荐系统
    </div>
  </div>
</template>

<script lang="ts">
import {APP_TITLE} from "@/constant";

export default {
  name: "logo",
  data(){
    return {
      title: APP_TITLE
    }
  }
}
</script>
