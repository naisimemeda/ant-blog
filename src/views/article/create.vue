<template>
    <div style="margin-top: 20px;height: 100%">
        <a-row style="height: 90%" :gutter="{ xs: 8, sm: 16, md: 24}">
            <a-col :span="16" :offset="1">
                <froala id="edit" :tag="'textarea'" :config="config" v-model="article.content"/>
            </a-col>

            <a-col :span="5" :offset="1" class="article-title">
                    <a-row type="flex" justify="start"  align="middle" style="flex-flow: column; height: 100%">
                        <a-col :span="1" class="article-form-group">
                            <a-select size="large" v-model="article.category_id" style="width: 100%;" placeholder="请选择文章分类">
                                <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                                    {{(i + 9).toString(36) + i}}
                                </a-select-option>
                            </a-select>
                        </a-col>
                        <a-col :span="1"  class="article-form-group">
                            <a-input placeholder="请输入标题" v-model="article.title" style="height: 50px" />
                         </a-col>
                        <a-col :span="1" class="article-form-group">
                            <a-select v-model="article.tags"
                                    mode="tags"
                                    size="large"
                                    placeholder="标签"
                                    style="width: 100%;"
                            >
                                <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                                    {{(i + 9).toString(36) + i}}
                                </a-select-option>
                            </a-select>
                        </a-col>
                        <a-col :span="1" class="article-form-group">
                            状态:
                              <a-switch defaultChecked  v-model="article.status" style="margin-left: 20px"/>
                        </a-col>
                        <a-col :span="1" class="article-form-group">
                            <a-button type="primary" style="width: 100%;height: 50px" @click="modal = true">
                                查看当前富文本效果
                            </a-button>
                        </a-col>
                        <a-col :span="1" class="article-form-group">
                            <a-button type="primary" style="width: 100%;height: 50px">
                                Loading
                            </a-button>
                        </a-col>
                    </a-row>
            </a-col>
            <a-col :span="1" />
        </a-row>
        <a-modal v-model="modal"
                 style="top: 20px;"
                 footer="" width="1000px">
            <froalaView v-model="article.content" />
        </a-modal>
    </div>

</template>
<script>
    export default {
        name: 'ArticleCrate',
        created() {
            console.log(1323)
        },
        data() {
            return {
                modal: false,
                config: {
                    language: 'zh_cn',
                    height: 500,
                    placeholderText: '请输入文章内容',
                    imageUploadParam: 'image',
                    imageUploadParams: {
                        type: 'image'
                    },
                    fontSizeDefaultSelection: '14',
                    videoUploadParam: 'video',
                    fileUploadParam: 'file',
                    imageUploadURL: "http://www.blog.test/api/storage/upload",
                    videoUploadURL: "http://www.blog.test/api/storage/upload",
                    fileUploadURL: "http://www.blog.test/api/storage/upload",
                    requestHeaders: {
                        Authorization: this.$store.state.token
                    },
                },
                model: '',
                article: {
                    title: '',
                    content: '',
                    status: true,
                    tags: []
                }
            }
        },
        mounted() {
        },
        methods: {
        }
    }
</script>
<style >
    .fr-wrapper div:first-child {
        position: absolute;
        top: -10000px;
        opacity: 0;
    }

    .fr-element {
        width: 100%;
        position: absolute;
        top: 0;
    }

    .custom-class {
    }

    .fr-placeholder {
        margin-top: 0 !important;
    }

    .article-title {
        background-color: #ffffff;
        height: 470px;
    }

    .article-form-group {
        margin-top: 30px;
        width: 90%;
    }
</style>