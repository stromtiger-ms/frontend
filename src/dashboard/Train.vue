<template>
  <div class="add-container">
    <div class="add" @click="train">Datenmodell trainieren</div>
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
</style>

<script setup>
import { reactive, ref } from 'vue'
import { TIGER_API_URL } from '../env'
import axios from 'axios'

const emit = defineEmits(['uploaded'])
const csv = ref(null)
const url = TIGER_API_URL + '/train'

const train = async () => {
  fetch(url)
      .then(response => {
        console.log(response.json())
      })
      .then(() => emit('success'))
      .catch(error => {
        alert(error)
        emit('fail')
      })
}

</script>
