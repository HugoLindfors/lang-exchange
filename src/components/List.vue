<script setup>
import { store } from './store';
</script>

<script>
export default {
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <ul>
        <li v-for="user in store.users">
            {{user.displayName}}
        </li>
    </ul>
</template>