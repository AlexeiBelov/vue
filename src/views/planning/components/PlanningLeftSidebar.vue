<template>
    <div>
        <el-menu default-active="2-1"
                 class="menu-vertical"
                 :collapse="isCollapse"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b">
            <el-menu-item index="1" @click="collapse">
                <i class="el-icon-right"></i>
                <span>Закрыть</span>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-s-claim"></i>
                    <span slot="title">Текущие задачи</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="2-1"
                                  @click="actualTasks">
                        <div class="menu-item-properties">
                            <span class="menu-item-text">Активные задачи </span>
                            <span class="menu-item-number">{{number}}</span>
                        </div>
                    </el-menu-item>
                    <el-menu-item index="2-2"
                                  class="menu-item">
                        <div class="menu-item-properties">
                            <span class="menu-item-text">Завершенные задачи</span>
                            <span class="menu-item-number">0</span>
                        </div>
                    </el-menu-item>
                    <el-menu-item index="2-3"
                                  class="menu-item">
                        <div class="menu-item-properties">
                            <span class="menu-item-text">Активные задачи подчиненных</span>
                            <span class="menu-item-number">0</span>
                        </div>
                    </el-menu-item>
                    <el-menu-item index="2-4"
                                  class="menu-item">
                        <div class="menu-item-properties">
                            <span class="menu-item-text">Завершенные задачи подчиненных</span>
                            <span class="menu-item-number">0</span>
                        </div></el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="3">
                <i class="el-icon-s-flag"></i>
                <span slot="title">Статус исполнения</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-tickets"></i>
                <span slot="title">Реестр документов</span>
            </el-menu-item>
            <el-menu-item index="5">
                <i class="el-icon-s-promotion"></i>
                <span slot="title">Запуск и остановка бизнес процесса</span>
            </el-menu-item>
            <el-menu-item index="6">
                <i class="el-icon-s-custom"></i>
                <span slot="title">Назначение ответственных</span>
            </el-menu-item>
            <el-menu-item index="7">
                <i class="el-icon-edit-outline"></i>
                <span slot="title">Настройка процесса</span>
            </el-menu-item>
            <el-menu-item index="8">
                <i class="el-icon-setting"></i>
                <span slot="title">Мониторинг процессов</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "PlanningLeftSidebarElementUI",
        data() {
            return {
                number: 5000
            };
        },
        computed: {
            isCollapse: function() {
                return this.$store.getters['PlanningPage/getIsCollapse'];//состояние переменной хранится в сторе
            }
        },
        methods: {
            actualTasks() {
                this.$router.push('/planning/planningActualTasks');
            },
            collapse() {
                //закрытие левого sidebar
                this.$store.dispatch('PlanningPage/SET_IS_COLLAPSE', !this.isCollapse);
            }
        }
    }
</script>

<style scoped>
    .el-submenu .el-menu-item {
        padding: 0 16px;
    }
    .menu-item-number {
        color:#F56C6C;
    }
    .menu-item-properties {
        display: flex;
        justify-content: space-between;
    }
    .menu-item-text {
        font-size: 13px!important;
    }
    .menu-vertical {
        height: calc(100vh - 57px);
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;
        text-align: left;
    }
    .menu-vertical:not(.el-menu--collapse) {
        width: 304px;
    }
</style>
