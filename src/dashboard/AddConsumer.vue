<template>
  <vue-csv-import
      v-model="csv"
      :fields="{zeit: {required: true, label: 'Zeit'}, kw: {required: true, label: 'kW'}}"
  >
    <vue-csv-submit :url="TIGER_API_URL"></vue-csv-submit>

    <vue-csv-toggle-headers></vue-csv-toggle-headers>
    <vue-csv-errors></vue-csv-errors>
    <vue-csv-input></vue-csv-input>
    <vue-csv-map :auto-match="false"></vue-csv-map>
  </vue-csv-import>
</template>

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
</script>
