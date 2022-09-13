<script setup> // lang="js"
import { ref } from 'vue';
import { 
    getAuth,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth'
import { useRouter } from 'vue-router'; // import router from vue-router
const email = ref("");
const password = ref("");
const errMsg = ref(); // ERROR MESSAGE 
const router = useRouter() // get a reference to our vue router
const register = () => { // register-method logs in user with email and password
    // need .value because ref()
    const auth = getAuth(); // from firebase/auth
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log("Successfully registered new account");

            console.log(auth.currentUser)

            router.push('/') // redirect to the feed-page
        })
        .catch((error) => {
            console.log(`ERROR: ${error.code}`);
            switch (error.code) { // show ERROR MESSAGE
                case "auth/invalid-email":
                    errMsg.value = "Invalid email";
                    break;
                case "auth/user-not-found":
                    errMsg.value = "No account with that email was found";
                    break;
                case "auth/wrong-password":
                    errMsg.value = "Incorrect password";
                    break; 
                case "auth/user-disabled":
                    errMsg.value = "User has beeen permanently disabled";
                    break;
                default:
                    errMsg.value = "Email or password was incorrect";
                    break;
            }
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
        <h1>Sign in</h1>
        <p><input type="text" name="email" id="email" placeholder="Email" v-model="email"></p> <!-- email -->
        <p><input type="password" name="password" id="password" placeholder="Password" v-model="password"></p>
        <!-- password -->
        <p v-if="errMsg">{{errMsg}}</p>
        <p><button @click="register">Submit</button></p> <!-- submit -->
        <p><button @click="signInWithGoogle"><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg">Sign in with Google</button></p> <!-- sign in with google -->
    </div>
</template>