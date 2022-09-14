<script setup lang="js">

</script>

<template>
    <div class="search">
        <div class="search-bar-container">
            <input type="text" v-model="search" class="search-bar" />
            <button class="search-bar-button"><img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Magnifying_glass_icon.svg" alt="Search" class="svg"/></button>
        </div>
    </div>
</template>

<style scoped lang="css">

    div.search-bar-container {
        background-color: #EDEDED;
        margin: 0;
        padding: 0;
    }

    input.search-bar {
        width: 90%;
        height: 7vh;
        border: 1px solid black;
        background-color: transparent;
    }

    .search-bar-button {
        margin-top: 0;
        padding-top: 0;
        width: 10%;
        height: 7vh;
        border: 1px solid black;
        background-color: transparent;
    }
</style>