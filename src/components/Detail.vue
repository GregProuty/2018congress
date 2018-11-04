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
                    <div class="title">Party</div>
                </td>
                <td id="rightVal">
                    {{selected.Cand_Party_Affiliation}}
                </td>
            </tr>
            <tr>
            <td class="key">
                    <div class="title">State</div>
                </td>
                <td id="rightVal">
                    {{selected.Cand_State}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div class="title">City</div>
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
                    <div class="title">Address</div>
                </td>
                <td id="rightVal">
                    {{selected.Cand_Street_1}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div class="title">Coverage Start Date</div>
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
                    <div class="title">Total Campaign Contributions</div>
                </td>
                <td id="rightVal">
                    {{selected.Total_Contribution}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div class="title">Total Disbursement</div>
                </td>
                <td id="rightVal">
                    {{selected.Total_Disbursement}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div class="title">Total Receipt</div>
                </td>
                <td id="rightVal">
                    {{selected.Total_Receipt}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div class="title">Cash on Hand</div>
                </td>
                <td id="rightVal">
                    {{selected.Cash_On_Hand_COP}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div class="title">Individual Contribution</div>
                </td>
                <td id="rightVal">
                    {{selected.Individual_Contribution}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div class="title">Party Committee Contribution</div>
                </td>
                <td id="rightVal">
                    {{selected.Party_Committee_Contribution}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div class="title">Other Committee Contribution</div>
                </td>
                <td id="rightVal">
                    {{selected.Other_Committee_Contribution}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div class="title">Individual Itemized Contribution</div>
                </td>
                <td id="rightVal">
                    {{selected.Individual_Itemized_Contribution}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div class="title">Individual Unitemized Contribution</div>
                </td>
                <td id="rightVal">
                    {{selected.Individual_Unitemized_Contribution}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div class="title">Cand Contribution</div>
                </td>
                <td id="rightVal">
                    {{selected.Cand_Contribution}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div class="title">Offsets To Operating Expenditure</div>
                </td>
                <td id="rightVal">
                    {{selected.Offsets_To_Operating_Expenditure}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div class="title">Other Receipts</div>
                </td>
                <td id="rightVal">
                    {{selected.Other_Receipts}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div class="title">Operating Expenditure</div>
                </td>
                <td id="rightVal">
                    {{selected.Operating_Expenditure}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div class="title">Individual Refund</div>
                </td>
                <td id="rightVal">
                    {{selected.Individual_Refund}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div class="title">Total Contribution Refund</div>
                </td>
                <td id="rightVal">
                    {{selected.Total_Contribution_Refund}}
                </td>
            </tr>
            <tr>
                <td class="key">
                    <div class="title">Other Disbursements</div>
                </td>
                <td id="rightVal">
                    {{selected.Other_Disbursements}}
                </td>
            </tr>
        </table>
        <div class="image-area">
            <img v-if="showImage" class="image" :src="selected.image"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'detail',
        props: ['selected'],
        data () {
            return {
                showImage: false
            }
        },
        updated() {title
            this.showImage=false;

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
        border: 1px solid #999999;
        table-layout: fixed;
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
