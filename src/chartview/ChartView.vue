<script setup>
import Nav from '../Nav.vue'
import DiffChart from '../DiffChart.vue'
import getConsumer from './getConsumer'
import { ref } from 'vue'
import Spinner from '../Spinner.vue'

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

const performance = ref(true)
</script>

<template>
  <Nav />
  <div v-if="loading" class="content loading">
    <Spinner />
  </div>
  <div v-else class="content loaded">
    <div id="sidebar">
      <h1>name</h1>
      <p>{{ $route.params.id }}</p>
    </div>
    <div id="chart">
      <label>
        <input type="checkbox" v-model="performance">
        Performance Modus {{ performance ? 'ausschalten' : 'einschalten' }}
      </label>
      <diff-chart :actual="actual" :prediction="prediction" :labels="labels" :show-fill="!performance" />
      <p>Mit der STRG Taste kann die Ansicht nach links und rechts verschoben werden.</p>
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
      this.consumer = null
      this.loading = true
      this.consumer = await getConsumer(this.$route.params.id)
      this.loading = false
    }
  }
}
</script>

<style scoped>
.content.loading {
  height: 100%;
}

.content.loaded {
  height: 100%;
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
  padding: 5vw;
}
</style>