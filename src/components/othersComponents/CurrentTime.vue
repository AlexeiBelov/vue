<template>
    <div>
        <div id="currentTime"
             class="currentTime">
        </div>
    </div>
</template>

<script>
    import { DATE } from '../../utils/date'
    export default {
        name: "CurrentTime",
        data() {
            return {
                timeIntervalID: null
            }
        },
        mounted() {
            this.showRunTime();
        },
        beforeDestroy() {
            clearInterval(this.timeIntervalID);
        },
        methods: {
            showRunTime() {
                let time = this.$el.querySelector('#currentTime');
                this.timeIntervalID = setInterval(function() {
                    time.innerHTML = DATE.runDate();
                });
            },
        }
    }
</script>

<style scoped>
    .currentTime {
        color: #fff;
        margin-right: 16px;
    }
</style>
