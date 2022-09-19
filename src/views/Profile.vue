<script setup>
import { store } from '../components/store';
import { useRouter } from 'vue-router'; // import router from vue-router

const router = useRouter(); // get a reference to our vue router
</script>
    
<!-- child component to App.vue -->

<script>
export default {
    data() {
        return {
            store,
            newUsername: "",
            currentUserId: "",
            currentUser: store.users.map((user) => user.id).indexOf("I5Cq4hWhrfYwhqFYoVIBRPnVTUx1"), // collects info from correct user based on id given at sign-in
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
    <p>My username: <input type="text" :placeholder="store.users[currentUser].username" v-model="newUsername" class="input-field"></p>
    <h5>MY NATIVE LANGUAGE(S)</h5>
    <div v-for="language in store.users[currentUser].languages.filter((language) => language.lvl === 'native')">
        {{language.name.toLocaleUpperCase()}}
    </div>
    <h5>I'M CURRENTLY LEARNING / I ALSO KNOW</h5>
    <div v-for="language in store.users[currentUser].languages.filter((language) => language.lvl === 'advanced' || language.lvl === 'proficient')">
        {{language.name.toLocaleUpperCase()}} ({{language.lvl.toLocaleUpperCase()}})
    </div>
    <div v-for="language in store.users[currentUser].languages.filter((language) => language.lvl === 'intermediate' || language.lvl === 'upper_intermediate')">
        {{language.name.toLocaleUpperCase()}} ({{language.lvl.toLocaleUpperCase()}})
    </div>
    <div v-for="language in store.users[currentUser].languages.filter((language) => language.lvl === 'pre-intermediate' || language.lvl === 'beginner')">
        {{language.name.toLocaleUpperCase()}} ({{language.lvl.toLocaleUpperCase()}})
    </div>
    <span>Language name: <input type="text" class="input-field"/></span>
    <select class="input-field">
        <option value="native">NATIVE</option>
        <option value="advanced">PROFICIENT</option>
        <option value="advanced">ADVANCED</option>
        <option value="intermediate">UPPER INTERMEDIATE</option>
        <option value="intermediate">INTERMEDIATE</option>
        <option value="beginner">PRE-INTERMEDIATE</option>
        <option value="beginner">BEGINNER</option>
    </select>
    <button @click="push()" class="input-field"> ADD LANGUAGE </button>
</template>

<style scoped lang="css">
    .input-field {
        border: 1px solid;
        border-radius: 15px;
        width: 25vw;
        height: 3vh;
    }
</style>