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
        <p>Already have an account? <a @click="router.push('/sign-in')">Sign In</a></p>
        <p><input type="text" name="first-name" id="first-name" placeholder="First Name" v-model="fname" class="sign-in-element"></p> <!-- email -->
        <p><input type="text" name="last-name" id="last-name" placeholder="Last Name" v-model="lname" class="sign-in-element"></p>
        <p><input type="text" name="email" id="email" placeholder="Email" v-model="email" class="sign-in-element"></p> <!-- email -->
        <p><input type="password" name="password" id="password" placeholder="Password" v-model="password" class="sign-in-element"></p>
        <!-- password -->
        <p><button @click="register" class="sign-in-element">Register an account</button></p> <!-- submit -->
        <p><button @click="signInWithGoogle" class="sign-in-element sign-in-with-google-button"><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" class="svg">Sign in with Google</button></p> <!-- sign in with google -->
    </div>
</template>