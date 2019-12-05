<template>
    <div>
        <GarlandNewYear/>
        <div class="text-wrap">
            <RunString :color="'#E6A23C'" :text="title" :width="'640px'" :text-size="'40px'"/>
        </div>
    </div>
</template>

<script>
  import GarlandNewYear from '../../../components/othersComponents/GarlandNewYear'
  import RunString from '../../../components/othersComponents/RunString'
  import { DATE } from '../../../utils/date'
  export default {
      name: 'HomePage',
      components: { GarlandNewYear, RunString },
      computed: {
          title: function() {
              return DATE.daysLeftNewYear('01/01/2020');
          }
      }
  }
</script>

<style scoped>
    .text-wrap {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>
