<template>
  <div class="ui main container">
    <div class="ui segment">
      <form class="ui large form" @submit.prevent="submit">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="text" placeholder="ID" v-model="user.userId" />
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" placeholder="Password" v-model="user.password" />
          </div>
        </div>
        <div class="field" v-if="!isLogin">
          <div class="ui left icon input">
            <i class="tag icon"></i>
            <input type="text" placeholder="Nickname" v-model="user.nickname" />
          </div>
        </div>
        <div class="field" v-if="!isLogin">
          <div class="ui left icon input">
            <i class="calendar icon"></i>
            <input type="text" placeholder="Age" v-model.number="user.age" />
          </div>
        </div>
        <button class="ui button huge green fluid" type="submit">
          {{submitText}}
        </button>
      </form>
    </div>
    <button @click="toggleMode" class="ui button huge grey fluid">
      {{toggleText}}
    </button>
  </div>
</template>

<script>
import axios from "axios";
import {baseUrl} from "../assets/config";

export default {
  name: 'Login',
  data() {
    return {
      isLogin: true,
      user: {
        userId: null,
        password: null,
        nickname: null,
        age: null
      }
    };
  },
  computed: {
    submitText() {
      return  this.isLogin ? "ログイン" : "新規登録"
    },
    toggleText(){
      return this.isLogin ? "新規登録" : "ログイン"
    }
  },
  methods: {
    toggleMode() {
      this.isLogin = !this.isLogin;
    },
    submit() {
      if (!this.user.userId) {
        this.err = "userIdを入力してください";
      } else if (!this.user.password) {
        this.err = "パスワードを入力してください";
      }
      if(this.isLogin) {
        const requestBody = {
          userId: this.user.userId,
          password: this.user.password,
        }
        axios.post(baseUrl + "/user/login", requestBody)
          .then((response) => {
            console.log(response.data);
            window.localStorage.setItem("token", response.data.token);
            window.localStorage.setItem("userId", this.user.userId);
            if (this.$route.name === "Home") {
              return;
            } 
            this.$router.push({ name: "Home"});
          })
          .catch(() => {
            this.err = "予期せぬエラーが発生しました";
          }
        );
        return
      }
      
      if (!this.user.nickname) {
        this.err = "ニックネームを入力してください";
      } else if (!this.user.age) {
        this.err = "年齢を入力してください";
      }
      
      const requestBody = {
        userId: this.user.userId,
        password: this.user.password,
        nickname: this.user.nickname,
        age: this.user.age,
      }
      axios.post(baseUrl + "/user/signup", requestBody)
        .then((response) => {
          console.log(response.data);
        })
        .catch(() => {
          this.err = "予期せぬエラーが発生しました";
        }
      );
    }
  },
}
</script>

<style scoped>
</style>