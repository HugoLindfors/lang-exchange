<script setup>
import { store } from '../components/store';
import { useRouter } from 'vue-router'; // import router from vue-router

const router = useRouter(); // get a reference to our vue router
</script>
    
<script>
export default {
    data() {
        return {
            store,
            newUsername: "username",
            currentUser: 1,
            push: (pushMe) => {
                alert("push");
                router.push(pushMe)
            },
        }
    },
    methods: {

    }
}
</script>

<template>
    <h1>MODIFY MY PROFILE</h1>
    <p><input type="text" :placeholder="store.users[currentUser]" v-model="newUsername"></p>
    <h5>NATIVE LANGUAGE(S</h5>
    <div v-for="language in store.users[currentUser].languages.filter((language) => language.lvl === 'native')">
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
    <input type="text" /><br />
    <select>
        <option value="native">NATIVE</option>
        <option value="advanced">PROFICIENT</option>
        <option value="advanced">ADVANCED</option>
        <option value="intermediate">UPPER INTERMEDIATE</option>
        <option value="intermediate">INTERMEDIATE</option>
        <option value="beginner">PRE-INTERMEDIATE</option>
        <option value="beginner">BEGINNER</option>
    </select><br />
    <button @click="push()"> ADD LANGUAGE </button>
</template>