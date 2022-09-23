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
  },
  showFill: {
    type: Boolean,
    required: false,
    default: () => true
  }
})

const type = 'line'
const ACTUAL = '#f1a208ff'
const PREDICTION = '#bad9b5ff'
const DIFF = '#9792e3ff'
const DOWN = pattern.draw('diamond', '#2b2d42ff')
const ABOVE = pattern.draw('cross-dash', '#0ad3ffff')

function generateDiff(actual: number[], prediction: number[]) {
  if (actual.length !== prediction.length) {
    console.warn('Length different', actual.length, prediction.length)
    return []
  }
  const diff = []
  for (let i = 0; i < actual.length; i += 1) {
    const x = actual[i] - prediction[i]
    diff.push(Math.log2(Math.abs(x)) * Math.sign(x))
  }
  return diff
}

const datasets = computed(() => {
  const diff = generateDiff(props.actual as number[], props.prediction as number[])
  const bezier = 0.5
  const fill = props.showFill
      ? {
        target: '1',
        above: ABOVE,
        below: DOWN
      }
      : undefined
  const data: any[] = [
    {
      label: 'Tatsächlich',
      data: props.actual,
      tension: bezier,
      borderColor: ACTUAL,
      fill
    },
    {
      label: 'Vorher',
      borderColor: PREDICTION,
      data: props.prediction,
      tension: bezier
    }
  ]

  if (!fill) {
    data.push({
      label: 'Performance',
      data: diff,
      borderColor: DIFF
    })
  }
  return data
})

const labels = props.labels
</script>

