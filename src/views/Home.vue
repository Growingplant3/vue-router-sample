<template>
  <div>
    <div>router-view開始</div>
    <router-view></router-view>
    <div>router-viewで呼び出されたコンポーネントの中ではrouter-viewは呼び出せない</div>
    <div>router-view終了</div>
    <h3>Home</h3>
    <button
      @click='toUsers'
    >Usersのページに行く</button>
  </div>
</template>

<script>
export default {
  methods: {
    toUsers() {
      this.$router.push('users');
      // 別の書き方
      // this.$router.push({ path: 'users'});
    }
  }
}
</script>
