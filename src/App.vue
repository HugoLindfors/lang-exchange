<script setup> //lang="js"
import { RouterView, RouterLink } from 'vue-router'
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
import router from './router';

const isLoggedIn = ref(false);

let isAdmin = false;
let currentUserId = "";

let auth;
onMounted(() => {
	auth = getAuth();
	onAuthStateChanged(auth, (user) => {
		if (user) {
			isLoggedIn.value = true;
			console.log(`CURRENT USER'S ID: ${user.uid}`);
			currentUserId = user.uid;
			console.log(`currentUserId = ${currentUserId}`)
		}
		else {
			isLoggedIn.value = false;
		}
	});
});

const handleSignOut = () => {
	signOut(auth).then(() => {
		router.push('/')
	});
}
</script>

<!-- parent component -->
<script>
	export default {
		data() {
			return {
				
			}
		}
	}
</script>

<template>
	<header>
		<nav class="navbar">
			<RouterLink to="/" class="router-link">Home</RouterLink>
			<RouterLink to="/admin" v-if="isLogggedIn && isAdmin" class="router-link">Admin</RouterLink>
			<RouterLink to="/profile" v-if="isLoggedIn" class="router-link">My Profile</RouterLink>
			<RouterLink to="/sign-in" v-if="!isLoggedIn" class="router-link right sign-in">Sign In</RouterLink>
			<button @click="handleSignOut" v-if="isLoggedIn" class="router-link-button">Sign Out</button>
		</nav>
	</header>

	<RouterView class="router-view" />

	<footer>
		<p>Thank you for using my site. See my <a href="https://github.com/hugolindfors2">GitHub</a> or reach me at <a href="mailto:hugo.lindfors2@elev.ga.ntig.se">hugo.lindfors2@elev.ga.ntig.se</a> for more. Pro tip, click the table headings to sort column!</p>
	</footer>
</template>

<style scoped lang="css">
	.navbar {
		background-color: #389683;
		color: white;
		height: 5vh;
		width: 100%;
		min-width: 280px;
	}

	.navbar .router-link {
		color: white;
		text-decoration: none;
	}

	.navbar .router-link-button {
		border: none;
		background-color: transparent;
		color: inherit;
	}

	.router-view {
		min-height: 95vh;
	}
</style>
