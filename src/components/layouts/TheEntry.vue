<template>
    <div class="search">
        <div class="width-80">
            <a-button shape="circle" icon="search"/>
        </div>
        <div class="width-120">
            <a-button :type="Type == 'Login' ? 'primary' : ''" @click="Login">登陆</a-button>
        </div>
        <div class="width-120">
            <a-button :type="Type == 'Article' ? 'primary' : ''" @click="Login">发布文章</a-button>
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