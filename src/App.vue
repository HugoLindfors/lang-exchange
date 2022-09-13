<script setup> //lang="js"
import { RouterView, RouterLink } from 'vue-router'
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
import router from './router';

const isLoggedIn = ref(false);

let isAdmin = false;

let auth;
onMounted(() => {
	auth = getAuth();
	onAuthStateChanged(auth, (user) => {
		if (user) {
			isLoggedIn.value = true;
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

<template>
	<header>
		<nav class="navbar">
			<RouterLink to="/" class="router-link">Home</RouterLink>
			<RouterLink to="/admin" v-if="isLogggedIn && isAdmin" class="router-link">Admin</RouterLink>
			<RouterLink to="/profile" v-if="isLoggedIn" class="router-link">My Profile</RouterLink>
			<RouterLink to="/sign-in" v-if="!isLoggedIn" class="router-link">Sign In</RouterLink>
			<RouterLink to="/register" v-if="!isLoggedIn" class="router-link">Register</RouterLink>
			<button @click="handleSignOut" v-if="isLoggedIn" class="router-link">Sign Out</button>
		</nav>
	</header>

	<RouterView class="router-view" />

	<footer>
		<p>Thank you for using my site. See my <a href="https://github.com/hugolindfors2">GitHub</a> or reach me at <a href="mailto:hugo.lindfors2@elev.ga.ntig.se">hugo.lindfors2@elev.ga.ntig.se</a> for more.</p>
	</footer>
</template>

<style scoped lang="css">
	nav.navbar {
		background-color: #389683;
		color: white;
		height: 5vh;
	}

	nav.navbar .router-link {
		color: white;
	}

	.router-view {
		min-height: 95vh;
	}
</style>
