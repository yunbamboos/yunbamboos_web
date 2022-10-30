<template>
  <el-dropdown :show-timeout="70" :hide-timeout="50" @command="onHandleCommandClick">
			<span class="layout-nav-bars-user-bar-link">

				{{ user.nick_name }}
				<el-icon class="el-icon--right">
					<ele-ArrowDown/>
				</el-icon>
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

export default defineComponent({
  name: "UserBarUser",
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