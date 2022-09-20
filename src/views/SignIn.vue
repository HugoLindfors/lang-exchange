<script setup>
import { 
    getAuth,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth'

</script>
    
<template>
    <div class="register">
        <h1>Sign into account</h1>
        <p>Don't have an account? <a @click="router.push('/register')">Register</a></p>
        <p><input type="text" name="email" id="email" placeholder="Email" v-model="email" class="sign-in-element"></p> <!-- email -->
        <p><input type="password" name="password" id="password" placeholder="Password" v-model="password" class="sign-in-element"></p>
        <!-- password -->
        <p v-if="errMsg">{{errMsg}}</p>
        <p><button @click="register" class="sign-in-element">Sign in</button></p> <!-- submit -->
        <p><button @click="signInWithGoogle" class="sign-in-element sign-in-with-google-button"><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" class="svg">Sign in with Google</button></p> <!-- sign in with google -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                email: null,
                password: null,
                errMsg: null, // ERROR MESSAGE
                ROUTER: this.$router // get a reference to our vue router
            }
        }, methods: {
            register: () => { // register-method logs in user with email and password
                // need .value because ref()
                signInWithEmailAndPassword(getAuth(), email, password)
                    .then((data) => {
                        console.log("Successfully signed in");

                        console.log(getAuth().currentUser);

                        ROUTER.push('/'); // redirect to the feed-page
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
            },
            signInWithGoogle: () => {
                const provider = new GoogleAuthProvider();
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