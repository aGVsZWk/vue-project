<template lang="html">
  <div>
    <my-logo :title="title">
    </my-logo>
    <input type="button"  @click='change_title' value='点击修改标题' class="aaa">
    <input type="button"  @click='rigou' value='日狗' class="aaa">
    <br />
    <table>
        <tr v-for="blog in blogs" :key="blog.id">
        <!-- <tr v-for="(blog, key, index) in blogs" :key="blog.id"> -->
          <td>
            <!-- 路由跳转, name 填写 component , query 是拼接在后面的字段-->
            <router-link :to="{ name: 'Blog', query: {id: blog.id} }">
              {{blog.id}}
            </router-link>
          </td>
          <td @click='show_blog(blog.id)'>{{blog.title}}</td>
        </tr>
    </table>
  </div>
</template>

<script>
// import MyLogo from '@/components/Logo'
import MyLogo from '@/components/Logo'

export default {
  data: function () {
    return {
      title: '博客列表页',
      blogs: []
    }
  },
  methods: {
    show_blog: function (blogId) {
      console.info('blogId: ' + blogId)
      this.$router.push({name: 'Blog', query: {id: blogId}})
    },
    change_title: function () {
      this.title = '好多文章啊(标题被代码修改过了)'
      alert(2)
    },
    rigou: function () {
      console.info('日狗')
    }
  },
  components: {
    MyLogo: MyLogo
    // 左边: template中的名字
    // 右边: import进来的代码
    // 也可直接写成 components: { MyLogo }
    // 虽然在模板中的名字叫 MyLogo ,但是在 template 中使用的时候, 需要写作 <my-logo></my-logo>
  },
  mounted: function () {
    this.$http.get('/api/interface/blogs/all').then((response) => {
      console.info(response.body)
      this.blogs = response.body.blogs
      console.info(response.body)
    }, (response) => {
      console.info(response)
    })
  }

}
</script>

<style lang="css" scoped>
  td {
    border-bottom: 1px solid grey;
  }
</style>
