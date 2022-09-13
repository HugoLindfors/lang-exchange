<script setup> //lang="js"

</script>

<template>
    <div class="filter">
        <div class="lvl-filter">
            <input type="checkbox" name="native" v-model="native" checked /> NATIVE <!--Follows the standard scale of linguistics, A0, A1, A2, B1, B2, C1, C2, Native -->
            <input type="checkbox" name="c" v-model="c" checked /> ADVANCED
            <input type="checkbox" name="b" v-model="b" checked /> INTERMEDIATE
            <input type="checkbox" name="a" v-model="a" checked /> BEGINNER
        </div>
        <div class="score-filter">
            <input type="checkbox" v-model="score" /> HIDE NEGATIVE SCORES
        </div>
    </div>
</template>