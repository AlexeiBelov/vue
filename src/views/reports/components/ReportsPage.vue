<template>
    <div class="column">
        <h2>{{ title }}</h2>
        <div class="wrap-content-chart">
            <div class="content-chart-properties">
                <canvas id="chartBars" width="400" height="400"></canvas>
            </div>
            <div class="content-chart-properties">
                <canvas id="pieChart" width="400" height="400"></canvas>
            </div>

            <div @click="refreshDataCost" class="content-chart-refresh">
                <i class="el-icon-refresh green pointer"></i>
                <span class="pointer">Обновить данные</span>
            </div>
            <div class="block date-properties">
                <el-date-picker
                        v-model="valueDate"
                        type="date"
                        placeholder="Выберите дату"
                        size="mini"
                        default-value="2010-10-01">
                </el-date-picker>
            </div>

        </div>
    </div>
</template>

<script>
    import  bitcoinApi  from '../../../api/bitcoinApi'
    import Chart from 'chart.js'

    export default {
        name: 'ReportsPage',
        data() {
            return {
                dataBit: [],
                valueDate: ''
            }
        },
        computed: {
            array: function() {
                return this.dataBit;
            },
            title: function() {
                return this.$store.getters['ReportsPage/getTitleReports'];
            }
        },
        mounted() {
            this.getDataCost();
        },
        methods: {
            async getDataCost() {
                const data = await bitcoinApi.get();
                this.dataBit = [data.bpi.EUR.rate_float, data.bpi.GBP.rate_float, data.bpi.USD.rate_float];
                await this.$store.dispatch('ReportsPage/SET_TITLE_REPORTS', data.time.updated);
                await this.createChart();
            },
            refreshDataCost() {
                this.getDataCost();
            },
            createChart() {
                let ctx = document.getElementById('chartBars').getContext('2d');
                let myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['EUR', 'GBP', 'USD'],
                        datasets: [{
                            label: 'Bitcoin price',
                            data: this.array,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });
                let ctx1 = document.getElementById('pieChart').getContext('2d');
                let pieChart = new Chart(ctx1, {
                    type: 'doughnut',
                    data: {
                        labels: ['EUR', 'GBP', 'USD'],
                        datasets: [{
                            data: this.array,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)'
                            ],
                            borderWidth: 1,
                            weight: 10,
                        }]
                    },
                    options: {
                        cutoutPercentage: 0,
                        rotation: -0.5 * Math.PI,
                        circumference: 2 * Math.PI,
                        animation : {
                            animateRotate: true,
                            animateScale: false
                        }
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .date-properties {
        margin: 0 0 0 24px;
    }
    .wrap-content-chart {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        justify-content: center;
    }
    .content-chart-properties {
        width: 400px;
        height: 400px;
    }
    .content-chart-refresh {
        height: 32px;
        line-height: 24px;
    }
    .pointer {
        cursor: pointer;
    }
    .green {
        color: #67C23A;
    }
</style>
