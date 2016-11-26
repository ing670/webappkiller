<template>
    <div>
        <ul v-for="(items,index) in clist" class="wk-grid">
            <li v-for="(it,i) in items" class="" @click="$emit('onItem', it)">
                <IconText v-show="it" :position="it&&it.position" :text="it&&it.text"
                          :iconFontCode="it&&it.iconFontCode"></IconText>
            </li>
        </ul>
    </div>
</template>
<script>
    import IconText from '../icontext';
    export default {
        computed: {
            clist(){
                let rowCount = Math.ceil(this.list.length / this.columnCount);
                console.log(rowCount);
                let cellCount = rowCount * this.columnCount;
                const arr = new Array(cellCount);
                let row = []
                let colum = []
                //处理所有的数组
                for (let i = 0; i < arr.length; i++) {
                    this.list[i] ? arr[i] = this.list[i] : '';
                    colum.push(arr[i]);
                    if (colum.length == this.columnCount) {
                        row.push(colum);
                        colum = [];
                    }
                }

                return row;
            }
        },
        props: {
            rowWidth: {
                type: Number,
                default: 1,
            },
            rowHeight: {
                type: Number,
                default: 2,
            },
            rowCount: {
                type: Number,
                default: 2
            },
            columnCount: {
                type: Number,
                default: 2
            },
            list: {
                default() {
                    return [{
                        classNames: "",
                        position: 'bottom',
                        iconSize: ".32rem",
                        iconFontCode: "e859",
                        iconColor: "#000",
                        text: ""
                    }, {
                        classNames: "",
                        position: 'bottom',
                        iconSize: ".32rem",
                        iconFontCode: "e859",
                        iconColor: "#000",
                        text: ""
                    }, {
                        classNames: "",
                        position: 'bottom',
                        iconSize: ".32rem",
                        iconFontCode: "e859",
                        iconColor: "#000",
                        text: ""
                    }];
                },
            },
        },
        components: {
            IconText
        },
    };
</script>
<style rel="stylesheet/less" type="text/less" lang="less">
    .wk-grid {
        text-align: center;
        display: flex;
        background: #fff;
        justify-content: flex-start;
        font-size: .14rem;
        flex-wrap: wrap;
        li {
            height: 2rem;
            flex: 1;
            border-left: 1px solid #eee;
            border-bottom: 1px solid #eee;
            align-self: center;
            display: flex;
            align-items: center;
            justify-content: center;
            &:first-child {
                border-left: none
            }
        }
    }</style>
