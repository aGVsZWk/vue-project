<template lang="html">
    <!-- template代码块中, 表示的是HTML模板 -->
    <!-- <div class='hi'>
        Hi Vue!<br>
        {{message}}<br>
        {{abc}}
    </div> -->
    <div v-if="a>-1">
      <input type='button' style="display:block;"  @click="show_my_value()" value="..."/>
      <input type="button" style="display:block;" value="测试axios" @click="axios_go()">
      <input type="button" style="display:block;" value="测试axios2" @click="axios_go_2()">
      <div>a is {{a}}</div>
    </div>
</template>

<script>
// script代码块中表示的是js代码
import axios from 'axios'
import CommonHi from '@/mixins/common_hi.js'

export default {
  // 该写法和下面的写法意义一样

  data () {
    return {
      message: '你好Vue! 本消息来自变量',
      abc: 'I am abc',
      a: 0
    }
  },
  methods: {
    show_my_value: function () {
      alert('my value' + this.my_value)
    },
    axios_go: function () {
      axios.get('/api/ore/').then(
        function (response) {
          console.log(response.data.count)
          this.a = response.data.count
        }
      )
    },
    axios_go_2: function () {
      let that = this
      axios.get('/api/ore/').then(
        function (response) {
          console.log(response.data.count)
          that.a = response.data.count
        }
      )
    }
  },

  mixins: [CommonHi],
  mounted () {
    alert(this.hi('from script code'))
    // 不加this, 就会报错
    // alert(hi('asd'))
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
