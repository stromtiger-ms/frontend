<template>
    <div id="nav">
        <h1 @click="$router.push({ name: 'index'})">Strom Tiger</h1>
        <nav id="nav_right">
            <a @click="$router.push({ name: 'contact'})">
                <div class="navLink">Kontakt</div>
            </a>
            <a href="https://www.muensterhack.de/" target="_blank">
                <div class="navLink" k="">#MUENSTERHACK</div>
            </a>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#nav {
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

#nav_right {
    display: flex;
    height: 100%;
    
}

h1 {
    cursor: pointer;
}

.navLink {
    margin-left: 2vw;
    height: 100%;
    transition: all 300ms;
    display: flex;
    align-items: center;
    padding: 1rem;
    cursor: pointer;
}

.navLink:hover {
    background-color: var(--secondaryColor);
}

a { 
    font-size: 1rem;
    text-decoration: none;
    color: white;
}

</style>