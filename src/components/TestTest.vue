<template>
    <div>
        <h1>{{ attr }}</h1>
    </div>
</template>
<script>
export default {
  name: 'TestTest',
  props: {
    attr: String
  },
  methods: {
    call () {
      console.log(this.post)
    }
  }
}
</script>
<style scoped>

</style>
