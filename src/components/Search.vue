<script setup lang="js">

</script>

<template>
    <div class="search">
        <div class="search-bar-container">
            <input type="text" v-model="search" class="search-bar" />
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
        width: 100%;
        height: 5vh;
        border: 1px solid black;
        background-color: transparent;
    }
</style>