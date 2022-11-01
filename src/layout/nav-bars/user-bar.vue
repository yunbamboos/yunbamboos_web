<template>
  <div class="layout-nav-bars-user-bar">
    <UserBarLang/>
    <UserBarSearch/>
    <UserBarThemeSkin/>
    <UserBarNotice/>
    <UserBarScreenFull/>
    <UserBarUser/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import UserBarUser from '@/layout/nav-bars/user/user.vue';
import UserBarScreenFull from '@/layout/nav-bars/user/screen-full.vue';
import UserBarNotice from '@/layout/nav-bars/user/notice.vue';
import UserBarThemeSkin from '@/layout/nav-bars/user/theme-skin.vue';
import UserBarSearch from '@/layout/nav-bars/user/search.vue';
import UserBarLang from '@/layout/nav-bars/user/lang.vue';

export default defineComponent({
  name: "LayoutNavBarsUserBar",
  components: {
    UserBarUser,
    UserBarScreenFull,
    UserBarNotice,
    UserBarThemeSkin,
    UserBarSearch,
    UserBarLang
  }
});
</script>
