<template>
    <div style="margin: 0 auto">
        <a-card title="登陆" :bordered="false" class="login-card" :headStyle="headStyle" :bodyStyle="bodyStyle">
            <div class="content">
                <div class="form-group">
                    <a-input placeholder="请输入用户名" v-model="username" ref="userNameInput" size="large">
                        <a-icon slot="prefix" type="user"/>
                    </a-input>
                </div>
                <div class="form-group">
                    <a-input-password placeholder="请输入你的密码" :type="passwordType" v-model="password" ref="userNameInput"
                                      size="large">
                        <a-icon slot="prefix" type="paper-clip"/>
                    </a-input-password>
                </div>
                <div class="check">
                    <a-checkbox v-model="checked">是否保存</a-checkbox>
                    <router-link to="/" style="margin-left: auto;">
                        忘记密码?
                    </router-link>
                </div>
                <div>
                    <a-button type="primary" style="width: 372px; height: 40px" @click="Login">登陆</a-button>
                </div>
                <div class="form-group">
                    dasdasd
                </div>
            </div>
        </a-card>
    </div>
</template>

<script>
    import { getToken } from '@/api/auth'
    export default {
        name: 'Login',
        computed: {},
        created() {
        },
        data() {
            return {
                headStyle: {
                    textAlign: "center",
                },
                bodyStyle: {
                    width: 1000
                },
                username: '2514430140@qq.com',
                passwordType: 'password',
                password: '123456',
                checked: true,
                passwordIcon: 'eye-invisible',
            }
        }
        ,
        methods: {
            Login() {
                getToken({username: this.username, password: this.password}).then(res => {
                    let data = res.data.data
                    let token = data.token.token_type + ' ' + data.token.access_token
                    let refresh_token = data.token.refresh_token
                    let user = data.user
                    this.$store.dispatch('login', {token, refresh_token, user})
                })
            }
        }
    }
</script>

<style scoped>
    .content {
        display: flex;
        height: 270px;
        flex-flow: column;
        flex: 1;
    }

    .check {
        display: flex;
        line-height: 64px;
        height: 64px;
    }
</style>