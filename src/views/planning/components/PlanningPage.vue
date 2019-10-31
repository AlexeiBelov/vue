<template>
    <div class="row">
        <PlanningLeftSidebar/>
        <div class="column content"
             @click="clickContent">
            <BreadCrumbs/>
            <transition name="fade"
                        mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import PlanningLeftSidebar from './PlanningLeftSidebar.vue'
    import BreadCrumbs from '../../../components/breadCrumbs/components/BreadCrumbs.vue'

    export default {
        name: "PlanningPage",
        components: { PlanningLeftSidebar, BreadCrumbs },
        data() {
            return {
                loading: false
            }
        },
        computed: {
            countTime: function() {
                return this.$store.getters['PlanningPage/getCountTime'];
            }
        },
        methods: {
            clickContent() {
                let check = this.$store.getters['PlanningPage/getIsCollapse'];
                if(check === false) {
                    this.$store.dispatch('PlanningPage/SET_IS_COLLAPSE', !check);
                }
            }
        }
    }
</script>

<style scoped>
    .column {
        display: flex;
        flex-direction: column;
    }
    .content {
        height: calc(100vh - 56px);
        width: 100%;
    }
    .row {
        display: flex;
        flex-direction: row;
    }
    /*не удалять, используется*/
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .3s;
    }
    .fade-enter,
    .fade-leave-to
    {
        opacity: 0;
    }
</style>
