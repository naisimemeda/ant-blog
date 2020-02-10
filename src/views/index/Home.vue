<template>
    <a-layout>
        <a-layout class="tags-topic">
            <a-layout-header class="layout-header" style="height: 100%;">
                <Tags/>
            </a-layout-header>
            <a-layout>
                <a-layout-content>
                    <a-list itemLayout="horizontal" :dataSource="data">
                        <a-list-item slot="renderItem" slot-scope="item">
                            <a-list-item-meta
                                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            >
                                <a slot="title" href="https://www.antdv.com/">{{item.title}}</a>
                                <a-avatar
                                        slot="avatar"
                                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                />
                            </a-list-item-meta>
                        </a-list-item>
                    </a-list>
                </a-layout-content>
            </a-layout>
        </a-layout>
        <a-layout-sider class="sider" width="20%">Sider</a-layout-sider>
    </a-layout>
</template>
<script>
    import Tags from './Tags'

    const data = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },
    ];
    export default {
        name: 'Home',
        components: {
            Tags
        },
        data() {
            return {
                total: 0,
                pageSize: 20,
                data
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