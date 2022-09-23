<script setup>
import Nav from '../Nav.vue'
import DiffChart from '../DiffChart.vue'
import getConsumer from "./getConsumer"

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
    <div v-if="loading" id="loading">loading...</div>
    <div v-else id="content">
        <div id="sidebar">
            <h1>name</h1>
            <p>{{ $route.params.id}}</p>
        </div>
        <div id="chart">
            <diff-chart :actual="actual" :prediction="prediction" :labels="labels" />
        </div>
    </div>
    
    
</template>

<script>

export default {
  data() {
    return {
      loading: true,
      consumer: null
    }
  },
  created() {
    // watch the params of the route to fetch the data again
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchData()
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    )
  },
  methods: {
    async fetchData() {
      this.consumer = null;
      this.loading = true;
      this.consumer = await getConsumer(this.$route.params.id);
      this.loading = false;
    },
  },
}
</script>

<style scoped>
#loading {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50% -50%);
}
#content {
    width: 100vw;
    display: flex;
    box-sizing: border-box;
    
}
#sidebar {
    position: fixed;
    width: 20vw;
    height: 94vh;
    background-color: var(--secondaryColor);
    color: white;
    box-sizing: border-box;
    
}
#chart {
    width: 80vw;
    margin-left: 20vw;
    box-sizing: border-box;
    padding-bottom: 5vw;
    padding-left: 5vw;
    padding-right: 5vw;
    padding-top: 5vw;
}
</style>