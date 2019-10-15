<template lang="html">
    <!-- template代码块中, 表示的是HTML模板 -->
    <!-- <div class='hi'>
        Hi Vue!<br>
        {{message}}<br>
        {{abc}}
    </div> -->
    <div v-if="a>100">
      <input type='button' @click="show_my_value()" value="..."/>
    </div>
</template>

<script>
// script代码块中表示的是js代码
export default {
  // 该写法和下面的写法意义一样
  data () {
    return {
      message: '你好Vue! 本消息来自变量',
      abc: 'I am abc',
      a: 101
    }
  },
  methods: {
    show_my_value: function () {
      alert('my value' + this.my_value)
    }
  }
}
// import {sum, pi} from "@lib/math_test"
// alert("2π = " + sum(pi, pi))

// import * as math from "lib/math_test"
// alert("2π = " + math.sum(math_test.pi, math_test.pi))

// let title = 'triple body'
// return {
//     tti
// }

export function sum (x, y) {
  return x + y
}

export function foo () {
  let title = 'triple body'
  var a = 1
  var b = 2
  var c = a + b
  var d = title + c
  return d
}

export function fooo () {
  let person = {
    firstname: 'steve',
    lastname: 'curry',
    age: 29
  }
  let {firstname, lastname} = person
  let name = firstname + lastname
  return name
}

export var pi = 3.1415926
// import * as math from "lib/math"
// alert("2π = " + math.sum(math.pi, math.pi))

</script>

<style lang="css" scoped>
/* 表示样式, 是有的CSS/SCSS/SASS文件都可以写在 */
.hi{
    color: red;
    font-size: 20px;
}
</style>
