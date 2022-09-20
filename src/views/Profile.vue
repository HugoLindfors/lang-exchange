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
            currentUser: store.users.map((user) => user.id).indexOf(currentUserId), // collects info from correct user based on id given at sign-in
            push: (pushMe) => {
                alert("push");
                router.push(pushMe)
            },
        }
    },
    methods: {
        
    }
}

let currentUserId = "I5Cq4hWhrfYwhqFYoVIBRPnVTUx1";
</script>

<template>
    <h1>MODIFY MY PROFILE</h1>
    <p>My username: <input type="text" :placeholder="store.users[currentUser].username" v-model="newUsername" class="input-field"></p>
    <h5>MY NATIVE LANGUAGE(S)</h5>
    <div v-for="language in store.users[currentUser].languages.filter((language) => language.lvl === 'native')">
        {{language.name.toLocaleUpperCase()}}
        <button class="remove-language-button"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Trash_Can.svg" alt="Delete" class="svg"/></button><button class="edit-language-button"><img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Pen_1.svg" alt="Change" class="svg"/></button>
    </div>
    <h5>I'M CURRENTLY LEARNING / I ALSO KNOW</h5>
    <div v-for="language in store.users[currentUser].languages.filter((language) => language.lvl === 'advanced' || language.lvl === 'proficient')">
        {{language.name.toLocaleUpperCase()}} ({{language.lvl.toLocaleUpperCase()}})
        <button class="remove-language-button"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Trash_Can.svg" alt="Delete" class="svg"/></button><button class="edit-language-button"><img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Pen_1.svg" alt="Change" class="svg"/></button>
    </div>
    <div v-for="language in store.users[currentUser].languages.filter((language) => language.lvl === 'intermediate' || language.lvl === 'upper_intermediate')">
        {{language.name.toLocaleUpperCase()}} ({{language.lvl.toLocaleUpperCase()}})
        <button class="remove-language-button"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Trash_Can.svg" alt="Delete" class="svg"/></button><button class="edit-language-button"><img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Pen_1.svg" alt="Change" class="svg"/></button>
    </div>
    <div v-for="language in store.users[currentUser].languages.filter((language) => language.lvl === 'pre-intermediate' || language.lvl === 'beginner')">
        {{language.name.toLocaleUpperCase()}} ({{language.lvl.toLocaleUpperCase()}})
        <button class="remove-language-button"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Trash_Can.svg" alt="Delete" class="svg"/></button><button class="edit-language-button"><img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Pen_1.svg" alt="Change" class="svg"/></button>
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

    .remove-language-button {
        border: 1px solid;
        background-color: red;
        width: 5vh;
        height: 4vh;
        border-radius: 15px;
    }

    .edit-language-button {
        border: 1px solid;
        background-color: blue;
        width: 5vh;
        height: 4vh;
        border-radius: 15px;
    }
</style>