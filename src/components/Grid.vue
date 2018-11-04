<template>
    <ag-grid-vue class="ag-fresh grid"
                 :gridOptions="gridOptions"
                 :rowData="rowData"
                 :rowClicked="onRowClicked"
                 :rowDataChanged="onRowDataChanged">
    </ag-grid-vue>
</template>

<script>
    import Vue from "vue";
    import {AgGridVue} from "ag-grid-vue";
    import 'whatwg-fetch'
    import staticData from '../../static/mini.json';
    export default {
        name: 'grid',
        data () {
            return {
                gridOptions: null,
                rowData: staticData
            }
        },
        components: {
            AgGridVue
        },
        methods: {
            createColDefs() {
                return [
                    {headerName: "Candidate Name", field: "Cand_Name", width: 225, suppressSizeToFit: true},
                    {headerName: "Party", field: "Cand_Party_Affiliation", width:110},
                    {headerName: "Office", field: "Cand_Office", width:110},
                    {headerName: "State", field: "Cand_State"},
                    {headerName: "City", field: "Cand_City"},
                    {headerName: "Status", field: "Cand_Incumbent_Challenger_Open_Seat"},
                    {headerName: "$ Contributions", field: "Total_Contribution", width: 200}
                ];
            },
            onRowClicked(params) {
                let url = new URL('http://localhost:3000/details'),
                    query = {name: params.data.Cand_Name};
                Object.keys(query).forEach(key => url.searchParams.append(key, query[key]))

                fetch(url, {method: 'GET', credentials: 'same-origin'})
                .then((response) => {
                    return response.json()
                })
                .then((json) => {
                    this.$emit("candSelected", json)
                });
            },
            onRowDataChanged() {
                Vue.nextTick(() => {
                        this.gridOptions.api.sizeColumnsToFit();
                    }
                );
            }
        },
        created() {
            this.gridOptions = {
                enableFilter:true,
                enableSorting:true
            };
            this.gridOptions.columnDefs = this.createColDefs();
        }
    }
</script>

<style scoped>
    .grid {
        height: 720px;
    }
</style>
