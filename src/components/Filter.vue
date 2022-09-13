<script setup> //lang="js"

</script>

<template>
    <div class="filter">
        <div class="lvl-filter">
            <input type="checkbox" name="native" v-model="native" checked /> NATIVE <!--Follows the standard scale of linguistics: A0 - total beginner, A1 - beginner, A2 - pre-intermediate, B1 - intermediate, B2 - upper intermediate, C1 - advanced, C2 - proficient and native -->
            <input type="checkbox" name="c" v-model="c" checked /> ADVANCED
            <input type="checkbox" name="b" v-model="b" checked /> INTERMEDIATE
            <input type="checkbox" name="a" v-model="a" checked /> BEGINNER
        </div>
        <div class="score-filter">
            <input type="checkbox" v-model="score" /> HIDE NEGATIVE SCORES
        </div>
    </div>
</template>