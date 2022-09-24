<template>
  <canvas ref="canvas"></canvas>
</template>

<script setup lang="ts">
import { computed, Ref, ref, unref, watch, watchEffect } from 'vue'
import { Chart } from './Chart'
import { ChartConfiguration, ChartTypeRegistry } from 'chart.js'

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

const max = computed(() => props
    .dataset
    .flatMap(set => (set as any).data)
    .reduce((a, b) => Math.max(a, b), Number.MIN_VALUE))

const config = computed(() => {
  return {
    type: props.type,
    data: {
      labels: props.labels,
      datasets: props.dataset
    },
    options: {
      transitions: {
        show: {
          animations: {
            visible: {
              duration: 0
            }
          }
        },
        hide: {
          animations: {
            visible: {
              duration: 0
            }
          }
        }
      },
      responsive: true,
      showTooltips: true,
      plugins: {
        tooltip: {
          interaction: {
            mode: 'index'
          }
        },
        zoom: {
          limits: {
            y: { min: 0, max: max.value }
          },

          pan: {
            enabled: true,
            mode: 'xy',
            modifierKey: 'ctrl'
          },

          zoom: {
            wheel: {
              enabled: true
            },
            drag: {
              enabled: true,
              mode: 'x'
            },
            pinch: {
              enabled: true
            },
            mode: 'x'
          }
        }
      }
    }
  }
}) as Ref<ChartConfiguration>

watch(
    () => [ctx.value, config.value],
    () => {
      if (ctx.value === null) {
        // No 2d Context yet
        return
      }
      const c = Chart.getChart(ctx.value)
      if (c) {
        c.destroy()
      }

      new Chart(ctx.value, config.value)
    })
</script>