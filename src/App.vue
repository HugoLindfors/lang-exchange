<script setup> //lang="js"
import { RouterView, RouterLink } from 'vue-router'
import { getAuth, onAuthStateChanged, getRedirectResult, signOut } from '@firebase/auth';
import router from './router';
</script>

<template>
	<header>
		<nav class="navbar">
			<RouterLink to="/" class="router-link">Home</RouterLink>
			<RouterLink to="/admin" v-if="isLogggedIn && isAdmin" class="router-link">Admin</RouterLink>
			<RouterLink to="/profile" v-if="isLoggedIn" class="router-link">My Profile</RouterLink>
			<RouterLink to="/sign-in" v-if="!isLoggedIn" class="router-link right sign-in">Sign In</RouterLink>
			<button @click="handleSignOut" v-if="isLoggedIn" class="router-link-button">Sign out</button>
		</nav>
	</header>

	<RouterView class="router-view" />

	<footer>
		<p>Thank you for using my site. See my <a href="https://github.com/hugolindfors2">GitHub</a> or reach me at <a href="mailto:hugo.lindfors2@elev.ga.ntig.se">hugo.lindfors2@elev.ga.ntig.se</a> for more. Pro tip, click the table headings to sort column!</p>
	</footer>
</template>

<script>
	export default {
		data() {
			return {
				isLoggedIn: false,
				currentUserId: null,
				currentUserDisplayName: null,
			}
		},
		methods: {
			handleSignOut() {
				signOut(getAuth()).then(() => {
					router.push('/')
				});
			}
		},
		created() {
			this.currentUserId = getAuth().currentUser?.uid;
			console.log(getAuth().currentUser?.uid);
			if (this.currentUserId) {
				this.isLoggedIn = true;
			}
			
			onAuthStateChanged(getAuth(), user => {
				if (user) {
					this.isLoggedIn = true;
					this.currentUserId = user.uid;
				}

				else {
					this.isLoggedIn = false;
					this.currentUserId = null;
					this.currentUserDisplayName = null;
				}
			});
		}
	}
</script>

<style scoped>
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
