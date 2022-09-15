<script setup>

</script>

<template>
    <div class="search">
        <div class="search-bar-container">
            <input type="text" @keyup="Search()" v-model="searchbarInput" class="search-bar" />
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                Search() { //SÖKMETODEN
                    console.log(this.searchbarInput);
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
</style>