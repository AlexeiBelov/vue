<template>
    <div>
        <div class="infinite-list-header">Бесконечный скролл</div>
        <div style="height: calc(100vh - 240px); overflow: auto;" v-infinite-scroll="load">
            <div v-for="i in count" class="infinite-list-item">{{ i }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TableFinishedTasks",
        data () {
            return {
                count: 0
            }
        },
        methods: {
            load () {
                this.count += 20
            }
        }
    }
</script>

<style scoped>
    .infinite-list-header {
        height: 40px;
        text-align: center;
        line-height: 38px;
    }
    .infinite-list-item {
        height: 32px;
        background-color: lightblue;
        margin-bottom: 2px;
        line-height: 32px;
    }
</style>
