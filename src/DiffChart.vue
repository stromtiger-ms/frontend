<template>
  <map-component v-if="type && datasets && labels" :type="type" :dataset="datasets" :labels="labels" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import MapComponent from './BaseChart.vue'
import pattern from 'patternomaly'

const props = defineProps({
  actual: {
    type: Array,
    required: true
  },
  prediction: {
    type: Array,
    required: true
  },
  labels: {
    type: Array,
    required: true
  }
})

const type = 'line'
const ACTUAL = '#f1a208ff'
const PREDICTION = '#bad9b5ff'
const DOWN = pattern.draw('diamond', '#2b2d42ff')
const ABOVE = pattern.draw('cross-dash', '#0ad3ffff')

const datasets = computed(() => {
  return [
    {
      label: 'Tatsächlich',
      data: props.actual,
      borderColor: ACTUAL,
      fill: {
        target: '1',
        above: ABOVE,
        below: DOWN
      }
    },
    {
      label: 'Vorher',
      borderColor: PREDICTION,
      data: props.prediction
    }
  ]
})

const labels = props.labels
</script>

