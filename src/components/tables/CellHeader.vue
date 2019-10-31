<template>
    <div>
        <el-popover
                placement="left-end"
                width="410"
                :title="name"
                :id="index"
                v-model="value">
            <el-col type="flex" style="width: 100%; height: 240px; overflow-y: auto;">
            ----------------------------------------
            </el-col>
        </el-popover>
        <svg version="1.1"
             viewBox="0 0 12 13"
             class="svg-icon svg-fill filter"
             data-id="filter"
             @click="filter(item)"
             style="width: 13px; height: 13px;">
            <defs></defs>
            <path fill="#909399" d="M3.636 12.986V6.551L.582 4.144A1.517 1.517 0 0 1 0 2.95V1.527A1.535 1.535 0 0 1 1.54 0h8.92A1.535 1.535 0 0 1 12 1.527V2.95a1.517 1.517 0 0 1-.578 1.193L8.364 6.552v3.173zM2 2.706L5.636 5.57v3.595l.728-.502V5.57L10 2.706v-.692H2z">
            </path>
        </svg>
    </div>
</template>

<script>
    export default {
        name: "cellHeader",
        props: [ value ],
        data() {
            return {
            }
        },
        created() {
            //console.log(this.value);
        }
    }
</script>

<style scoped>

</style>
