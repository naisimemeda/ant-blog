<template>
    <div class="search">
        <div class="header-icon">
            <a-icon type="search"/>
        </div>
        <div class="header-icon">
            <a-icon type="bell" />
        </div>
        <div class="logo-button">
            <a-button :type="Type == 'Login' ? 'primary' : ''" @click="Login" shape="round">登陆</a-button>
        </div>
        <div class="logo-button">
            <a-button :type="Type == 'Article' ? 'primary' : ''" @click="Login" shape="round">写文章</a-button>
        </div>
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