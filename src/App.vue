<script setup lang="ts">
import DiffChart from './DiffChart.vue'

const actual = [Math.random() * 100, Math.random() * 100, Math.random() * 100]
const prediction = [Math.random() * 100, Math.random() * 100, Math.random() * 100]
const labels = ['A', 'B', 'C']
</script>

<template>
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  <diff-chart :actual="actual" :prediction="prediction" :labels="labels" />
</template>

<style scoped>
</style>
