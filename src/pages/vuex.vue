<template>
  <div class="page-container">
    <div class="page-title">unit test page</div>
    <p>count is: {{ count }}</p>
    <button @click="increment">increment</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'vuexPage',
  setup() {
    const count = ref<number>(0)
    const increment = () => {
      count.value += 1
    }

    return { count, increment }
  }
})
</script>

<style></style>
