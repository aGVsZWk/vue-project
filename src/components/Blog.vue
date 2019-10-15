<template lang="html">
    <div>
      <my-logo title="博客详情页"></my-logo>
      <p>标题: {{blog.title}}</p>
      <p>发布于: {{blog.created_at}}</p>
      <div>{{blog.body}}</div>
      <br />
      <br />
      <br />
      <br />
      <div v-html='blog.body'></div>
    </div>
</template>

<script>
import MyLogo from '@/components/Logo'
import CommanHi from '@/mixins/common_hi'

export default {
  data: function () {
    return {
      blog: {
        // title: '统治地球',
        // created_at: '毁灭人类',
        // body: '统治地球, 毁灭人类!!!'
      }
    }
  },
  components: {
    MyLogo
  },

  mounted: function () {
    this.$http.get('api/interface/blogs/show?id=' + this.$route.query.id).then((response) => {
      this.blog = response.body.result
    }, (response) => {
      console.error(response)
    })
    alert('HiJim')
    alert(this.hi('HiJim----mixin'))
  },

  mixins: [
    CommanHi
  ]

}
</script>

<style lang="css" scoped>
</style>
