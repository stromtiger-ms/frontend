<template>
    <div id="add-container">
        <div v-if="closed" id="add" @click="closed = false">Verbraucher hinzufügen</div>
        <div v-else id="add-form">
            <input type="text" placeholder="Verbraucher Name"/>
            <input type="file" />
            <button @click="closed = true">X</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            closed: true,
        }
    },
    methods: {
        async upload(){
            
        }
    }
}
</script>

<style scoped>
    #add-container {
        width: 100%;
        display: flex;
        padding-top: 1rem;
        justify-content: flex-end;
    }
    #add {
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
    #add-form {
        border: 1px solid black;
        width: 100%;
        padding: 1rem;
        display: flex;
        justify-content: space-around;

    }
</style>