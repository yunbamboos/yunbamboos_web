<template>
  <div class="main-container">
    <div class="login-container">
      <LoginBox :login="login"/>
    </div>
  </div>
</template>

<script lang="ts">
import LoginBox from '@/components/login/LoginBox.vue';
import {login, user} from '@/api';
import store from '@/store';
import router from '@/router';

export default {
  name: 'login',
  components: {
    LoginBox
  },
  data() {
    return {
      login: {
        login: async (loginName: string, password: string) => {
          return login.login({
            login_name: loginName,
            password: password
          }).then(async (data) => {
            if (data.code == 200) {
              // 设置登录信息
              await store.dispatch('config/setConfig', {
                key: 'authorization',
                value: {
                  account_token: data.data.token.account_token,
                  refresh_token: data.data.token.refresh_token
                }
              });
              // 查询当前登录用户信息
              await user.queryCurLoginUser().then(data => {
                store.dispatch('user/setUser', data);
              });
              // 查询当前用户菜单

              await router.push({path: '/index'});
            }
            return data;
          });
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.login-container {
  width: 100%;
  height: 100%;
  background: url("/images/bg.jpg") no-repeat;
}
</style>
