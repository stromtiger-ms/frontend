<template>
  <router-view />

  <vue-csv-import
        v-model="csv"
        :fields="{zeit: {required: true, label: 'Zeit'}, kw: {required: true, label: 'kW'}}"
    >
    <vue-csv-submit url="http://localhost:8080/csv"></vue-csv-submit>

    <vue-csv-toggle-headers></vue-csv-toggle-headers>
    <vue-csv-errors></vue-csv-errors>
    <vue-csv-input></vue-csv-input>
    <vue-csv-map></vue-csv-map>

    </vue-csv-import>


  </template>
