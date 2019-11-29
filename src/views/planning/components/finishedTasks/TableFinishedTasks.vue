<template>
    <div>
        <h3 class="infinite-list-header">Бесконечный скролл</h3>
        <transition name="fade"
                    mode="out-in">
            <TableInfinityScroll :propsDataTable="dataTable" :tableHeaders="['name', 'id', 'url', 'web']"/>
        </transition>
    </div>
</template>

<script>
    import { strRequest } from '../../../../utils/workers/workerRequests';
    import { runWorker } from '../../../../utils/workers/worker';
    import TableInfinityScroll from '../../../../components/tables/TableInfinityScroll';
    export default {
        name: "TableFinishedTasks",
        components: { TableInfinityScroll },
        data () {
            return {
                dataTable: [], // массив для хранения всех данных таблицы
                resultRequest: null, // поле для worker
            }
        },
        watch: {
            resultRequest: function (e) {
                // console.log('resultRequest', e); // здесь результат runWorker
                this.dataTable = e.flat(2); // преобразует многомерный массив в одномерный на заданную максимальную глубину
            }
        },
        mounted() {
            runWorker(strRequest, this, 'resultRequest', ['https://jsonplaceholder.typicode.com/photos']);
        }
    }
</script>

<style scoped>

</style>
