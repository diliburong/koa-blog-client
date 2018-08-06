<template>

    <div class="main-container">
        <form action="" class="login-form" onsubmit="return false;">
            <h2>Login</h2>
            <!-- <input type="hidden" name="_csrf" value=csrf/> -->
            <input type="text" name="username" v-model="username" placeholder="User Name">
            <input type="password" name="password" v-model="password" placeholder="Password" @keyup.enter="login">
            <button class="login-btn" @click="login">Login</button>
        </form>
    </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css';
import { Message } from 'element-ui'
function setState(store) {}


export default {
    name: 'login',
    metaInfo: {
        title: 'login',
        titleTemplate: '%s - stutter',
    },
    async asyncData({store, route}) {
        setState(store);
    },
    data () {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        async login() {
            
            let info = {
                username: this.username,
                password: this.password
            }

            let result = await this.$store.dispatch('auth/createToken', info)
            if(result.status === 200) {
               this.$router.push({ path: '/' }) 
            } else {
                Message({
                    message:result.message,
                    duration: 3 * 500
                })
            }
        }
    }
};
</script>

<style lang="stylus" scoped>
    h2
        text-align left 
    

</style>
