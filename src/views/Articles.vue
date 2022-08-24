<template>
  <div>
    <div class="ui main container">
      <!-- 基本的なコンテンツはここに記載する -->
      <!-- 記事の投稿 -->
      <div class="post-article">
          <div class="ui segment">
              <form class="ui form">
                  <div class="field">
                      <textarea></textarea>
                  </div>
                  
                  <div class="field">
                      <div class="inline field">
                          <div class="field">
                              <label>カテゴリー</label>
                              <input type="text" name="categoryName"/>
                              <button type="submit">
                              投稿
                              </button>
                          </div>
                      </div>
                  </div>
              </form>
          </div>
      </div>
      
      <!--記事の検索-->
      <div class="search-article">
          <div class="ui large segment">
              <form class="ui form">
                  <div class="field">
                    <label>ユーザ名</label>
                    <input type="text" name="userName" required/>
                  </div>
                  <div class="field">
                    <label>カテゴリー名</label>
                    <input type="text" name="categoryName"/>
                  </div>
                  <div class="field flex">
                    <label>投稿日時</label>
                      <div class="ui input">
                        <input type="date" name="dateStart"/>から
                        <input type="date" name="dateEnd"/>まで
                      </div>
                  </div>
                  <button class="ui button fluid green" type="submit">
                      検索
                  </button>
              </form>
          </div>
      </div>
      
      <!--記事の表示，削除-->
      <div class="list-articles">
          <div class="ui main container">
              <div class="ui segment">
                  <div class="ui header">
                    UserName
                    <button class="delete-post ui button right floated">削除</button>  
                  </div>
                    <div class="content">
                        <div class="post-date">
                            2022.08.24
                        </div>
                        <div class="ui message">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, minus, quidem? Fugiat quia id beatae eum pariatur, obcaecati soluta porro, dolor nobis, quaerat dolorum voluptatum quidem aliquid molestias nulla atque voluptatibus cumque sint. Iure, necessitatibus, inventore. Eum possimus magnam laboriosam! Nisi sapiente veritatis facilis odit dolorum quae reprehenderit totam quis.
                        </div>
                        <div class="tag ui label">
                            tag
                        </div>
                    </div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
// 必要なものはここでインポートする
// @は/srcの同じ意味です
// import something from '@/components/something.vue';

export default {
  name: 'Articles',
  components: {
    // 読み込んだコンポーネント名をここに記述する
  },
  data() {
    // Vue.jsで使う変数はここに記述する
    return {};
  },
  computed: {
    // 計算した結果を変数として利用したいときはここに記述する
  },
  methods: {
    // Vue.jsで使う関数はここで記述する
  },
};
</script>
<style scoped>
/* このコンポーネントだけに適用するCSSは */

</style>
