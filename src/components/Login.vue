<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required/>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required/>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      console.log("logging in with", this.username, this.password);
      axios.post('/api/login', {
        username: this.username,
        password: this.password
      }).then(response => {
        if (response.status === 200 && response.data.code === 200) {
          console.log("登录成功", response.data);
          // 跳转到 main 页面
          this.$router.push('/main');
          console.log("跳转main 成功");
        } else {
          console.error("登录失败，状态码或数据不符合预期");
          // 显示错误消息给用户
          alert(response.data.message || "登录失败，请检查您的用户名和密码");
        }
      }).catch(error => {
        console.log("登录失败",error.data);
        // 处理登录失败的情况
      })
    }
  }
};
</script>
<style scoped>
.login-container {
  width: 300px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
</style>