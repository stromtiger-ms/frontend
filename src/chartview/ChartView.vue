<script setup>
import Nav from '../Nav.vue'
import DiffChart from '../DiffChart.vue'

function generate(n) {
  const m = []
  for (let i = 0; i < n; i += 1) {
    m.push(Math.random() * 100)
  }
  return m
}

const actual = generate(100)
const prediction = generate(100)
const labels = generate(100).map((_, i) => i)
</script>

<template>
  <Nav />
  <div>hi</div>
  <diff-chart :actual="actual" :prediction="prediction" :labels="labels" />
</template>

<script>
export default {}
</script>

<style scoped>

</style>