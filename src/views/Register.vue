<script setup>
import { 
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth'
import { useRouter } from 'vue-router'; // import router from vue-router

</script>

<template>
    <div class="register">
        <h1>Create an account</h1>
        <p>Already have an account? <a @click="ROUTER.push('/sign-in')">Sign In</a></p>
        <p><input type="text" name="email" id="email" placeholder="Email" v-model="email" class="sign-in-element"></p> <!-- email -->
        <p><input type="password" name="password" id="password" placeholder="Password" v-model="password" class="sign-in-element"></p>
        <!-- password -->
        <p><button @click="register" class="sign-in-element">Register an account</button></p> <!-- submit -->
        <p><button @click="signInWithGoogle" class="sign-in-element sign-in-with-google-button"><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" class="svg">Sign in with Google</button></p> <!-- sign in with google -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                email: null,
                password: null,
                ROUTER: this.$router // get a reference to our vue router
            }
        },
        methods: {
            register: () => { // register-method registers new user with email and password
                // need .value because ref()
                createUserWithEmailAndPassword(getAuth(), email.value, password.value)
                    .then((data) => {
                        console.log("Successfully registered new account");

                        console.log(getAuth().currentUser)

                        ROUTER.push('/') // redirect to the feed-page
                    })
                    .catch((error) => {
                        console.log(`ERROR: ${error.code}`);
                        alert(error.message);
                    })
            },
            signInWithGoogle: () => {
                let provider = new GoogleAuthProvider();
                signInWithPopup(getAuth(), provider)
                    .then((result) => {
                        console.log(result.user);
                        ROUTER.push('/');
                    })
                    .catch((error) => {
                        // handle error
                    });
            }
        }
    }
</script>