<template>
  <div class="ui main container">
    <div class="ui segment">
      <form class="ui form">
        <div class="field">
          <label>ユーザー名</label>
          <input type="text" placeholder="Nickname" v-model="nickname" />
        </div>
        <div class="field">
          <label>年齢</label>
          <div class="inline fields">
            <div class="field">
              <input type="text" v-model="start" />
              <label>歳から</label>
            </div>
            <div class="field">
              <input type="text" v-model="end" />
              <label>歳まで</label>
            </div>
          </div>
        </div>
      </form>
    </div>
    
    <template v-for="(user, index) in filterdUsers" >
      <div class="ui segment" :key="index">
        <h2 class="ui header">
          <div class="content">
            {{user.nickname}}
            <div class="ui green label">{{user.age}}</div>
            <div class="sub header">{{user.userId}}</div>
          </div>
        </h2>
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import {baseUrl} from "../assets/config";

export default {
  name: 'User',
  data() {
    return {
      users: [],
      nickname: null,
      start: 0,
      end: 100,
    };
  },
  computed: {
    filterdUsers() {
      let result = this.users;
      if (this.nickname) {
        result = result.filter(target => {
          return target.nickname.match(this.nickname);
        });
      }
      if (this.start) {
        result = result.filter(target => {
          return target.age >= this.start;
        });
      }
      if (this.end) {
        result = result.filter(target => {
          return target.age <= this.end;
        });
      }
      return result;
    }
  },
  created() {
    axios.get(baseUrl + "/users")
      .then((response) => {
        console.log(response);
        this.users = response.data;
      })
      .catch(() => {});
  }
}
</script>

<style scoped>
</style>