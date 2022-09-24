<script setup>
import Consumer from './Consumer.vue'
import Nav from '../Nav.vue'
import AddConsumer from './AddConsumer.vue'
import TrainModel from './Train.vue'

import { TIGER_API_URL } from '../env'
import { reactive, ref } from 'vue'
import Spinner from '../Spinner.vue'

const url2 = TIGER_API_URL + '/getallverbraucher'

const verbraucher = ref([])

const loading = ref(true)

const refreshData = async () => {
  loading.value = true
  fetch(url2)
      .then(response => response.json())
      .then(body => {
        console.warn(body)
        verbraucher.value = body.map(v => ({
          id: v.verbraucherId,
          name: v.name
        }))
      })
      .catch(error => {
        alert(error)
      })
      .finally(() => loading.value = false)
}

refreshData()
</script>

<template>
  <div class="dashboard">
    <Nav />
    <div class="content">
      <div class="sidebar"></div>
      <div class="consumer_list" v-if="!loading">
        <AddConsumer @success="refreshData" @fail="refreshData" />
        <TrainModel @success="refreshData" @fail="refreshData" />
        <Consumer v-for="consumer in verbraucher" :id="consumer.id" :name="consumer.name" />
      </div>
      <div class="consumer_list center" v-else>
        <Spinner />
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  height: 94vh;
  width: 100vw;
  display: flex;
  box-sizing: border-box;
}

.sidebar {
  position: fixed;
  width: 20vw;
  height: 100%;
  background-color: var(--secondaryColor);
  color: white;
  box-sizing: border-box;
}

.consumer_list {
  width: 80vw;
  margin-left: 20vw;
  box-sizing: border-box;
  padding-bottom: 5vw;
  padding-left: 5vw;
  padding-right: 5vw;
}

.consumer_list.center {
  margin: auto auto auto 20vw;
}

.dashboard, .content, .consumer_list {
  height: 100%;
}
</style>
