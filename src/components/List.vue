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
    <table id="table" class="table">
        <thead id="table-head" class="table-head">
            <tr id="table-head-row" class="table-row table-head-row">
                <th>
                   NAME 
                </th>
                <th>
                    SCORE
                </th>
                <th>
                    NATIVE LANGUAGE(S)
                </th>
                <th>
                    CURRENTLY LEARNING / ALSO KNOWS
                </th>
            </tr>
        </thead>
        <tbody id="table-body" class="table-body">
            <tr v-for="user in store.users" class="table-row table-body-row">
                <td>
                    <div>
                        {{user.displayName.toLocaleUpperCase()}}    
                    </div>
                    <div class="display-username">
                        @{{user.username.toLocaleUpperCase()}}
                    </div>
                </td>
                <td>
                    {{user.score}}
                </td>
                <td>
                    <div v-for="language in user.languages.filter((language) => language.lvl === 'native')">{{language.name.toUpperCase()}}</div>
                </td>
                <td>
                    <div v-for="language in user.languages.filter((language) => language.lvl !== 'native')">{{language.name.toLocaleUpperCase()}} ({{language.lvl.toLocaleUpperCase()}})</div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
    .display-username {
        font-size: smaller;
        color: #ABABAB;
    }
</style>