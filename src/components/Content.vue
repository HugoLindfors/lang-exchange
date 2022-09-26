<script setup>
import { store } from '../main';
</script>

<template>
    <div class="search">
        <div class="search-bar-container">
            <input type="text" @keyup="Search()" v-model="searchbarInput" class="search-bar" placeholder="Checks if row includes substring" />
        </div>
    </div>
    <div class="filter">
        <div class="lvl-filter">
            <input type="checkbox" @click="Search(), DisplayLanguageGrouping('native', showNative)" id="show-native" name="show-native" v-model="showNative" checked class="checkbox"/> <label for="show-native">NATIVE</label> <!--Follows the standard scale of linguistics: A0 - total beginner, A1 - beginner, A2 - pre-intermediate, B1 - intermediate, B2 - upper intermediate, C1 - advanced, C2 - proficient and native -->
            <input type="checkbox" @click="Search(), DisplayLanguageGrouping('advanced', showAdvanced)" id="show-advanced" name="show-advanced" v-model="showAdvanced" checked class="checkbox"/> <label for="show-advanced">ADVANCED</label>
            <input type="checkbox" @click="Search(), DisplayLanguageGrouping('intermediate', showIntermediate)" id="show-intermediate" name="show-intermediate" v-model="showIntermediate" checked class="checkbox"/> <label for="show-intermediate">INTERMEDIATE</label>
            <input type="checkbox" @click="Search(), DisplayLanguageGrouping('beginner', showBeginner)" id="show-beginner" name="show-beginner" v-model="showBeginner" class="checkbox"/> <label for="show-beginner">BEGINNER</label>
        </div>
        <div class="score-filter">
            <input type="checkbox" v-model="hideNegativeScore" name="hide-negative-scores" id="hide-negative-scores" class="checkbox" /> <label for="hide-negative-scores">HIDE NEGATIVE SCORES</label>
        </div>
    </div>
    <table id="table" class="table">
        <thead id="table-head" class="table-head">
            <tr id="table-head-row" class="table-row table-head-row">
                <th @click="SortUsersByUsername()" class="table-head-row-cell">
                   NAME 
                </th>
                <th @click="SortUsersByScore()" class="table-head-row-cell">
                    SCORE
                </th>
                <th v-if="showNative" class="table-head-row-cell d-none d-md-block">
                    NATIVE LANGUAGE(S)
                </th>
                <th v-if="showAdvanced || showIntermediate || showBeginner" class="table-head-row-cell">
                    <span class="d-none d-md-block">CURRENTLY LEARNING / ALSO KNOWS</span>
                    <span class="d-sm-block d-md-none">LANGUAGES</span>
                </th>
                <th class="table-head-row-cell d-none d-md-block">
                    OTHER PLATFORMS
                </th>
            </tr>
        </thead>
        <tbody id="table-body" class="table-body">
            <tr v-for="user in store.users.filter((user) => hideNegativeScore ? user.score > 0 : user.score)" class="table-row table-body-row">
                <td class="table-row-cell">
                    <div>
                        {{user.displayName.toLocaleUpperCase()}}    
                    </div>
                    <div class="display-username">
                        @{{user.username.toLocaleUpperCase()}}
                    </div>
                    <div class="d-sm-block d-md-none">
                        <span v-for="contac in user.contact">{{contac.place.toUpperCase()}}: {{contac.username.toUpperCase()}}</span>
                    </div>
                </td>
                <td class="table-row-cell">
                    <span class="score-container"><span v-if="!hideNegativeScore || user.score >= 0"><span>{{user.score}}</span><span class="score-btn-container"><span><button @click="modifyScore(user, 'add')" class="score-button pos-btn">+</button></span><span><button @click="modifyScore(user, 'subtract')" class="score-button neg-btn">–</button></span></span></span></span>
                </td>
                <td v-if="showNative" class="table-row-cell d-none d-md-block">
                    <div v-for="language in user.languages.filter((language) => language.lvl === 'native')">{{language.name.toUpperCase()}}</div>
                </td>
                <td v-if="showAdvanced || showIntermediate || showBeginner" class="table-row-cell">
                    <div v-if="showNative" v-for="language in user.languages.filter((language) => language.lvl === 'native')" class="d-sm-block d-md-none">{{language.name.toUpperCase()}} ({{language.lvl.toLocaleUpperCase()}})</div>
                    <div v-if="showAdvanced" v-for="language in user.languages.filter((language) => (language.lvl === 'advanced' || language.lvl === 'proficient'))">{{language.name.toLocaleUpperCase()}} ({{language.lvl.toLocaleUpperCase()}})</div>
                    <div v-if="showIntermediate" v-for="language in user.languages.filter((language) => (language.lvl === 'intermediate' || language.lvl === 'upper_intermediate'))">{{language.name.toLocaleUpperCase()}} ({{language.lvl.toLocaleUpperCase()}})</div>
                    <div v-if="showBeginner" v-for="language in user.languages.filter((language) => (language.lvl === 'pre-intermediate' || language.lvl === 'beginner'))">{{language.name.toLocaleUpperCase()}} ({{language.lvl.toLocaleUpperCase()}})</div>
                </td>
                <td class="table-row-cell d-none d-md-block">
                    <div v-for="contac in user.contactMethods">{{contac.platform.toUpperCase()}}: {{contac.username.toUpperCase()}}</div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        data() {
            return {
                store,
                isSortedByUsername: false,
                isReverseSortedByUsername: false,
                searchbarInput: null,
                showNative: true,
                showAdvanced: true,
                showIntermediate: true,
                showBeginner: false,
                hideNegativeScore: false,
                filteredUsers: [...store.users],
                sortedUsers: [...store.users],
                copyOfUsers: [...store.users],
                isSortedByScore: false,
                isReverseSortedByScore: false,
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

            DisplayLanguageGrouping(input) {
                this.filteredUsers.languages.filter(language => language.lvl === input)
            },

            SortUsersByUsername() {
                if (!this.isSortedByUsername) {
                    store.users.sort((a, b) => a.username.localeCompare(b.username));
                    this.isSortedByUsername = true;
                }

                else if (!this.isReverseSortedByUsername) {
                    store.users.sort((a, b) => b.username.localeCompare(a.username));
                    this.isReverseSortedByUsername = true;
                }

                else {
                    this.isSortedByUsername = this.isReverseSortedByUsername = false;
                }

                // if !sorted => sort
                // else if !reversed => reverse
                // else original_order
            },

            SortUsersByScore() {
                if (!this.isSortedByScore) {
                    store.users.sort((a, b) => b.score - a.score);
                    this.isSortedByScore = true;
                }

                else if (!this.isReverseSortedByScore) {
                    store.users.sort((a, b) => a.score - b.score);
                    this.isReverseSortedByScore = true;
                }

                else {
                    this.isSortedByScore = this.isReverseSortedByScore = false;
                }
            },


            // fix sorting method

            modifyScore: (user, op) => {
                if (op === 'add') {
                    if (user.score === -1) {
                        user.score += 2;
                    }
                    else {
                        user.score++;
                    }
                }
                else {
                    if (user.score === 1) {
                        user.score -= 2;
                    }
                    else {
                        user.score--;
                    }
                }
            }
        }
    }
</script>

<style scoped lang="css">

    div.search-bar-container {
        background-color: #EDEDED;
        margin: 0;
        padding: 0;
        width: 100%;
		min-width: 320px;
    }

    input.search-bar {
        width: 100%;
        height: 5vh;
        border: 1px solid black;
        background-color: transparent;
		min-width: 320px;
    }

    .display-username {
        font-size: smaller;
        color: #ABABAB;
    }

    .table {
        width: 100%;
    }

    .table-row-cell {
        min-height: 200px;
    }

    .score-button {
        border-radius: 15px;
        width: 4vh;
        height: 4vh;
    }

    .pos-btn {
        background-color: darkgreen;
    }

    .neg-btn {
        background-color: darkred;
    }

    .score-btn-container {
        display: grid;
        grid-template-columns: 1fr;
    }

    .score-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
</style>