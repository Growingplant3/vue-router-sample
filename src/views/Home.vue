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
    <p>{{ count }}</p>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
    <!-- <p>{{ myComponentDoubleCount }}</p> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   },
  //   doublecount() {
  //     // return this.$store.state.count * 2;
  //     return this.$store.getters.doubleCount;
  //   },
  //   tripleCount() {
  //     return this.$store.getters.tripleCount;
  //   }
  // },
  // computed: mapGetters(['doubleCount', 'tripleCount']), // mapGettersで呼び出せる
  // computed: mapGetters({
  //   myComponentDoubleCount: 'doubleCount' // キー名を変更できる
  // }),
  computed: {
    ...mapGetters(['doubleCount', 'tripleCount']) // スプレッド演算子
  },
  methods: {
    toUsers() {
      this.$router.push('users');
      // 別の書き方
      // this.$router.push({ path: 'users'});
    }
  }
}
</script>
