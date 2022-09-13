<script setup> // lang="js"
import { ref } from 'vue';
import { 
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth'
import { useRouter } from 'vue-router'; // import router from vue-router
const email = ref("");
const password = ref("");
const router = useRouter() // get a reference to our vue router
const register = () => { // register-method registers new user with email and password
    // need .value because ref()
    const auth = getAuth(); // from firebase/auth
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log("Successfully registered new account");

            console.log(auth.currentUser)

            router.push('/') // redirect to the feed-page
        })
        .catch((error) => {
            console.log(`ERROR: ${error.code}`);
            alert(error.message);
        })
};
const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then((result) => {
            console.log(result.user);
            router.push('/');
        })
        .catch((error) => {
            // handle error
        });
};
</script>

<template>
    <div class="register">
        <h1>Create an account</h1>
        <p><input type="text" name="email" id="email" placeholder="Email" v-model="email"></p> <!-- email -->
        <p><input type="password" name="password" id="password" placeholder="Password" v-model="password"></p>
        <!-- password -->
        <p><button @click="register">Submit</button></p> <!-- submit -->
        <p><button @click="signInWithGoogle">Sign in with Google</button></p> <!-- sign in with google -->
    </div>
</template>