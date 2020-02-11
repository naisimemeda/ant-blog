<template>
    <div id="wrap">
        <a-layout>
            <a-layout-header class="layout-header">
                <TheHeader/>
            </a-layout-header>
            <a-layout class="container">
                <a-layout-content>
                    <router-view/>
                </a-layout-content>
            </a-layout>
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
<head>
<style>
</style>
</head>
