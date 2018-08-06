<template>
    <div class="main-container">
        <div class="container">
             <!-- <mu-button color="primary">Primary</mu-button> -->
            <div class="title-wrapper">
                <h1 class="article-detail-title">{{article.title}}</h1>
                <span class="article-author">{{article.author}}</span>
                <p class="category">{{article.category.name}}</p>
            </div>
            <div class="article-content">
                <div class="article-markdown-content">
                    <vue-markdown>{{article.content}}</vue-markdown>
                </div>
            </div>
            <el-row :gutter="10"  v-if="login">
                <el-col :span="6":offset="18">
                    <router-link class="article-author" tag="span":to="{
                        name: 'articleEditId',
                        params:{
                            id: article._id
                        }
                    }">Edit</router-link>
                    <span class="article-author delete-btn" @click="openAlert=true">Delete</span>
                </el-col>
            </el-row>

        </div>
        <mu-dialog title="Dialog" width="600" max-width="80%" :esc-press-close="false" :overlay-close="false" :open.sync="openAlert">
            Are you sure to delete this article?
            <mu-button slot="actions" flat color="primary" @click="openAlert=false">Cancel</mu-button>
            <mu-button slot="actions" flat color="primary" @click="deleteArticle">Confirm</mu-button>
        </mu-dialog>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import VueMarkdown from 'vue-markdown';
// import 'highlight.js/styles/googlecode.css';
import 'highlight.js/styles/atom-one-light.css';
import hljs from 'highlight.js';
import { MessageBox } from 'element-ui';
import { Message } from 'element-ui';
import fetch from '../../util/fetch';


function setState(store) {}

hljs.highlightCode = function () { //自定义highlightCode方法，将只执行一次的逻辑去掉
    let blocks = document.querySelectorAll('pre code');
    [].forEach.call(blocks, hljs.highlightBlock);
};

export default {
    name: 'article-_id',
    components: {
        VueMarkdown
    },
    metaInfo: {
        title: 'article',
        titleTemplate: '%s - Stutter',
    },
    async asyncData({store, route}) {
        await store.dispatch('articles/setArticleDetail', {id: route.params.id})
        setState(store);
    },
    mounted() {
        hljs.highlightCode()
    },

    // directives: {
    //     highlight: {
    //         function(el) {
    //             let blocks = el.querySelectorAll('pre code');
    //             blocks.forEach((block) => {
    //             hljs.highlightBlock(block)
    //             })
    //         }
    //     }
    // },
    computed: {
        ...mapState('articles', [
            'article'
        ]),
        ...mapState('auth', [
            'login'
        ])
    },
    data () {
        return {
            content:'',
            openAlert:false,
        }
    },
    methods:{
        async deleteArticle() {

            let url  = `articles/${this.article._id}`;
            let result = await fetch.delete(url);
            this.openAlert = false;
            if (result.status === 200) {
                Message({
                    message:result.message
                })
               this.$router.push({ path: '/' })       
            } else {


            }


            

            // MessageBox.confirm('Delete','Confirm', {
            //     confirmButtonText:'Confirm',
            //     cancelButtonText: 'Cancel',
            //     type: 'warning',
            //     center: true
            // }).then(()=>{

            //     let url = `articles/${this.article._id}`

            //     Message({
            //         message: 'Deleted Successfully!',
            //         type: 'success',
            //         duration: 5 * 1000
            //     })

            // }).catch(() => {
            //     Message({
            //         message: 'Cancel',
            //         type: 'info',
            //         duration: 5 * 1000
            //     })
            // })

        }
    }, 
    beforeCreate () {

    },
    created() {



    },

};
</script>

<style lang="stylus" scoped>
.delete-btn
    border: 2px solid rgba(187, 58, 122, 0.4);
    color: #bb3a7f;

</style>
