<template>
    <div v-loading="loading">
        <table>
            <thead>
                <tr>
                    <th v-for="(name, index) in headerTable"
                    :key="index" :id="name">
                        <div class="header">
                            {{name}}
                            <el-popover
                                    :title="name"
                                    placement="right"
                                    width="400"
                                    @hide="hidePopup"
                                    trigger="click">
                                <svg version="1.1"
                                     viewBox="0 0 12 13"
                                     class="svg-icon svg-fill filter"
                                     data-id="filter"
                                     slot="reference"
                                     @click="filter(index)"
                                     style="width: 13px; height: 13px;">
                                    <defs></defs>
                                    <path fill="#909399" d="M3.636 12.986V6.551L.582 4.144A1.517 1.517 0 0 1 0 2.95V1.527A1.535 1.535 0 0 1 1.54 0h8.92A1.535 1.535 0 0 1 12 1.527V2.95a1.517 1.517 0 0 1-.578 1.193L8.364 6.552v3.173zM2 2.706L5.636 5.57v3.595l.728-.502V5.57L10 2.706v-.692H2z">
                                    </path>
                                </svg>
                                <el-input
                                        size="mini"
                                        placeholder="Поиск ..."
                                        v-model="inputPopup">
                                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                                </el-input>
                                <label @click="sort" class="header-popup-sort">
                                    Сортировать
                                    <i v-if="arrowTop" class="el-icon-top" style="font-size: 10px;"></i>
                                    <i v-else class="el-icon-bottom" style="font-size: 10px;"></i>
                                </label>
                            </el-popover>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in bodyTable"
                    :key="index">
                    <!--<el-tooltip v-for="(value, name, index) in item"
                                :key="index" :data-id="name" class="item" effect="dark" :content="typeof value !== 'string' ? String(value) : value" placement="bottom-end">
                        <td>{{value}}</td>
                    </el-tooltip>-->
                    <td v-for="(value, name, index) in item"
                        :key="index" :data-id="name">{{value}}</td>
                </tr>
            </tbody>

        </table>
    </div>
</template>

<script>
    import ColumnResizer from 'column-resizer';

    export default {
        name: "TableSimple",
        props: {
            contentBody: Array,
            contentHeader: Array
        },
        data() {
            return {
                arrowTop: true,
                body: null,
                columnIndex: null,
                keys: [],
                inputPopup: '',
                intermediate: [],
                loading: false,
                showTable: false,

                /*ресайз таблицы*/
                resizer: null,
                resizerOptions: {
                    headerOnly: true,
                },
            }
        },
        watch: {
            body: function(value) {
            },
            inputPopup: function(value) {
                let array = [];
                if(value.length > 0) {
                    this.body.forEach((item) => {
                        //console.log(item[this.keys[this.columnIndex]]);
                    });
                }
                //console.log(array);
            },
        },
        computed: {
            bodyTable: function() {
                //console.log(this.contentBody, this.contentHeader);
                this.getKeys(this.contentBody);
                this.body = this.contentBody;
                return this.body;
            },
            /*bodyTable: {//принимает данные для тела таблицы
                get() {
                    this.showTable = true;
                    this.getKeys(this.contentBody);
                    return this.contentBody;
                },
                set(index) {
                    let name = this.keys[index];
                    this.intermediate = this.contentBody.filter( item => {
                        return item[name] === 1;
                    })
                },
            },*/
            headerTable: function() {//принимает массив строк для header
                return this.contentHeader;
            },
        },
        updated() {
            this.enableResize();
        },
        beforeUpdate() {
            this.disableResize();
        },
        beforeDestroy() {
            this.disableResize();
        },
        methods: {
            filter(index) {
                //присваивает номер текущего фильтра нужного для поиска в массиве ключей
                this.columnIndex = index;
            },
            //достает из приходящей структуры для тела таблицы правильный порядок ключей в объектах и возвращает их в виде массива строк
            getKeys(contentBody) {
                if(contentBody) {
                    this.keys = JSON.stringify(contentBody).split('}')[0].split('{')[1].split(',').map((item) => {
                        return item.split(':')[0].replace(/['"«»]/g, '') }
                    );
                    //console.log(this.keys);
                }
            },
            hidePopup() {//при скрытии popover чистит инпут ввода
                this.inputPopup = '';
            },
            sort() {
                /*this.keys[self.columnIndex]*/
                const self = this;
                this.body.sort(function(a, b){//сортирует на месте
                    //console.log('значение лежащее в ячейке таблицы', a[self.keys[self.columnIndex]]);
                    if(typeof a[self.keys[self.columnIndex]] === 'string') {
                        if (a[self.keys[self.columnIndex]].toLowerCase() < b[self.keys[self.columnIndex]].toLowerCase()){return -1}
                        if (a[self.keys[self.columnIndex]].toLowerCase() > b[self.keys[self.columnIndex]].toLowerCase()){return 1}
                        return 0;
                    }
                    if(typeof a[self.keys[self.columnIndex]] === 'number') {
                        return a[self.keys[self.columnIndex]] - b[self.keys[self.columnIndex]];
                    }
                });
            },

            // ресайз таблицы
            enableResize() {
                const options = this.resizerOptions;

                if (!this.resizer) {
                    this.resizer = new ColumnResizer(
                        this.$el.querySelector('table'),
                        options,
                    );
                } else {
                    this.resizer.reset(options);
                }
            },
            disableResize() {
                if (this.resizer) {
                    this.resizer.reset({disable: true});
                }
            }
        }
    }
</script>

<style scoped>
    table {
        width: calc(100vw - 40px);
        border-collapse: collapse;
        margin: 8px;
        border-bottom: 1px solid #DCDFE6;
    }
    th {
        height: 32px;
        background-color: #add8e6;
        color: #909399;
        border: 1px solid #DCDFE6;
     }
    td {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        height: 32px;
        border-right: 1px solid #DCDFE6;
        border-bottom: 1px solid #DCDFE6;
        border-left: 1px solid #DCDFE6;
    }
    .filter {
        cursor: pointer;
        margin-left: 8px;
    }
    .filter:hover {
        opacity: .7;
    }
    .noData {
        width: calc(100vw - 10px);
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        height: calc(100vw - 400px);
        justify-content: center;
        align-items: center;
    }
    .header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 0 16px;
        height: 32px;
        align-items: center;
    }
    .header-popup-sort {
        cursor: pointer;
    }
    .header-popup-sort:hover {
        opacity: .7;
    }
</style>
