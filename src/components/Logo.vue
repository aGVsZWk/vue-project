<template>
  <div class='logo'>
    <h1>{{title}}</h1>
    <img src='@/assets/logo.png'/>
  </div>
</template>

<script>
export default {
  props: ['title']
  // 上面哪行代码表示: 为该 component 增加了一个 property(属性), 属性的名字叫做 title
}
</script>
