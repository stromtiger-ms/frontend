<template>
    <div>
        <h1 @click="$router.push({ name: 'index'})">Strom Tiger</h1>
        <nav id="nav_right">
            <a>Kontakt</a>
            <a>#MUENSTERHACK</a>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div {
        height: 6vh;
        width: 100vw;
        background-color: var(--primaryColor);
        color: white;
        z-index: 99;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 2vw;
        padding-right: 2vw;
}

h1 {
    cursor: pointer;
}

a {
    margin-left: 2vw;
    font-size: 1rem;
}
</style>