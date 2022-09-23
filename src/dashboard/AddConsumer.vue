<template>
  <div class="add-container" :class="{'add-form-container': !closed}">
    <div v-if="closed" class="add" @click="closed = false">Verbraucher hinzufügen</div>
    <vue-csv-import
        v-else
        v-model="csv"
        :fields="{zeit: {required: true, label: 'Zeit'}, kw: {required: true, label: 'kW'}}"
    >
      <div class="add-form">
        <vue-csv-submit :url="TIGER_API_URL" />
        <input type="text" placeholder="Verbraucher Name" />

        <vue-csv-toggle-headers></vue-csv-toggle-headers>
        <vue-csv-errors></vue-csv-errors>
        <vue-csv-input></vue-csv-input>

        <button @click="closed = true">X</button>
      </div>

      <vue-csv-map :auto-match="false"></vue-csv-map>
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
