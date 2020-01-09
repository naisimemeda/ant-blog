<template>
    <div id="wrap">
        <a-layout>
            <TheHeader/>
            <div class="container">
                <router-view/>
            </div>
        </a-layout>
    </div>
</template>

<script>
    import TheHeader from '@/components/layouts/TheHeader'

    export default {
        name: 'App',
        components: {
            TheHeader
        }
    }
</script>

<style>
    @import "./styles/main.scss";
    @import "./styles/extra.scss";
</style>
