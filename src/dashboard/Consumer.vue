<template>
  <div>
    <h1>{{ name }}</h1>
    <p>Zeitraum 01.01.2022 - 30.06.2022</p>
    <p v-if="trained">Trained ☑</p>
    <p v-else>No training data available</p>
    <router-link :to="{ name: 'chart-view', params: {id: id } }">
      <button>View</button>
    </router-link>
  </div>
</template>

<script>
import { TIGER_API_URL } from '../env.js'
import axios from 'axios'

export default {
  props: ['id', 'name'],
  data() {
    return {
      trained: Math.random() > 0.5
    }
  }

}
</script>

<style scoped>
div {
  border: 1px solid black;
  margin-top: 2vw;
  box-shadow: 2px 2px 5px 5px #dddddd;
  transition: all 300ms;

  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  font-size: 1rem;
  padding: 1rem;
  padding-left: 4rem;
  padding-right: 4rem;
  cursor: pointer;
}

div:hover {
  box-shadow: 2px 2px 10px 5px #444444;
}

button {
  padding: 1rem 2rem 1rem 2rem;
  background-color: lightgreen;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
}

</style>
