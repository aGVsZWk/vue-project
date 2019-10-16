<template lang="html">
  <div>
    {{hi('from view')}}
  </div>
</template>

<script>
import CommonHi from '@/mixins/common_hi.js'
export default {
  mixins: [CommonHi],
  mounted: function () {
    alert(this.hi('from script code'))
  }
}
</script>

<style lang="css" scoped>
</style>
