<template>
    <a-layout>
        <a-layout class="tags-topic">
            <a-layout-header class="layout-header" style="height: 100%; margin-bottom: 30px">
                <Tags/>
            </a-layout-header>
            <a-layout>
                <a-layout-content>
                    <ArticleIndex />
                </a-layout-content>
            </a-layout>
        </a-layout>
        <a-layout-sider class="sider" width="20%">Sider</a-layout-sider>
    </a-layout>
</template>
<script>
    import ArticleIndex from '../article/index'

    import Tags from './Tags'

    export default {
        name: 'Home',
        components: {
            Tags,
            ArticleIndex
        },
        data() {
            return {
            }
        },
        methods: {},
    }
</script>

<style scoped>
    #components-layout-demo-basic {
        text-align: center;
    }
</style>