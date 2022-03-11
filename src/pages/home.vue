<template><div>home</div></template>

<script>
import axios from '../utils/axios'

export default {
  name: 'homePage',
  setup() {
    axios
      .get('/users/XPoet')
      .then((res) => {
        console.log(res)
        // 123456789
      })
      .catch((err) => {
        console.log(err)
        // 99887766
      })
  }
}
</script>

<style></style>
