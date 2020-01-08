<template>
    <div class="row-flex">
        <Tags />
    </div>
</template>
<script>
    import Tags from './Tags'
    export default {
        name: 'Home',
        components: {
            Tags
        },
        data() {
            return {
                total: 0,
                pageSize: 20,
            }
        },
        methods: {
        },
    }
</script>