<template>
  <div class="add-container" :class="{'add-form-container': !closed}">
    <div v-if="closed" class="add" @click="closed = false">Verbraucher hinzufügen</div>
    <vue-csv-import
        v-else
        v-model="csv"
        :fields="{zeit: {required: false, label: 'Zeit'}, kw: {required: false, label: 'kW'}}"
    >
      <div class="add-form">
        <input v-model="verbraucherName" type="text" placeholder="Verbraucher Name" />

        <vue-csv-input :validation="false" :headers="false"></vue-csv-input>

        <button @click="upload()">Verbrauchsdaten hochladen</button>

        <button @click="closed = true">X</button>

      </div>

      <vue-csv-map :auto-match="true" :no-thead="true"></vue-csv-map>
    </vue-csv-import>
  </div>
</template>

<style scoped>
.add-container {
  width: 100%;
  display: flex;
  padding-top: 1rem;
  justify-content: flex-end;
}

.add {
  transition: all 300ms;
  width: fit-content;
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid black;
  background-color: var(--secondaryColor);
  cursor: pointer;
  color: white;
  font-size: 1rem;
}

.add-form {
  border: 1px solid black;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
}

.add-form-container {
  flex-direction: column;
}
</style>

<script setup>
import {
  VueCsvMap,
  VueCsvInput,
  VueCsvImport
} from 'vue-csv-import'

import { reactive, ref } from 'vue'
import { TIGER_API_URL } from '../env'
import axios from 'axios'

const emit = defineEmits(['uploaded'])

const verbraucherName = ref(null)
const csv = ref(null)
const url = TIGER_API_URL + '/csv'
const closed = ref(true)
const upload = async () => {
  axios.post(url,
      {
        verbraucher: verbraucherName.value,
        verbrauchsdaten: csv.value
      })
      .then(response => {
        console.log(response.data)
      })
      .then(() => emit('success'))
      .catch(error => {
        alert(error)
        emit('fail')
      })
}
</script>
