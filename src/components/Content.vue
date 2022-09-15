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
            <input type="checkbox" name="native" v-model="showNative" checked /> NATIVE <!--Follows the standard scale of linguistics: A0 - total beginner, A1 - beginner, A2 - pre-intermediate, B1 - intermediate, B2 - upper intermediate, C1 - advanced, C2 - proficient and native -->
            <input type="checkbox" name="c" v-model="showAdvanced" checked /> ADVANCED
            <input type="checkbox" name="b" v-model="showIntermediate" checked /> INTERMEDIATE
            <input type="checkbox" name="a" v-model="showBeginner" checked /> BEGINNER
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

<script>
    export default {
        props: {
            
        },
        data() {
            return {
                store,
                searchbarInput: null,
            }
        }, methods: {
            Search() { //SÖKMETODEN
                    let filter = this.searchbarInput.toUpperCase();
                    console.log(filter);
                    let table = document.getElementById("table");
                    let tr = document.getElementsByTagName("tr"); //TR ÄR EN ARRAY
                    for (let i = 1; i < tr.length; i++) {
                        for (let j = 0; j < 4; j++) {
                            let td = tr[i].getElementsByTagName("td")[j];
                            let txtValue = td.textContent || td.innerText;
                            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                            tr[i].style.display = "";
                            } else {
                            tr[i].style.display = "none";
                            }
                        }
                    }
                },
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