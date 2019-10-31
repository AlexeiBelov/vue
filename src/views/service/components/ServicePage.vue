<template>
    <div>
        <h2>{{ title }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'ServicePage',
        computed: {
            title: function() {
                return this.$store.getters.getTitleService;
            }
        }
    }
</script>

<style scoped>

</style>
