<template>
  <el-dropdown :show-timeout="70" :hide-timeout="50">
			<span class="layout-nav-bars-user-bar-link">
        <UserAvatar/>
				{{ user.nick_name }}
				<SvgIcon name="arrow" size="16" style="margin-left: 5px;margin-right: 5px;"/>
			</span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="/home">{{ $t('user.dropdown1') }}</el-dropdown-item>
        <el-dropdown-item command="wareHouse">{{ $t('user.dropdown6') }}</el-dropdown-item>
        <el-dropdown-item command="/personal">{{ $t('user.dropdown2') }}</el-dropdown-item>
        <el-dropdown-item command="/404">{{ $t('user.dropdown3') }}</el-dropdown-item>
        <el-dropdown-item command="/401">{{ $t('user.dropdown4') }}</el-dropdown-item>
        <el-dropdown-item divided command="logOut">{{ $t('user.dropdown5') }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue';
import store from '@/store';
import SvgIcon from '@/components/svg-icon/index.vue';
import UserAvatar from '@/components/user-avatar/index.vue';

export default defineComponent({
  name: "UserBarUser",
  components:{
    SvgIcon,
    UserAvatar
  },
  setup() {
    const state = reactive({
      user: store.getters['user/getUser'](),
    });

    return {
      ...toRefs(state)
    }
  },
  computed: {}
});
</script>

<style scoped lang="scss">
.layout-nav-bars-user-bar-link {
  height: 100%;
  display: flex;
  align-items: center;
  white-space: nowrap;

  &-photo {
    border-radius: 100%;
    margin-right: 5px;
  }
}
</style>