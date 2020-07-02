<template>
  <div class="div">Foo</div>
</template>

<script>
import createPrecept from '../precept'

export default {
  mixins: [createPrecept],

  methods: {
    __fetchWorker () {
      return new Promise(resolve => {
        resolve({
          title: "Foo",
          metas: []
        })
      })
    }
  }
}
</script>

<style lang="sass" scoped>
div
  background: plum
</style>