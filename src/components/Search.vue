<script setup lang="js">

</script>

<template>
    <div class="search">
        <div class="search-bar-container">
            <input type="text" placeholder="Search..." v-model="search" class="search-bar" />
        </div>
    </div>
</template>

<style scoped lang="css">

    div.search-bar-container {
        background-color: #EDEDED;
    }
    input.search-bar {
        width: 100%;
        height: 5vh;
        border: 1px solid black;
        border-radius: 10px;
    }
</style>