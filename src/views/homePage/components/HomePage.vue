<template>
  <div>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>

export default {
    name: 'HelloWorld',
    computed: {
        title: function() {
            return this.$store.getters.getTitleHelloWorld
        }
    }
}
</script>
