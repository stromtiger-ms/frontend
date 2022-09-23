<script setup>
import Dashboard from './dashboard/Dashboard.vue';
import ChartView from './chartview/ChartView.vue';
</script>

<template>
  <Dashboard />
</template>

<script>
export default {
  data(){
    return {
      "halo": "s",
    }
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    font-size: 10px;
    overflow-x: hidden;
  }
  *, div {
    box-sizing: border-box;
  }
</style>
