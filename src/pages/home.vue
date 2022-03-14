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
        // 7758521
      })
      .catch((err) => {
        console.log(err)
        // 99887766789789
      })
  }
}
</script>

<style></style>
