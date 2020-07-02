<template>
  <div>Bar</div>
</template>

<script>
import createPrecept from '../precept'

export default {
  mixins: [createPrecept],
  
  methods: {
    __fetchWorker () {
      return new Promise(resolve => {
        resolve({
          title: "Bar",
          metas: [ { name: "page-name", content: "bar" } ]
        })
      })
    }
  }
}
</script>

<style lang="sass" scoped>
$green: #385937
div
  background: $green
  color: white
</style>