<template>
    <Page>
        <HeaderBar slot="header" title="Picker" leftFontCode="e5c4" @onLeft="back"></HeaderBar>
        <br>
        <div>简单实例</div>
        <br>
        <PickerWrapper :itemHeight="itemHeight" :itemCount="itemCount">
            <PickerItem ref="p1" :onSelected="p1Selected" :itemHeight="itemHeight" :itemCount="itemCount"
                        :values="values"></PickerItem>
            <PickerItem ref="p2" :onSelected="p2Selected" :itemHeight="itemHeight" :itemCount="itemCount"
                        :values="values"></PickerItem>
        </PickerWrapper>
    </Page>
</template>
<style rel='stylesheet/less' lang="less">

</style>
<script>
    import  {PickerWrapper, PickerItem, Page, HeaderBar} from 'components'


    export default{
        methods: {
            back () {
                window.history.back()
            },
            p1Selected(picker){
                if (this.$refs.p1.valueSelected > this.$refs.p2.valueSelected) {
                    this.$refs.p2.scrollToValue(this.$refs.p1.valueSelected);
                }
            },
            p2Selected(picker){
                if (this.$refs.p1.valueSelected > picker.valueSelected) {
                    this.$refs.p2.scrollToValue(this.$refs.p1.valueSelected);
                }
            }
        },

        data(){
            return {
                itemHeight: 30,
                itemCount: 3,
                values: [2001, 2002, 2003, 2004, 2005, 2006, 2007]
            }

        },
        mounted(){
        },
        components: {
            PickerWrapper, PickerItem, Page, HeaderBar
        }
    }

</script>
