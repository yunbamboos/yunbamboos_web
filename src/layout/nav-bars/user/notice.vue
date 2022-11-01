<template>
  <div class="layout-nav-bars-user-bar-icon">
    <SvgIcon class="icon" name="notice">
    </SvgIcon>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue';
import SvgIcon from "@/components/svg-icon/index.vue";

export default defineComponent({
  name: "UserBarNotice",
  components:{
    SvgIcon
  }
});
</script>
