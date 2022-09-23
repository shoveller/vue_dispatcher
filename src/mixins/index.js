import axios from 'axios'

export default {
  methods: {
    async get(url, data) {
      const method = 'get'
      return (await axios({ method, url, data })).catch((e) => {
        console.log(e)
      }).data
    },
    async post(url, data) {
      const method = 'post'
      return (await axios({ method, url, data })).catch((e) => {
        console.log(e)
      }).data
    }
  }
}
