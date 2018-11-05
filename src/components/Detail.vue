<template>
    <div class="detail" v-if="selected">
        <table class="table">
            <tr>
                <td class="bigtitle" colspan="2">
                    <h4>{{selected.Cand_Name}}</h4>
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div>Party</div>
                </td>
                <td id="rightVal">
                    {{selected.Cand_Party_Affiliation}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div>State</div>
                </td>
                <td id="rightVal">
                    {{selected.Cand_State}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div>City</div>
                </td>
                <td id="rightVal">
                    {{selected.Cand_City}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    Zip
                </td>
                <td id="rightVal">
                    {{selected.Cand_Zip}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div>Address</div>
                </td>
                <td id="rightVal">
                    {{selected.Cand_Street_1}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div>Coverage Start Date</div>
                </td>
                <td id="rightVal">
                    {{selected.Coverage_Start_Date}}
                </td>
            </tr>
            <tr>
                <td class="bigtitle" colspan="2">
                    <h4>FINANCIAL BREAKDOWN</h4>
                </td>
            </tr>
             <tr>
                <td class="key">
                    <div>Total Campaign Contributions</div>
                </td>
                <td id="rightVal">
                    {{selected.Total_Contribution}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div>Total Disbursement</div>
                </td>
                <td id="rightVal">
                    {{selected.Total_Disbursement}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div>Total Receipt</div>
                </td>
                <td id="rightVal">
                    {{selected.Total_Receipt}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div>Cash on Hand</div>
                </td>
                <td id="rightVal">
                    {{selected.Cash_On_Hand_COP}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div>Individual Contribution</div>
                </td>
                <td id="rightVal">
                    {{selected.Individual_Contribution}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div>Party Committee Contribution</div>
                </td>
                <td id="rightVal">
                    {{selected.Party_Committee_Contribution}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div>Other Committee Contribution</div>
                </td>
                <td id="rightVal">
                    {{selected.Other_Committee_Contribution}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div>Individual Itemized Contribution</div>
                </td>
                <td id="rightVal">
                    {{selected.Individual_Itemized_Contribution}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div>Individual Unitemized Contribution</div>
                </td>
                <td id="rightVal">
                    {{selected.Individual_Unitemized_Contribution}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div>Cand Contribution</div>
                </td>
                <td id="rightVal">
                    {{selected.Cand_Contribution}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div>Offsets To Operating Expenditure</div>
                </td>
                <td id="rightVal">
                    {{selected.Offsets_To_Operating_Expenditure}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div>Other Receipts</div>
                </td>
                <td id="rightVal">
                    {{selected.Other_Receipts}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div>Operating Expenditure</div>
                </td>
                <td id="rightVal">
                    {{selected.Operating_Expenditure}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div>Individual Refund</div>
                </td>
                <td id="rightVal">
                    {{selected.Individual_Refund}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div>Total Contribution Refund</div>
                </td>
                <td id="rightVal">
                    {{selected.Total_Contribution_Refund}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div>Other Disbursements</div>
                </td>
                <td id="rightVal">
                    {{selected.Other_Disbursements}}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'detail',
        props: ['selected'],
        data () {
            return {}
        }
    }
</script>

<style scoped>
    tr {
        border: 1px solid #999999;
    }

    td {
        border-bottom: 1px solid #999999;
    }
    
    .detail {
        display: inline-block;
        width: 100%;
    }

    .table {
        font-family: Arial;
        border: 1px solid #999999;
        table-layout: fixed;
        height: 720px;
        width: 100%;
    }

    .bigtitle {
        background-color: #414751;
        color: white;
        padding: 10px;
    }

    .image-prompt {
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .image {
        width: 100%;
    }

    #rightVal {
        text-align: right;
    }
</style>
