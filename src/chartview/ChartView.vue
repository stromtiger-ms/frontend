<script setup>
import Nav from "../Nav.vue";
import DiffChart from '../DiffChart.vue'

const actual = [Math.random() * 100, Math.random() * 100, Math.random() * 100]
const prediction = [Math.random() * 100, Math.random() * 100, Math.random() * 100]
const labels = ['A', 'B', 'C']
</script>

<template>
    <Nav />
    <div>hi</div>
    <diff-chart :actual="actual" :prediction="prediction" :labels="labels" />
</template>

<script>
export default {

}
</script>

<style scoped>

</style>