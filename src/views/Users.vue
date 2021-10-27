<template>
  <div>
    <h3>Users</h3>
    <router-link
    to='/users/1'
    >ユーザー1</router-link>
    <router-link
    to='/users/2'
    >ユーザー2</router-link>
    <hr>
    <h1>User No. {{ id }}</h1>
    <router-link
    :to="'/users/' + (Number(id) + 1) + '/profile?lang=en'"
    >次のユーザー</router-link>
    <hr>
    <router-view></router-view>
    <div style='height: 700px;'></div>
    <router-link
    id='next-user'
    :to="{ name: 'users-id-profile', params: { id: Number(id)+1 }, query: { lang: 'ja', page: 2 }, hash: '#next-user' }"
    >次のユーザー</router-link>
  </div>
</template>

<script>
export default {
  props: ['id'],
  beforeRouteEnter(to, from, next) {
    console.log('enter');
    next(vm => {
      console.log(vm.id);
    });
  },
  beforeRouteUpdate(to, from, next) {
    console.log('update');
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('leave');
    const isLeave = window.confirm('本当に？');
    if (isLeave) {
      next();
    } else {
      next(false);
    }
  },
  // created() {
  //   console.log('created');
  // }
};
</script>
