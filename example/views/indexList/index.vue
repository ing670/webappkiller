<template>
    <Page>
        <ScrollView>
            <HeaderBar slot="header" title="通讯录" leftFontCode="e5c4" @onLeft="back"></HeaderBar>

            <IndexList :listData="listData" :itemClick="itemClick">
            </IndexList>
        </ScrollView>
    </Page>
</template>
<style rel='stylesheet/less' lang="less">

</style>
<script>
    import  {IndexList, Page, HeaderBar, ScrollView} from 'components'

    export default{
        methods: {
            back () {
                window.history.back()
            },
            itemClick(data){
                this.$router.push('/');
            }
        },

        data(){
            return {
                listData: {
                    A: ['a', 'A', 'AA', 'AAA'],
                    B: ["B"],
                    C: ['Ca', 'CA', 'CAA', 'CAAA'],
                    D: ['Da', 'DA', 'DAA', 'DAAA'],
                    E: ['Ea', 'EA', 'EAA', 'EAAA'],
                    F: ['Fa', 'FA', 'FAA', 'FAAA'],
                    G: ['Ga', 'GA', 'GAA', 'GAAA'],
                    H: ['Ha', 'HA', 'HAA', 'HAAA'],
                    I: ['Ia', 'IA', 'IAA', 'IAAA'],
                    J: ['Ja', 'JA', 'JAA', 'JAAA'],
                    K: ['Ka', 'KA', 'KAA', 'KAAA'],
                    L: ['La', 'LA', 'LAA', 'LAAA'],
                    M: ['Ma', 'MA', 'MAA', 'MAAA'],
                    N: ['Na', 'NA', 'NAA', 'NAAA'],
                    O: ['Oa', 'OA', 'OAA', 'OAAA'],
                    P: ['Pa', 'PA', 'PAA', 'PAAA'],
                    Q: ['Qa', 'QA', 'QAA', 'QAAA'],
                    R: ['Ra', 'RA', 'RAA', 'RAAA'],
                    S: ['Sa', 'SA', 'SAA', 'SAAA'],
                    T: ['Ta', 'TA', 'TAA', 'TAAA'],
                    U: ['Ua', 'UA', 'UAA', 'UAAA'],
                    V: [],
                    W: ['Wa', 'WA', 'WAA', 'WAAA'],
                    X: ['Xa', 'XA', 'XAA', 'XAAA'],
                    Y: ['Ya', 'YA', 'YAA', 'YAAA'],
                    Z: ['Za', 'ZA', 'ZAA', 'ZAAA'],
                    "#": ["1"]
                },
            }

        },

        components: {
            IndexList, Page, HeaderBar, ScrollView
        }
    }

</script>
