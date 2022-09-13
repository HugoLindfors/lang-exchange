<script setup> //lang="js"

</script>

<template>
    <div class="filter">
        <div class="lvl-filter">
            <input type="checkbox" v-model="n" /> NATIVE
            <input type="checkbox" v-model="c" /> ADVANCED
            <input type="checkbox" v-model="b" /> INTERMEDIATE
            <input type="checkbox" v-model="a" /> BEGINNER
        </div>
        <div class="score-filter">
            <input type="checkbox" v-model="n" /> HIDE NEGATIVE SCORES
        </div>
    </div>
</template>