<template lang="html">
    <div>
      {{message}}
    </div>
</template>

<script>
export default {
  data: function () {
    let a = 1
    var b = 2
    return {
      message: a + b
    }
  }
  // data () {
  //   return {
  //     message: 'Vue变量'
  //   }
  // }
}
</script>

<style lang="css" scoped>
</style>
