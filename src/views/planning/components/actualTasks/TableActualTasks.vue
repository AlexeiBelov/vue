<template>
    <div>
        <el-table
                :data="tableData"
                style="width: 100%"
                border
                size="mini"
                :header-cell-style=setStylesHeaderTable
                :cell-style=setStylesCellTable
                highlight-current-row
                show-summary
                tooltip-effect="light">
            <el-table-column
                    label="albumId"
                    prop="albumId"
                    width="88">
            </el-table-column>
            <el-table-column
                    label="id"
                    prop="id"
                    width="80">
            </el-table-column>
            <el-table-column
                    label="thumbnailUrl"
                    prop="thumbnailUrl">
                <!--<template slot-scope="scope">
                    <el-image
                            style="width: 24px; height: 24px"
                            :src="scope.row.thumbnailUrl"></el-image>
                </template>-->
            </el-table-column>
            <el-table-column
                    label="title"
                    prop="title"
                    width="240">
                <template slot-scope="scope">
                    <el-tooltip class="item" effect="light" :content="scope.row.title" placement="top-start">
                        <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{ scope.row.title }}</span>
                    </el-tooltip>
                </template>
            </el-table-column>
            <el-table-column
                    label="url"
                    prop="url">
                <!--<template slot-scope="scope">
                    <el-image
                            style="width: 24px; height: 24px"
                            :src="scope.row.url"></el-image>
                </template>-->
            </el-table-column>
            <el-table-column
                    align="right">
                <template slot="header" slot-scope="scope">
                    <el-input
                            v-model="search"
                            size="mini"
                            @input="searchTableData"
                            @clear="clearTableData"
                            :clearable="true"
                            placeholder="Поиск по 'title' ..."/>
                </template>
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">Редактировать</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">Удалить</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-sizes="[5, 9, 12]"
                :page-size="pageSize"
                layout="sizes, prev, pager, next"
                :total="totalPage">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "TableActualTasks",
        data() {
            return {
                search: '',
            }
        },
        computed: {
            tableData: function () {
                //this.$store.dispatch('PlanningPage/SET_COUNT_DATA_TABLE', [this.pageSize, this.currentPage]);
                return this.$store.getters['PlanningPage/getCountTable'] || [];
            },
            pageSize: {
                get() {
                    return this.$store.getters['PlanningPage/getPageSize'];
                },
                set() {
                    this.handleSizeChange();
                }
            },
            currentPage: {
                get() {
                    return this.$store.getters['PlanningPage/getCurrentPage'];
                },
                set() {
                    this.handleCurrentChange();
                }
            },
            totalPage: function () {
                return this.$store.getters['PlanningPage/getTotalPage'];
            },
            setStylesHeaderTable: function () {
                return {
                    'background-color': '#909399',
                    'color': '#fff',/*'color': '#606266',*/
                    'text-align': 'center',
                    'font-size': '18px',
                    'font-weight' : '500'
                };
            },
            setStylesCellTable: function () {
                return {
                    'text-align': 'center',
                };
            }
        },
        methods: {
            clearTableData() {

            },
            handleCurrentChange(val) {
                if (!!val) {
                    this.$store.dispatch('PlanningPage/SET_CURRENT_PAGE', val);
                    this.$store.dispatch('PlanningPage/SET_COUNT_DATA_TABLE', [this.pageSize, val] );
                }
            },
            handleSizeChange(val) {
                if (!!val) {
                    this.$store.dispatch('PlanningPage/SET_COUNT_PAGE_SIZE', val);
                    this.$store.dispatch('PlanningPage/SET_COUNT_DATA_TABLE', [val , this.currentPage]);
                }
            },
            handleEdit(index) {
                this.$alert(`Редактирование номера ${index}.`, 'Таблица', {
                    confirmButtonText: 'Отправить',
                    callback: () => {
                        this.$message({
                            type: 'Информационное сообщение',
                            message: `Редактирование номера: ${index} завершено.`
                        });
                    }
                });
            },
            handleDelete(index) {
                this.$message.error(`Удаление номера ${index}`);
            },
            searchTableData: function (search) {
                if (search.length > 0) {
                    this.$store.dispatch('PlanningPage/SET_SEARCH_COUNT_TABLE', search);
                }
            },
        }
    }
</script>

<style scoped>
    /deep/ .el-table .cell {

    }
</style>
