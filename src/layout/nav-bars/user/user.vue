<template>
  <el-dropdown :show-timeout="70" :hide-timeout="50">
			<span class="layout-nav-bars-user-bar-link">
        <UserAvatar :user_id="user.user_id"/>
				{{ user.nick_name }}
				<SvgIcon name="arrow" size="16" style="margin-left: 5px;margin-right: 5px;"/>
			</span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="/home">{{ $t('user.bars.info.home') }}</el-dropdown-item>
        <el-dropdown-item command="/personal">{{ $t('user.bars.info.personal') }}</el-dropdown-item>
        <el-dropdown-item divided command="logOut">{{ $t('user.bars.info.log_out') }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue';
import store from '@/store';
import SvgIcon from '@/components/svg-icon/index.vue';
import UserAvatar from '@/components/user-avatar/index.vue';
import {User} from "@/model";

interface StateType {
  user: User;
}

export default defineComponent({
  name: "UserBarUser",
  components:{
    SvgIcon,
    UserAvatar
  },
  setup() {
    const state = reactive<StateType>({
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
  margin-right: 5px;

  &-photo {
    border-radius: 100%;
    margin-right: 5px;
  }
}
</style>