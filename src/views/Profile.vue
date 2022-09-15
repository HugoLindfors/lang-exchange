<script setup>
    import { store } from '../components/store';
    </script>
    
    <script>
    export default {
        data() {
            return {
                store,
            }
        },
    }
    </script>

<template>
    <h1>MODIFY MY PROFILE</h1>
    <p><input type="text" placeholder="My username..." v-model="newUsername"></p>
    <h5>NATIVE LANGUAGE(S</h5>
    <div v-for="language in store.users[0].languages.filter((language) => language.lvl === 'native')">
        {{language.name.toLocaleUpperCase()}}
    </div>
    <h5>CURRENTLY LEARNING / ALSO KNOWS</h5>
    <div v-for="language in store.users[0].languages.filter((language) => language.lvl === 'advanced' || language.lvl === 'proficient')">
        {{language.name.toLocaleUpperCase()}} ({{language.lvl.toLocaleUpperCase()}})
    </div>
    <div v-for="language in store.users[0].languages.filter((language) => language.lvl === 'intermediate' || language.lvl === 'upper_intermediate')">
        {{language.name.toLocaleUpperCase()}} ({{language.lvl.toLocaleUpperCase()}})
    </div>
    <div v-for="language in store.users[0].languages.filter((language) => language.lvl === 'pre-intermediate' || language.lvl === 'beginner')">
        {{language.name.toLocaleUpperCase()}} ({{language.lvl.toLocaleUpperCase()}})
    </div>
</template>