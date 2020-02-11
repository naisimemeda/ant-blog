<template>
    <div class="search">
        <a-row type="flex" justify="center">
            <a-col :span="4">
                <a-icon type="search"/>
            </a-col>
            <a-col :span="4">
                <a-icon type="bell"/>
            </a-col>
            <a-col :span="6">
                <a-avatar v-if="this.$store.state.auth"
                          :size="40" icon="user"
                          :src="user.avatar"/>
                <a-button v-else
                          :type="type === 'Login' ? 'primary' : ''"
                          @click="Login" shape="round">登陆
                </a-button>
            </a-col>
            <a-col :span="6">
                <a-button :type="type === 'Article' ? 'primary' : ''" @click="Login" shape="round">写文章</a-button>
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
            /**
             * @return {string}
             */
            type() {
                return this.$route.name
            },
            user() {
                return this.$store.state.user
            }
        },
        created() {
        },
        data() {
            return {
            }
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