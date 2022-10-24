<template>
  <Aside/>
  <div class="layout-main">
    <div class="layout-header">

    </div>
    <div class="layout-center">

    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent} from 'vue';
import Aside from '@/layout/component/aside.vue';

export default defineComponent({
  name: "layout",
  components:{
    Aside
  }
})
</script>
