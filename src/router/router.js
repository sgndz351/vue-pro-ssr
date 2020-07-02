// router.js
import Vue from 'vue';
import Router from 'vue-router';
import Foo from '../pages/Foo.vue'
import Bar from '../pages/Bar.vue'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/foo', component: Foo },
      { path: '/bar', component: Bar },
      { path: '*', redirect: '/foo' }
    ]
  });
}