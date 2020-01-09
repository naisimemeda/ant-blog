<template>
    <div class="search">
        <a-row type="flex" justify="center">
            <a-col :span="4">
                <a-icon type="search"/>
            </a-col>
            <a-col :span="4">
                <a-icon type="bell" />
            </a-col>
            <a-col :span="6">
                <a-button :type="Type == 'Login' ? 'primary' : ''" @click="Login" shape="round">登陆</a-button>
            </a-col>
            <a-col :span="8">
                <a-button :type="Type == 'Article' ? 'primary' : ''" @click="Login" shape="round">写文章</a-button>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    export default {
        name: 'TheEntry',
        mounted() {
        },
        computed: {
            Type() {
                return this.$route.name
            }
        },
        data() {
            return {}
        },
        methods: {
            Login() {
                this.$router.push({name: 'Login'})
            }
        }
    }
</script>
<style scoped>
    .logo-button {
        width: 120px;
        text-align: center;
    }
</style>