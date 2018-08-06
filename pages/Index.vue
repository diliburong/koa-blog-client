<template>
    <div>
        <header class="header">
            <div class="container"></div>
        </header>
        <div class="container animation-container">
            <router-link tag="div" class="article-item" v-for="item in articles" :key="item._id":to="{
                    name: 'articleId',
                    params: {
                        id: item._id
                    }
                }">
                <div class="article-message">
                    <span class="data">{{item.createdTime}}  · </span>
                    <span class="category">{{item.category.name}}</span>
                </div>
                <h3 class="article-title">{{item.title}}</h3>
                <h5 class="article-summary">{{item.description}}</h5>
                <router-link class="read-btn" :to="{
                    name: 'articleId',
                    params: {
                        id: item._id
                    }
                }">READ</router-link>
                
            </router-link>

            <span v-if="!articles">no</span>
        </div>
        
        <add-article></add-article>
       
    </div>
</template>

<script>

import axios from 'axios';
import {mapState} from 'vuex';

function setState(store) {}

export default {
    name: 'index',
    metaInfo: {
        title: 'article',
        titleTemplate: '%s - Stutter',
        meta: [
            {name: 'keywords', content: 'blog 博客'},
            {name: 'description', content: 'stutter的博客'}
        ]
    },
    async asyncData({store, route}) {
        await store.dispatch('articles/setArticles', {});
        await store.dispatch('category/setCategories', {});
        setState(store);
    },

    computed: {
        ...mapState('articles', [
            'articles'
        ])
    },
    created () {
        
    }
};
</script>

<style lang="stylus" scoped>
.animation-container
    padding-bottom: 7.5rem;
    padding-top: 7.5rem;
.article-item
    cursor pointer

</style>
