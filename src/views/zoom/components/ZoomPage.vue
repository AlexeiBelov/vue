<template>
    <div class="wrap">
        <ImageZoom/>
    </div>
</template>

<script>
    import ImageZoom from '../../../components/othersComponents/ImageZoom'
    export default {
      name: 'ZoomPage',
        components: { ImageZoom },
      data() {
          return {

          };
      },
      mounted() {

      },
      computed: {

      },
      watch: {

      },
      methods: {

      }
  }
</script>

<style scoped>
    .wrap {
        margin: auto;
        width: 100%;
        height: calc(100vh - 56px);
        background-color: #e9e9eb;
    }
</style>
