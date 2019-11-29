<template>
    <div>
        <div class="table-block">

            <div class="row table-header">
                <div style="width: 5%;"
                     class="header-cell">
                    <el-popover
                            placement="right"
                            width="400"
                            trigger="click">
                        <div slot="reference">Name</div>
                        <el-input placeholder="Поиск ..."
                                  size="mini"
                                  v-model="inputHeader.name" @input="search"></el-input>
                    </el-popover>
                </div>
                <div style="width: 5%;"
                     class="header-cell">
                    <el-popover
                            placement="right"
                            width="400"
                            trigger="click">
                        <div slot="reference">Id</div>
                        <el-input placeholder="Поиск ..."
                                  size="mini"
                                  v-model="inputHeader.id"></el-input>
                    </el-popover>
                </div>
                <div style="width: 20%;"
                     class="header-cell">
                    <el-popover
                            placement="right"
                            width="400"
                            trigger="click">
                        <div slot="reference">Url</div>
                        <el-input placeholder="Поиск ..."
                                  size="mini"
                                  v-model="inputHeader.url"></el-input>
                    </el-popover>
                </div>
                <div style="width: 45%;"
                     class="header-cell">
                    <el-popover
                            placement="right"
                            width="400"
                            trigger="click">
                        <div slot="reference">Title</div>
                        <el-input placeholder="Поиск ..."
                                  size="mini"
                                  v-model="inputHeader.title"></el-input>
                    </el-popover>
                </div>
                <div style="width: 20%;"
                     class="header-cell">
                    <el-popover
                            placement="right"
                            width="400"
                            trigger="click">
                        <div slot="reference">Web</div>
                        <el-input placeholder="Поиск ..."
                                  size="mini"
                                  v-model="inputHeader.web"></el-input>
                    </el-popover>
                </div>
            </div>

            <div style="height: calc(100vh - 240px); overflow: auto;"
                 v-on:scroll.passive="load">
                <div v-for="item in tableData"
                     class="row table-row"
                     :key="item.id">
                    <div style="width: 5%;">{{item.id}}</div>
                    <div style="width: 5%;">{{item.albumId}}</div>
                    <div style="width: 20%;">{{item.thumbnailUrl}}</div>
                    <div style="width: 45%;">{{item.title}}</div>
                    <div style="width: 20%;">{{item.url}}</div>
                </div>
            </div>

            <div class="row table-row"
                 style="border-top: 1px solid #ebebeb; height: 24px; line-height: 24px; font-size: 12px;">
                <div style="margin: 0 8px 0 16px;">Загружено строк</div>
                <div style="color: #67C23A;">{{table.length}} </div>
                <div style="margin: 0 8px 0 16px;">из</div>
                <div style="color: #F56C6C;">{{dataTable.length}}</div>
                <div style="flex-grow: 1; align-items: center; margin: 0 16px 0 0;"
                     class="row">
                    <div style="margin: 0 0 0 16px;">Индикатор загрузки</div>
                    <el-progress style="flex-grow: 1;"
                                 :stroke-width="8"
                                 :percentage="bar"
                                 status="success"></el-progress>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "TableInfinityScroll",
        props: {
            propsDataTable: Array,
            tableHeaders: Array
        },
        data() {
            return {
                bar: 0,
                countScrollPlace: 0, // положение скрола
                dataTable: [], // массив для хранения всех данных таблицы
                dataTableLength: 0,
                endIndex: 50, // последний index отображаемого массива
                inputHeader: {
                    name: '',
                    id: '',
                    url: '',
                    title: '',
                    web: ''
                },
                loading: false, // индикатор загрузки
                table: [], // изначально для таблицы пустой массив
                tableSearch: [],
                startIndex: 0, // начальный index отображаемого массива
            }
        },
        computed: {
            // здесь данные для отрисовки таблицы
            tableData() {
                this.dataTable = this.propsDataTable.flat(2); // преобразует многомерный массив в одномерный на заданную максимальную глубину
                this.table = this.dataTable.slice(this.startIndex, this.endIndex);
                this.dataTableLength = this.dataTable.length;
                return this.table;
            },
        },
        methods: {
            load (e) {
                let arrayCountData = null;
                this.tableSearch.length > 0 ? arrayCountData = this.tableSearch : arrayCountData = this.dataTable;
                if(e.target.scrollTop > this.countScrollPlace && this.endIndex < arrayCountData.length) {
                    this.endIndex = this.endIndex + 1;
                    this.table = arrayCountData.slice(0, this.endIndex);
                    this.countScrollPlace = e.target.scrollTop;
                    this.bar = Number((100 / (this.dataTableLength / this.table.length)).toFixed());
                }
            },
            search(e)  {
                if(e.length > 2) {
                    this.tableSearch = this.dataTable.filter(item => {
                        return item.title.toLowerCase().includes(e.toLowerCase())
                    });
                }
            }
        }
    }
</script>

<style scoped>
    .header-cell {
        display: flex;
        justify-content: center;
        cursor: pointer;
    }
    .row {
        display: flex;
        flex-direction: row;
    }
    .table-block {
        margin: 0 16px;
        border: 1px solid #ebebeb;
        border-radius: 3px;
        transition: .2s;
    }
    .table-block:hover {
        box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
    }
    .table-header {
        border-bottom: 1px solid #ebebeb;
        height: 40px;
        line-height: 40px;
        color: #909399;
        font-weight: 600;
        font-size: 16px;
    }
    .table-row {
        border-bottom: 1px solid #ebebeb;
        height: 32px;
        line-height: 32px;
    }
    .table-row:hover {
        transition: .3s;
        background-color: #f5f7fa;
        cursor: pointer;
        color: #F56C6C;
    }
    .table-row:not(:hover) {
        transition: .3s;
    }
</style>
