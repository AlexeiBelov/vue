<template>
    <div class="column">
        <h2>{{ title }}</h2>
        <div class="wrap-content-chart">
            <!-- Левая колонка -->
            <div class="column center">
                <!-- Соотношение цен -->
                <div class="content-chart-properties-bar">
                    <div class="content-chart-header">
                        <div>Соотношение цен</div>
                        <i @click="createDataCostBar"
                           class="el-icon-refresh green pointer"
                           style="margin: 8px;"></i>
                    </div>

                    <div class="content-chart-body border"
                         v-loading="loading">
                        <canvas id="chartBars" width="800" height="150"></canvas>
                    </div>
                </div>
                <!-- График -->
                <div class="content-chart-properties-bar">
                    <div class="content-chart-header">
                        <div>График</div>
                        <i @click="createChartLine"
                           class="el-icon-refresh green pointer"
                           style="margin: 8px;"></i>
                    </div>

                    <div class="content-chart-body border">
                        <canvas id="chartLine" width="800" height="150"></canvas>
                    </div>
                </div>
                <!-- Данные MOEX -->
                <div class="content-chart-properties-bar">
                    <div class="content-chart-header">
                        <div>Данные MOEX</div>
                        <i @click="createMOEX"
                           class="el-icon-refresh green pointer"
                           style="margin: 8px;"></i>
                    </div>

                    <div class="content-chart-body border">
                        <div class="row" style="margin-bottom: 16px;">
                            <div  class="header-cell">Company</div>
                            <div  class="header-cell">Title</div>
                            <div  class="header-cell">Start</div>
                            <div  class="header-cell">Finish</div>
                            <div  class="header-cell">Code</div>
                        </div>
                        <div  v-loading="loadingMOEX">
                            <div v-for="item in moex"
                                 class="row"
                                 style="margin: 4px;">
                                <div  style="width: 20%; text-align: start;">{{changeValue(item[2])}}</div>
                                <div  style="width: 20%; text-align: center;">{{changeValue(item[3])}}</div>
                                <div  style="width: 20%; text-align: center;">{{changeValue(item[6])}}</div>
                                <div  style="width: 20%; text-align: center;">{{changeValue(item[7])}}</div>
                                <div  style="width: 20%; text-align: center;">{{changeValue(item[5])}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Правая колонка -->
            <div class="column">
                <div class="content-chart-properties-pie">
                    <div class="content-chart-header">
                        <div>Случайные данные</div>
                        <i @click="refreshDataCostPie"
                           class="el-icon-refresh green pointer"
                           style="margin: 8px;"></i>
                    </div>
                    <div class="content-chart-body">
                        <canvas id="pieChart" width="400" height="250"></canvas>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import  bitcoinApi  from '../../../api/bitcoinApi'
    import  moexApi  from '../../../api/moexApi'
    import Chart from 'chart.js'

    export default {
        name: 'ReportsPage',
        data() {
            return {
                dataBit: [7, 2, 3, 4, 7, 3, 2, 4, 2, 5, 7, 3], // отображается при падении сети
                dataMoex: ['--------','--------','--------','--------','--------','--------'], // отображается при падении сети
                loading: false,
                loadingMOEX: false,
                randomNumbers: [],
                valueDate: ''
            }
        },
        computed: {
            array: function() {
                return this.dataBit;
            },
            title: function() {
                return this.$store.getters['ReportsPage/getTitleReports'];
            },
            moex: function() {
                return this.dataMoex;
            }
        },
        mounted() {
            this.getDataCost();
            this.createChartPie();
            this.createChartLine();
        },
        methods: {
            async getDataCost() {
                await this.createDataCostBar();
                await this.createChartBar();
                await this.createMOEX();
            },
            async createDataCostBar() {
                this.loading = true;
                const data = await bitcoinApi.get();
                if(data) {
                    this.loading = false;
                    this.dataBit = [data.bpi.EUR.rate_float, data.bpi.GBP.rate_float, data.bpi.USD.rate_float,data.bpi.EUR.rate_float, data.bpi.GBP.rate_float, data.bpi.USD.rate_float,data.bpi.EUR.rate_float, data.bpi.GBP.rate_float, data.bpi.USD.rate_float,data.bpi.EUR.rate_float, data.bpi.GBP.rate_float, data.bpi.USD.rate_float];
                    await this.$store.dispatch('ReportsPage/SET_TITLE_REPORTS', data.time.updated);
                } else {
                    this.loading = false;
                }
            },
            refreshDataCostPie() {
                this.createChartPie();
            },
            async createMOEX() {
                this.loadingMOEX = true;
                const dataMOEX = await moexApi.getMOEXX();
                this.dataMoex.length = 0;
                if(dataMOEX) {
                    this.loadingMOEX = false;
                    for(let i = 0; i < 5; i++) {
                        this.dataMoex.push(dataMOEX.history.data[this.getRandomInt(0, 100)]);
                    }
                } else {
                    this.loadingMOEX = false;
                    this.dataMoex= ['--------','--------','--------','--------','--------','--------'];
                }
            },
            changeValue(value) {
                if(value === null) {
                    return '-'
                } else {
                     return value;
                }
            },
            createChartBar() {
                let ctx = document.getElementById('chartBars').getContext('2d');
                let myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['EUR', 'GBP', 'USD', 'EUR', 'GBP', 'USD', 'EUR', 'GBP', 'USD', 'EUR', 'GBP', 'USD', ],
                        datasets: [{
                            label: 'Bitcoin price',
                            data: this.array,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',

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
            },
            createChartPie() {
                let ctx = document.getElementById('pieChart').getContext('2d');
                let pieChart = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: ['name', 'name', 'name'],
                        datasets: [{
                            data: [5, 3, 4],
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
            },
            createChartLine() {
                let ctx = document.getElementById('chartLine').getContext('2d');
                var dataFirst = {
                    label: "Car A - Speed (mph)",
                    data: [0, 59, 75, 20, 20, 55, 40],
                    lineTension: 0.3,
                    borderColor: '#ffa1b5',
                    backgroundColor: 'transparent'
                };

                var dataSecond = {
                    label: "Car B - Speed (mph)",
                    data: [20, 15, 60, 60, 65, 30, 70],
                    borderColor: '#86c7f3',
                    backgroundColor: 'transparent'
                };

                var speedData = {
                    labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
                    datasets: [dataFirst, dataSecond]
                };


                var lineChart = new Chart(ctx, {
                    type: 'line',
                    data: speedData
                });
            },
            getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
        }
    }
</script>

<style scoped>
    .border {
        border: 1px solid #ebebeb;
    }
    .center {
        justify-content: center;
    }
    .column {
        display: flex;
        flex-direction: column;
    }
    .content-chart-body {
        margin: 16px 8px 8px 8px;
    }
    .content-chart-header {
        height: 32px;
        text-align: start;
        line-height: 32px;
        padding-left: 8px;
        font-size: 14px;
        opacity: .7;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: #f4f4f5;
        border-bottom: 1px solid #ebebeb;
    }
    .content-chart-properties-bar {
        width: 832px;
        height: 240px;
        border: 1px solid #ebebeb;
        border-radius: 4px;
        margin: 8px;
        display: flex;
        flex-direction: column;
        background-color: #fff;
    }
    .content-chart-properties-bar:hover {
        box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
    }
    .content-chart-properties-pie {
        width: 520px;
        height: 384px;
        border: 1px solid #ebebeb;
        border-radius: 4px;
        margin: 8px;
        display: flex;
        flex-direction: column;
        background-color: #fff;
    }
    .content-chart-properties-pie:hover {
        box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
    }
    .green {
        color: #67C23A;
    }
    .header-cell {
        width: 20%;
        text-align: center;
        font-weight: 600;
    }
    .pointer {
        cursor: pointer;
    }
    .row {
        display: flex;
        flex-direction: row;
    }
    .wrap-content-chart {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin: 16px;
        border: 1px solid #ebebeb;
        border-radius: 4px;
        height: calc(100vh - 148px);
        background-color: #e9e9eb;
        overflow: auto;
    }
</style>
