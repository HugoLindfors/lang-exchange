<script setup>
import { store } from './store';
</script>

<template>
    <div class="search">
        <div class="search-bar-container">
            <input type="text" @keyup="Search()" v-model="searchbarInput" class="search-bar" />
        </div>
    </div>
    <div class="filter">
        <div class="lvl-filter">
            <input type="checkbox" @click="Search(), DisplayLanguageGrouping('native', showNative)" name="showNative" v-model="showNative" checked /> NATIVE <!--Follows the standard scale of linguistics: A0 - total beginner, A1 - beginner, A2 - pre-intermediate, B1 - intermediate, B2 - upper intermediate, C1 - advanced, C2 - proficient and native -->
            <input type="checkbox" @click="Search(), DisplayLanguageGrouping('advanced', showAdvanced)" name="showAdvanced" v-model="showAdvanced" checked /> ADVANCED
            <input type="checkbox" @click="Search(), DisplayLanguageGrouping('intermediate', showIntermediate)" name="showIntermediate" v-model="showIntermediate" checked /> INTERMEDIATE
            <input type="checkbox" @click="Search(), DisplayLanguageGrouping('beginner', showBeginner)" name="showNative" v-model="showBeginner" checked /> BEGINNER
        </div>
        <div class="score-filter">
            <input type="checkbox" v-model="hideNegativeScore" /> HIDE NEGATIVE SCORES
        </div>
    </div>
    <table id="table" class="table">
        <thead id="table-head" class="table-head">
            <tr id="table-head-row" class="table-row table-head-row">
                <th>
                   NAME 
                </th>
                <th>
                    SCORE
                </th>
                <th v-if="showNative">
                    NATIVE LANGUAGE(S)
                </th>
                <th v-if="showAdvanced || showIntermediate || showBeginner">
                    CURRENTLY LEARNING / ALSO KNOWS
                </th>
            </tr>
        </thead>
        <tbody id="table-body" class="table-body">
            <tr v-for="user in filteredUsers" class="table-row table-body-row">
                <td>
                    <div>
                        {{user.displayName.toLocaleUpperCase()}}    
                    </div>
                    <div class="display-username">
                        @{{user.username.toLocaleUpperCase()}}
                    </div>
                </td>
                <td>
                    <span v-if="!hideNegativeScore || user.score >= 0">{{user.score}}</span>
                </td>
                <td v-if="showNative">
                    <div v-for="language in user.languages.filter((language) => language.lvl === 'native')">{{language.name.toUpperCase()}}</div>
                </td>
                <td v-if="showAdvanced || showIntermediate || showBeginner">
                    <div v-if="showAdvanced" v-for="language in user.languages.filter((language) => (language.lvl === 'advanced' || language.lvl === 'proficient'))">{{language.name.toLocaleUpperCase()}} ({{language.lvl.toLocaleUpperCase()}})</div>
                    <div v-if="showIntermediate" v-for="language in user.languages.filter((language) => (language.lvl === 'intermediate' || language.lvl === 'upper_intermediate'))">{{language.name.toLocaleUpperCase()}} ({{language.lvl.toLocaleUpperCase()}})</div>
                    <div v-if="showBeginner" v-for="language in user.languages.filter((language) => (language.lvl === 'pre-intermediate' || language.lvl === 'beginner'))">{{language.name.toLocaleUpperCase()}} ({{language.lvl.toLocaleUpperCase()}})</div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "newUsername",
        props: { newUsername: String },
        data() {
            return {
                store,
                searchbarInput: null,
                showNative: true,
                showAdvanced: true,
                showIntermediate: true,
                showBeginner: true,
                hideNegativeScore: false,
                filteredUsers: [...store.users]
            }
        }, methods: {
            Search() { // sök-metoden
                let filter = this.searchbarInput.toUpperCase();
                console.log(filter);
                let tr = document.getElementsByTagName("tr"); // tr är en array
                for (let i = 1; i < tr.length; i++) {
                    for (let j = 0; j < 4; j++) {
                        console.log(tr[i].getElementsByTagName("td")[j]);
                        let td = tr[i].getElementsByTagName("td")[j];
                        let txtValue = td.textContent || td.innerText;
                        if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                        break;
                        } else {
                        tr[i].style.display = "none";
                        }
                    }
                }
            },
            DisplayLanguageGrouping(input, state) {
                this.filteredUsers.languages.filter(language => language.lvl === input)
            }
        }
    }
</script>

<style scoped lang="css">

    div.search-bar-container {
        background-color: #EDEDED;
        margin: 0;
        padding: 0;
    }

    input.search-bar {
        width: 100%;
        height: 5vh;
        border: 1px solid black;
        background-color: transparent;
    }

    .display-username {
        font-size: smaller;
        color: #ABABAB;
    }
</style>