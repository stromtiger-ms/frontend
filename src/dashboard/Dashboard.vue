<script setup>
import Consumer from './Consumer.vue';
import Nav from '../Nav.vue';
import AddConsumer from './AddConsumer.vue';
</script>

<template>
  <div>
    <Nav />
    <div id="content">
        <div id="sidebar"></div>
        <div id="consumer_list">
            <AddConsumer />
            <Consumer v-for="consumer in consumerList" :id="consumer.id" />
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            consumerList: [
                {
                    "id": 0,
                    "name": "Verbraucher1",
                    "wert0": "Zeitraum",
                    "trainingData": "No training data available",
                    "trainLink": "https://localhost/",
                },
                {
                    "id": 1,
                    "name": "Verbraucher2",
                    "wert0": "Zeitraum",
                    "trainingData": "No training data available",
                    "trainLink": "https://localhost/",
                },
                {
                    "id": 2,
                    "name": "Verbraucher3",
                    "wert0": "Zeitraum",
                    "trainingData": "No training data available",
                    "trainLink": "https://localhost/",
                },
            ],
        }
    }
}
</script>

<style scoped>
    #content {
        width: 100vw;
        display: flex;
        box-sizing: border-box;
    }

    #sidebar {
        position: fixed;
        width: 20vw;
        height: 94vh;
        background-color: var(--secondaryColor);
        color: white;
        box-sizing: border-box;
    }

    #consumer_list {
        width: 80vw;
        margin-left: 20vw;
        box-sizing: border-box;
        padding-bottom: 5vw;
        padding-left: 5vw;
        padding-right: 5vw;
    }
</style>
