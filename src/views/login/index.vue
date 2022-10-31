<template>
  <div class="login-container">
    <div class="login-box-container">
      <el-form class="login-box" :rules="rules" ref="loginFormRef"
               :model="loginForm"
               label-position="left"
               label-width="0px">
        <div class="login-title">系统登录</div>
        <el-form-item prop="login_name">
          <el-input type="text" size="large" v-model="loginForm.login_name" placeholder="亲，请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" size="large" v-model="loginForm.password" placeholder="亲，请输入密码"></el-input>
        </el-form-item>
        <el-button type="primary" size="large" style="width:100%;margin-bottom: 30px;" :loading="loading"
                   @click="submit">登 录
        </el-button>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {ElMessage} from 'element-plus';
import {login} from '@/api';
import store from '@/store';
import loading from '@/utils/loading';

export default defineComponent({
  name: 'login',
  data() {
    return {
      loading: false,
      loginForm: {
        login_name: 'yunzhu',
        password: '123456'
      },
      rules: {
        login_name: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 5, max: 14, message: '长度在 5 到 14 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 6, message: '密码长度要大于6', trigger: 'blur'}],
      }
    }
  },
  methods: {
    submit() {
      this.$refs.loginFormRef.validate(async (valid) => {
        if (valid) {
          this.login();
        }
      });
    },
    login() {
      this.loading = true;
      login.login({
        login_name: this.loginForm.login_name,
        password: this.loginForm.password,
      }).then(result => {
        if (result.code == 200) {
          this.loginSuccess(result.data);
        } else {
          this.loginError(result.msg);
        }
      });
    },
    loginSuccess(data) {
      // 设置token
      store.dispatch('token/setToken', {
        token_id: data.token.token_id
      }).then(() => {
        this.loadUserInfo();
      });
    },
    loginError(msg) {
      this.loading = false;
      ElMessage.error(msg);
    },
    loadUserInfo() {
      let that = this;
      let route= this.$route;
      let router= this.$router;
      let jump = {
        user: false, config: false, menu: false,
        jump(type) {
          this[type] = true;
          if (this.user && this.config && this.menu) {
            if (route.query?.redirect) {
              router.push({
                path: <string>route.query?.redirect,
                //query: Object.keys(<string>route.query?.params).length > 0 ? JSON.parse(<string>route.query?.params) : '',
              });
            } else {
              router.push('/');
            }
            // 登录成功提示
            // 关闭 loading
            that.loading = true;
            ElMessage.success('你好,登陆成功');
            // 添加 loading，防止第一次进入界面时出现短暂空白
            loading.start();
          }
        }
      };
      // 加载用户信息
      store.dispatch('user/queryCurLoginUser').then(() => {
        jump.jump('user');
      }, msg => {
        ElMessage.error(msg);
      });
      // 加载用户配置
      store.dispatch('config/queryCurLoginUserConfig').then(() => {
        jump.jump('config');
      }, msg => {
        ElMessage.error(msg);
      });
      // 加载用户菜单列表
      store.dispatch('menuList/queryCurLoginUserMenuList').then(() => {
        jump.jump('menu');
      }, msg => {
        ElMessage.error(msg);
      });
    }
  }
})
</script>

<style scoped lang="scss">
.login-container {
  width: 100%;
  height: 100%;
  background: url("/images/bg.jpg") no-repeat;
}

.login-box-container {
  width: 100%;
  position: absolute;
  top: 10%;

  .login-box {
    border-radius: 15px;
    width: 350px;
    padding: 15px 35px 15px 35px;
    background: aliceblue;
    border: 1px solid var(--el-color-primary);
    box-shadow: 0 0 25px var(--el-color-primary-light-2);
    position: absolute;
    left: 0;
    right: 0;
    margin: 20px auto;
  }

  .login-title {
    text-align: center;
    font-size: 40px;
    padding-top: 35px;
    padding-bottom: 30px;
  }
}
</style>
