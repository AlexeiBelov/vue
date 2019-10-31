<template>
    <div>
        <div v-if="watchBreadCrumbs">
            <div class="wrap">
                <router-link class="breadcrumb"
                             v-for="item in paths"
                             :key="item.name"
                             :to="{ path: `${item.name}` }">/ {{ item.value }}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BreadCrumbs",
        data() {
            return {
                paths: [],
                watchBreadCrumbs: false
            }
        },
        watch: {
            '$route' () {
                // обрабатываем изменение параметров маршрута
                this.createBreadCrumbs();
            }
        },
        created() {
            this.createBreadCrumbs();
        },
        methods: {
            createBreadCrumbs() {
                if (this.$route.matched.length > 1) {
                    this.watchBreadCrumbs = true;
                    this.paths = this.$route.matched.map( item => {
                        return { name: item.path, value: item.name};
                    });
                } else {
                    this.watchBreadCrumbs = false;
                }
            }
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none;
        font-size: 12px;
        margin: 4px 8px;
        color: #fff;
    }
    a:nth-child(1) {
        cursor: default;
    }
    .breadcrumb {
        margin-right: 8px;
    }
    .wrap {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        background-color: #909399;
    }
</style>
