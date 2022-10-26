<template>
  <div class="login-container">
    <LoginBox :login="login"/>
  </div>
</template>

<script lang="ts">
import LoginBox from '@/components/login/LoginBox.vue';
import {login, user} from '@/api';
import store from '@/store';
import {useRoute, useRouter} from 'vue-router';

export default {
  name: 'login',
  components: {
    LoginBox
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

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
              if (route.query?.redirect) {
                await router.push({
                  path: <string>route.query?.redirect,
                  query: Object.keys(<string>route.query?.params).length > 0 ? JSON.parse(<string>route.query?.params) : '',
                });
              } else {
                await router.push('/index');
              }
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
