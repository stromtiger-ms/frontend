<template>
  <canvas ref="canvas"></canvas>
</template>

<script setup lang="ts">
import { computed, Ref, ref, unref, watch, watchEffect } from 'vue'
import { Chart } from './Chart'

const canvas = ref(null) as any as Ref<HTMLCanvasElement>

const ctx = computed(() => {
  const r = unref(canvas)
  if (!r) return null
  return r.getContext('2d')
})

const props = defineProps({
  type: {
    type: String,
    required: true
  },
  labels: {
    type: Array,
    required: true
  },
  dataset: {
    type: Array,
    required: true
  }
})

const config = computed(() => {
  return {
    type: props.type,
    data: {
      labels: props.labels,
      datasets: props.dataset
    },
    options: {
      responsive: true,
      showTooltips: true,
      plugins: {
        tooltip: {
          interaction: {
            mode: 'nearest'
          }
        }
      }
    }
  }
})

const chart = ref(null) as Ref<Chart | null>

watch(
    () => [ctx.value, config.value],
    () => {
      const c = unref(chart)
      console.log(c)
      if (c) {
        c.destroy()
      }
      if (!ctx.value) {
        debugger
      }

      chart.value = new Chart(ctx.value, config.value)
    })
</script>