<template>
    <nav class="navigation">
        <section class="container">
            <router-link to="" class="navigation-title float-left">
                <h1 class="title">Stutter</h1>
            </router-link>
            <ul class="navigation-list float-leff">
                <li class="navigation-item">
                    <router-link :to="{path:'/home'}" active-class="active" class="navigation-link">Home</router-link>
                </li>
                <li class="navigation-item">
                    <router-link :to="{path:'/'}" exact active-class="active" class="navigation-link" >Article</router-link>
                </li>
                <li class="navigation-item">
                    <router-link :to="{path:'/about'}" active-class="active" class="navigation-link">About</router-link>
                </li>

            </ul>
            <ul class="navigation-list float-right">
                <template v-if="!login">
                    <li class="navigation-item-right">
                        <router-link :to="{path:'/login', activeClass:'active'}" class="navigation-link">Login</router-link>
                        
                    </li>
                </template>
                <template v-else>
                    <li class="navigation-item-right">
                        <div class="user" @mouseover="open=true" @mouseout="open=false" :class="{ 'open':open }">
                            <div class="dropdown">
                                <router-link class="avatar" to="/about">
                                    <img class="av" src="/static/img/avator.jpg" alt="" srcset="">
                                </router-link>
                            </div>
                            <ul class="dropdown-menu">
                                <li class="dropdown-menu-item">
                                    <span class="dropdown-itme-span" @click="logout()">Logout</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                </template>

            </ul>
        </section>
    </nav>  
</template>

<script>
import {mapState} from 'vuex';
export default {
    name: 'navTop',
    data:function(){
        return {
            open:false
        }
    },
    created () {
        console.log(this.login  )
    },
    computed: {
        ...mapState('auth', [
            'login'
        ])
    },
    methods: {
        logout() {
            this.$store.dispatch('auth/deleteToken', {});
        }
    }
};
</script>

<style lang="stylus" scoped>
.dropdown-itme-span
    cursor: pointer;
    color: #3a8bbb;
    text-decoration: none;
    background-color: transparent;
    display: block;
    padding: 15px 20px;
    line-height: 20px;
    white-space: nowrap;

</style>
