<template>
    <div>
        <h3>{{ title }}</h3>
        <transition name="fade"
                    mode="out-in">
            <div v-loading="loading"
                 style="height: calc(100vh - 100px); overflow-y: auto;"
                 v-if="tableKub"><!-- рассчет высоты таблицы -->
                <el-table
                        :data="tableData"
                        :height="heightTable"
                        border
                        size="mini"
                        :header-cell-style=setStylesHeaderTable
                        :cell-style=setStylesCellTable
                        highlight-current-row
                        style="width: 100%; margin-bottom: 8px;">
                    <el-table-column
                            prop="materialId"> <!-- название name в input совпадает с prop колонки-->
                        <template slot="header">
                            <div>materialId</div>
                            <el-popover
                                    width="200"
                                    trigger="hover"
                                    placement="right">
                                <input
                                        v-model="searchLeft"
                                        class="input-search"
                                        autocomplete="off"
                                        name="materialId"
                                        @input="searchTableData"
                                        @clear="clearTableData"
                                        placeholder="Поиск по ..."/> <!-- название name в input совпадает с prop колонки-->
                                <div slot="reference" class="name-wrapper">
                                    <img class="image-filter" slot="reference" src="../../../assets/images/filter_empty.png">
                                </div>
                            </el-popover>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="mnemo">
                        <template slot="header">
                            <div>mnemo</div>
                            <el-popover
                                    width="200"
                                    trigger="click"
                                    placement="right">
                                <input
                                        v-model="searchRight"
                                        class="input-search"
                                        autocomplete="off"
                                        name="mnemo"
                                        @input="searchTableData"
                                        @clear="clearTableData"
                                        placeholder="Поиск по ..."/>
                                <div slot="reference" class="name-wrapper">
                                    <img class="image-filter" slot="reference" src="../../../assets/images/filter_empty.png">
                                </div>
                            </el-popover>
                        </template>
                    </el-table-column>
                </el-table>
                <el-row type="flex" justify="center" align="middle">
                    <span class="title-pagination">Отображаемое количество строк не более </span>
                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page.sync="currentPage"
                            :page-sizes="[26, 30, 35, 40, 45, 50, 55, 100, 150, 200, 300, 400, 500]"
                            :page-size="sizePage"
                            layout="sizes, prev, pager, next"
                            :total="totalPage">
                    </el-pagination>
                </el-row>
            </div>
        </transition>
        <div v-if="!tableKub">
            <PageNotFound/>
        </div>
    </div>
</template>

<script>
    import homeApi from '../api/homeApi';
    import { handlers } from '../../../utils/handlers';
    import PageNotFound from "../../../components/pageNotFound/components/PageNotFound";

    export default {
        name: 'PredictionPage',
        components: { PageNotFound },
        data(){
            return {
                currentPage: 1, // текущая страница
                loading: false, // индикатор загрузки
                response: [], // ответ сервера response.data.sapMaterial
                searchLeft: '', // поиск слева
                searchRight: '', // поиск справа
                sizePage: 26, // количество отображаемых строк в таблице
                table: [], // изначально для таблицы пустой массив
                tableKub: false, // отображение таблицы Kubernetes
                tableSearch: [], // массив для поиска
                title: 'Прогнозирование',
            }
        },
        computed: {
            // установка высоты таблицы
            heightTable() {
                return screen.height - 290;
            },
            // здесь данные для отрисовки таблицы
            tableData() {
                return this.table;
            },
            // общее количество страниц
            totalPage() {
                if(this.tableSearch.length > 0 && this.searchLeft || this.tableSearch.length > 0 && this.searchRight || this.searchLeft || this.searchRight) {
                    return this.tableSearch.length;
                } else {
                    return this.response.length;
                }
            },
            // стили для header
            setStylesHeaderTable() {
                return {'background-color': '#F56C6C', 'color': '#fff', 'text-align': 'center', 'height': '23px'};
            },
            // стили для ячеек таблицы
            setStylesCellTable() {
                return {'text-align': 'center'};
            },
        },
        created() {
            this.getData(); // запрос данных при создании компонента
        },
        methods: {
            async getData() {
                try {
                    this.loading = true;
                    const response = await homeApi.get(); // здесь запрос данных с бэка
                    this.tableKub = true;
                    this.response = response.data.sapMaterial;
                    this.table = response.data.sapMaterial.slice(0, this.sizePage);
                    this.loading = false;
                }
                catch (e) {
                    this.loading = true;
                    this.tableKub = false;
                    handlers.defaultErrorAPIHandler(e, 'Ошибка сервера');
                    this.loading = false;
                    console.log(e);
                }
            },
            checkInputValue(value) {
                switch (value) {
                    case "materialId":
                        this.searchRight = '';
                        break;
                    case "mnemo":
                        this.searchLeft = '';
                        break;
                    default:
                        console.log("Значение " + value + " поиском не обрабатывается.");
                }
            },
            clearTableData() {},
            // перелистывание страниц таблицы
            handleCurrentChange(val) {
                this.currentPage = val;
                let array = this.tableSearch.length > 0 ? this.tableSearch : this.response;
                this.watchPartTable(array);
            },
            // выбор количества строк в таблице
            handleSizeChange(val) {
                this.sizePage = val;
                let array = this.tableSearch.length > 0 ? this.tableSearch : this.response;
                this.watchPartTable(array);
            },
            handleScroll(evt, el) {
                console.log('here', evt, el);
                /*if (window.scrollY > 50) {
                    console.log(evt, el);
                }
                return window.scrollY > 100*/
            },
            searchTableData(e) {
                if(e.target.value) {
                    this.checkInputValue(e.target.name);
                    this.tableSearch = this.response.filter(item => {
                        if(item[e.target.name] !== null) { // с сервера прилетают поля с null
                            return item[e.target.name].toLowerCase().includes(e.target.value.toLowerCase());
                        }
                    });
                    this.watchPartTable(this.tableSearch);
                } else {
                    this.tableSearch.length = 0;
                    this.watchPartTable(this.response);
                }
            },
            // сбрасывает текущее отображение в таблице и считает новое
            watchPartTable(array) {
                this.table.length = 0;
                this.table = array.slice(this.sizePage * this.currentPage - this.sizePage, this.sizePage * this.currentPage);
            },
        }
    }
</script>

<style scoped>
    /deep/ .el-table .cell {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        white-space: normal;
        word-break: break-all;
        line-height: 16px;
    }
    /deep/ .el-table th div {
        display: inline-block;
        line-height: 16px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        white-space: nowrap;
    }
    .image-filter {
        position: relative;
        top: 1px;
        left: -11px;
        width: 12px;
        cursor: pointer;
    }
    .title-pagination {
        color: #909399;
        font-size: 12px;
    }
    h3 {
        margin-top: 0;
    }
    .input-search {
        background-color: #fff;
        -webkit-appearance: none;
        background-image: none;
        border-radius: 3px;
        border: 1px solid #DCDFE6;
        box-sizing: border-box;
        display: inline-block;
        font-size: inherit;
        height: 28px;
        line-height: 28px;
        outline: none;
        padding: 0 15px;
        transition: border-color .3s cubic-bezier(.645,.045,.355,1);
        width: 200px;
        position: relative;
    }
    ::-webkit-input-placeholder {color: #c0cfe3; opacity:1; font-size: 12px;}/* webkit */
    ::-moz-placeholder          {color: #c0cfe3; opacity:1; font-size: 12px;}/* Firefox 19+ */
    :-moz-placeholder           {color: #c0cfe3; opacity:1; font-size: 12px;}/* Firefox 18- */
</style>
