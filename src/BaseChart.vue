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
            // TODO: Make configurable
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
            mode: 'xy'
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
      if (c) {
        c.destroy()
      }
      if (!ctx.value) {
        debugger
      }

      chart.value = new Chart(ctx.value, config.value)
    })
</script>