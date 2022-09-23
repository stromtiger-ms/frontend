<script setup>
import Consumer from './Consumer.vue';
import Nav from '../Nav.vue';

</script>

<template>
  <div>
    <Nav />
    <div id="content">
        <div id="sidebar"></div>
        <div id="consumer_list">
            <Consumer v-for="consumer in consumerList" :name="consumer.name" />
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
                    "name": "Verbraucher1",
                    "wert0": "Zeitraum",
                    "trainingData": "No training data available",
                    "trainLink": "https://localhost/",
                },
                {
                    "name": "Verbraucher2",
                    "wert0": "Zeitraum",
                    "trainingData": "No training data available",
                    "trainLink": "https://localhost/",
                },
                {
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
        background-color: grey;
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
