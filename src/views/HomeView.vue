<template>
  <div>
    <div>{{userName}}</div>
    <TestTest attr="testtest" />
  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from '@/components/HelloWorld.vue' */
import TestTest from '@/components/TestTest.vue'
/* import axios from 'axios' */

export default {
  name: 'HomeView',
  components: {
    /* HelloWorld */
    TestTest
  },
  data () {
    return {
      userName: 'John Dow'
    }
  },
  setup() { },
  created() { },
  mounted() { },
  unmounted() { },
  methods: { }
}
</script>
