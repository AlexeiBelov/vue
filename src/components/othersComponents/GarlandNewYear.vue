<template>
    <div id="garland" class="garland">
        <div id="nums_1">3</div>
    </div>
</template>

<script>
    export default {
        name: "GarlandNewYear",
        data() {
            return {
                intervalID: null
            }
        },
        mounted() {
            let self = this;
            this.intervalID = setInterval( function () {
                self.garland()
            }, 1500)
        },
        beforeDestroy() {
            this.stopGarland();
        },
        methods: {
            garland() {
                let nums = document.getElementById('nums_1').innerHTML
                if(nums === '1') {document.getElementById('garland').className='gir_1'; document.getElementById('nums_1').innerHTML='2'}
                if(nums === '2') {document.getElementById('garland').className='gir_2'; document.getElementById('nums_1').innerHTML='3'}
                if(nums === '3') {document.getElementById('garland').className='gir_3'; document.getElementById('nums_1').innerHTML='1'}
            },
            stopGarland() {
                clearInterval(this.intervalID);
            }
        }
    }
</script>

<style scoped>
    #garland {
        position: fixed;
        top: 42px;
        left: 0;
        /*background-image: url('http://lh5.googleusercontent.com/-obNunPiVVd4/VJOuk2f29_I/AAAAAAAAE3Y/SOoFIrFTTkk/s800/gerljanda1.png');*/
        background-image: url('../../assets/images/gerljanda1.png');
        height: 36px;
        width: 100%;
        overflow: hidden;
        z-index: 99
    }
    #nums_1 {
        padding: 100px;
    }
    .gir_1 {
        background-position: 0 0;
    }
    .gir_2 {
        background-position: 0 -36px;
    }
    .gir_3 {
        background-position: 0 -72px;
    }
</style>
