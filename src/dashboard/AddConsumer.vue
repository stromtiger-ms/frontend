<template>
  <div class="add-container">
    <div v-if="closed" class="add" @click="closed = false">Verbraucher hinzufügen</div>
    <div v-else class="add-form">
      <vue-csv-import
          v-model="csv"
          :fields="{zeit: {required: true, label: 'Zeit'}, kw: {required: true, label: 'kW'}}"
      >
        <vue-csv-submit :url="TIGER_API_URL" />
        <input type="text" placeholder="Verbraucher Name" />

        <vue-csv-toggle-headers></vue-csv-toggle-headers>
        <vue-csv-errors></vue-csv-errors>
        <vue-csv-input></vue-csv-input>
        <vue-csv-map :auto-match="false"></vue-csv-map>
      </vue-csv-import>

      <button @click="closed = true">X</button>
    </div>
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
</style>

<script setup>
import {
  VueCsvToggleHeaders,
  VueCsvSubmit,
  VueCsvMap,
  VueCsvInput,
  VueCsvErrors,
  VueCsvImport
} from 'vue-csv-import'

import { ref } from 'vue'
import { TIGER_API_URL } from '../env'

const csv = ref(null)
const closed = ref(true)
const upload = async () => {
}
</script>
