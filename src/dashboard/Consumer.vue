<template>
  <div>
    <h1>{{ name }}</h1>
    <p>Zeitraum 01.01.2022 - 30.06.2022</p>
    <p>No training data available</p>
    <router-link :to="{ name: 'chart-view', params: {id: name } }">Go to Home</router-link>
    <button @click="$router.push({ name: 'chart-view', params: { id: name }})">Train</button>
  </div>
</template>

<script>
    export default {
        props: ['name'],
    }
</script>

<style scoped>
    div {
        border: 1px solid black;
        margin-top: 2vw;
        box-shadow: 2px 2px 5px 5px #dddddd;
        transition: all 300ms;

        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;

        font-size: 1rem;
        padding: 1rem;
        cursor: pointer;
    }

    div:hover {
        box-shadow: 2px 2px 10px 5px #444444;
    }

    button {
        padding: 1rem 2rem 1rem 2rem;
        background-color: lightgreen;
        font-size: 1rem;
        font-weight: bold;
    }

</style>
