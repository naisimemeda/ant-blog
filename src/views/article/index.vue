<template>
    <a-list itemLayout="vertical" size="large" :pagination="pagination" :dataSource="listData">
        <div slot="renderItem" slot-scope="item" key="item.title"
             style="margin-bottom: 15px;background-color: #ffffff;padding: 20px">
            <a-list-item>
                <template slot="actions">
                    <span>
                      <a-icon type="fire" style="margin-right: 8px"/> {{ item.hot }}
                    </span>
                    <span>
                      <a-icon type="eye" style="margin-right: 8px"/>{{ item.view_count }}
                    </span>
                    <span>
                      <a-icon type="message" style="margin-right: 8px"/> {{ item.reply_count }}
                    </span>
                </template>
                <a-list-item-meta :description="item.body">
                    <a-avatar slot="avatar" :size="80" icon="user" :src="item.user.avatar"/>
                    <a slot="title">{{item.title}}</a>
                </a-list-item-meta>
                <div>
                    <a-row>
                        <a-col :span="12">{{item.user.name}}</a-col>
                        <a-col :span="12">
                            <a-popover placement="topLeft">
                                <template slot="content">
                                    <span>{{item.created_at}}</span>
                                </template>
                                <span class="create_time">
                                    {{item.diff}}
                                </span>
                            </a-popover>
                        </a-col>
                    </a-row>
                </div>
            </a-list-item>
        </div>
        <div slot="footer"><b>ant design vue</b> footer part</div>
    </a-list>
</template>
<script>
    import {ArticleList} from '@/api/article'

    export default {
        name: 'ArticleIndex',
        data() {
            return {
                listData: [{
                    user: {},
                }],
                pagination: {
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 16,
                }
            };
        },
        created() {
            this.list()
        },
        methods: {
            list() {
                ArticleList().then(res => {
                    let data = res.data.data
                    this.listData = data.article.data
                })
            }
        }
    };
</script>

<style scoped>
    .create_time {
        float: right;
        margin-right: 14px;
        color: rgba(0, 0, 0, 0.25);
        font-style: normal;
    }
</style>