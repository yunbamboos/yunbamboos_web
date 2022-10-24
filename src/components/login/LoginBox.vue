<template>
  <div class="login-box-container">
    <el-form class="login-box" :rules="rules" ref="loginForm"
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
      <el-button type="primary" size="large" style="width:100%;margin-bottom: 30px;" :loading="loading" @click="submit">登录</el-button>
    </el-form>
  </div>
</template>

<script lang="ts">
export default {
  name: 'LoginBox',
  props: {
    login: {
      type: Object,
      default: () => {
      }
    }
  },
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
      this.loading = true;
      this.$refs.loginForm.validate(async (valid) => {
        if (valid) {
          let res = await this.login.login(this.loginForm.login_name, this.loginForm.password);
          if (res.code == 200) {
            this.$message.success(res.msg);
            return true;
          } else {
            this.$message.error(res.msg);
            this.loading = false;
            return false;
          }
        } else {
          this.$message.error('登录出错请重新输入');
          this.loading = false;
          return false;
        }
      });
    }
  }
}
</script>


<style scoped lang="scss">
.login-box-container {
  width: 100%;
  position: absolute;
  top: 10%;

  .login-box {
    border-radius: 15px;
    width: 350px;
    padding: 15px 35px 15px 35px;
    background: aliceblue;
    border: 1px solid blueviolet;
    box-shadow: 0 0 25px #f885ff;
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
