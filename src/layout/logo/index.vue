<template>
  <div class="layout-aside-logo">
    <div class="layout-aside-logo-image">
      <SvgIcon name="logo" size="36" color="#409eff" style="margin: 0 auto" ></SvgIcon>
    </div>
    <div class="layout-aside-logo-text">
      电影推荐系统
    </div>
  </div>
</template>

<script lang="ts">
import {APP_TITLE} from "@/constant";
import SvgIcon from "@/components/svg-icon/index.vue";
export default {
  name: "logo",
  components:{
    SvgIcon
  },
  data(){
    return {
      title: APP_TITLE
    }
  }
}
</script>
