<script setup>
import Nav from './Nav.vue';
</script>

<template>
    <Nav />
    <h1>Das Team</h1>
    <img src="/src/assets/team.jpeg" />
    <ul>
        <li>Michael V</li>
        <li>Bjoern</li>
        <li>Sven L.</li>
        <li>Julitta</li>
        <li>Mathis H.</li>
        <li>Lukasj</li>
        <li>Leon Schönhoff</li>
        <li>joni-boni</li>
        <li>Max Lütkemeyer</li>
    </ul>
    <a href="https://github.com/stromtiger-ms/frontend">https://github.com/stromtiger-ms/frontend</a>
    <a href="https://github.com/stromtiger-ms/forecast">https://github.com/stromtiger-ms/forecast</a>
    <a href="https://github.com/stromtiger-ms/backend">https://github.com/stromtiger-ms/backend</a>
    <a href="https://github.com/stromtiger-ms/bootstrap">https://github.com/stromtiger-ms/bootstrap</a>
    <a href="https://github.com/stromtiger-ms">https://github.com/stromtiger-ms</a>
</template>

<style scoped>
    img {
        width: 30vw;
        border-radius: 10px;
    }
    h1{
        font-size: 2rem;
    }
    ul {
        list-style: none;
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 4rem;
    }
    li {
        font-size: 1rem;
    }
    a {
        display: block;
        font-size: 1.5rem;
        margin-top: 1rem;
        color: var(--secondaryColor);
    }
</style>