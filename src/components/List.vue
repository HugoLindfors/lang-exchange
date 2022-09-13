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
            {{user.displayName}}, native: <span v-for="langauge in user.languages.filter((langauge) => langauge.lvl === 'native')">{{langauge.name}}, </span>
        </li>
    </ul>
</template>