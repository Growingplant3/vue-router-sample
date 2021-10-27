import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Users from './views/Users.vue'
import UsersPosts from './views/UsersPosts.vue';
import UsersProfile from './views/UsersProfile.vue';
import HeaderHome from './views/HeaderHome.vue';
import HeaderUsers from './views/HeaderUsers.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { 
      path: '/', components:
      {
        default: Home,
        header: HeaderHome
      },
      beforeEnter(to, from, next) {
        next();
        next(false); // 表示されなくなる
      }
    },
    {
      path: '/users/:id',
      components: {
        default: Users,
        header: HeaderUsers
      },
      props: {
        default: true,
        heder: false
      },
      children: [
        { path: 'posts', component: UsersPosts },
        { path: 'profile', component: UsersProfile, name: 'users-id-profile' }
      ]
    }, {
      path: '/hello',
      redirect: '/' // オブジェクトも使用可能
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log(savedPosition); // ブラウザ戻るボタンを押した位置
    return new Promise(resolve => {
      this.app.$root.$on('triggerScroll', () => {
        let position = {x: 0, y: 0}
        if (savedPosition) {
          position = savedPosition;
        }
        if (to.hash) {
          return {
            selector: to.hash,
            offset: {x: 0, y: 100}
          };
        }
        resolve(position);
      });
    });

    // if (savedPosition) {
    //   return savedPosition;
    // }

    // return {x: 0, y: 100};
  }
});