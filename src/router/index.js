import Vue from 'vue'
import Router from 'vue-router'
import SayHi from '@/components/SayHi'
import Hello from '@/components/Hello'
import SayHiFromVariable from '@/components/SayHiFromVariable'
import Blog from '@/components/Blog'
import Blogs from '@/components/Blogs'

Vue.use(Router)
export default new Router({
  routes: [{
    path: '/say_hi',
    name: 'SayHi',
    component: SayHi
  },
  {
    path: '/hello',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/say-hi-from-variable',
    name: 'SayHiFromVariable',
    component: SayHiFromVariable
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
  }
  ]
})
