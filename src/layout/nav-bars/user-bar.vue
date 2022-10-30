<template>
  <div class="layout-nav-bars-user-bar">
    <UserBarUser/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import UserBarUser from '@/layout/nav-bars/user/user.vue';

export default defineComponent({
  name: "LayoutNavBarsUserBar",
  components: {
    UserBarUser
  }
});
</script>

<style scoped lang="scss">
.layout-nav-bars-user-bar {
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

}
</style>