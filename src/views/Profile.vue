<template>
  <div class="ui main container">
    <div class="ui segment">
      <form class="ui large form" @submit.prevent="submit">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="text" placeholder="ID" v-model="user.userId" required disabled />
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="text" placeholder="Password" v-model="user.password" />
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="tag icon"></i>
            <input type="text" placeholder="Nickname" v-model="user.nickname" />
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="calendar icon"></i>
            <input type="text" placeholder="Age" v-model.number="user.age" />
          </div>
        </div>
        <p>{{err}}</p>
        <button class="ui button huge green fluid" type="submit">
          更新
        </button>
      </form>
    </div>
    <button @click="deleteUser" class="ui button huge grey fluid">
      退会
    </button>
  </div>
</template>

<script>
import axios from "axios";
import {baseUrl} from "../assets/config";

export default {
  name: 'Profile',
  data() {
    return {
      user: {
        userId: window.localStorage.getItem("userId"),
        password: null,
        nickname: null,
        age: null
      },
      err: null
    }
  },
  methods: {
    submit() {
      if (!this.user.password) {
        this.err = "パスワードを入力してください";
        return
      } else if (!this.user.nickname) {
        this.err = "ニックネームを入力してください";
        return
      } else if (!this.user.age) {
        this.err = "年齢を入力してください";
        return;
      }
      const requestBody = {
        userId: this.user.userId,
        password: this.user.password,
        nickname: this.user.nickname,
        age: this.user.age
      }
      axios.put(baseUrl + "/user", requestBody)
        .then(() => {
          this.$router.push({name: "Home"});
        })
        .catch((e) => {
          throw new Error(e);
        })
    },
    deleteUser() {
      axios.delete(baseUrl + "/user", {
        headers: {
          authorization: "mtiToken",
        },
        data: {
          userId: this.user.userId
        }
      })
      .then(() => {
        this.$router.push({ name: "Login"});
      })
      .catch((e) => {
        throw new Error(e);
      })
    }
  },
  created() {
    axios.get(baseUrl + "/user" + "?userId=" + this.user.userId)
      .then((response) => {
        console.log(response);
        this.user.nickname = response.data.nickname;
        this.user.age = response.data.age;
      })
      .catch(() => {
        this.err = "予期せぬエラーが発生しました";
      }
    );
  }
}
</script>

<style scoped>
</style>