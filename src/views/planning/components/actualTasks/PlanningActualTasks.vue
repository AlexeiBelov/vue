<template>
    <div>
        <div class="row title-time">
            <div class="row"
                 @click="refreshTable">
                <i class="el-icon-refresh icon-refresh"></i>
                <span class="time">Данные обновлены {{ countTime }}</span>
            </div>

        </div>
        <TableActualTasks v-loading="loading"/>
    </div>
</template>

<script>
    import  planningApi  from '../../api/planningApi'
    import  TableActualTasks  from './TableActualTasks'
    export default {
        name: "PlanningActualTasks",
        components: {
            TableActualTasks
        },
        data() {
            return {
                loading: false,
            }
        },
        computed: {
            countTime: function() {
                return this.$store.getters['PlanningPage/getCountTime'];
            }
        },
        mounted() {
            this.getDataPhotos();
        },
        methods: {
            async getDataPhotos() {
                this.loading = true;
                const response = await planningApi.get();
                await this.$store.dispatch('PlanningPage/SET_DATA_PLANNING', response.data);
                //при обновлении таблицы отрисовываются первые 5 строк
                await this.$store.dispatch('PlanningPage/SET_COUNT_DATA_TABLE', [5, 1]);
                this.loading = false;
            },
            refreshTable() {
                this.getDataPhotos();
            }
        }
    }
</script>

<style scoped>
    .data-not {
        justify-content: center;
    }
    .icon-refresh {
        color: #67C23A;
        margin-right: 8px;
        cursor: pointer;
        font-size: large;
    }
    .icon-refresh:hover {
        opacity: .7;
        margin-right: 8px;
        cursor: pointer;
    }
    .row {
        display: flex;
        flex-direction: row;
    }
    .time {
        display: block;
    }
    .title-time {
        margin: 8px;
        font-size: 14px;
        justify-content: flex-end;
    }
</style>
