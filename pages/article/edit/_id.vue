<template>
  <div class="main-container">
    <div class="container create-container">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6" class="article-category-side">
          <div class="new-category-section">
            <div class="new-category-add"  @click="openCategory()">
              <i class="fa fa-plus"></i>
              <span>New Create</span>
            </div>
            <div class="new-category-form" >
              <transition name="slide-fade" mode="in-out">
                <div v-show="addShow">
                  <input type="text" placeholder="Enter the new Category Name" name="newCategoryName" v-model="newCategoryName">
                  <button class="button button-outline btn-small" id="btn-create" @click="createCategory">Create</button>
                  <button class="button button-clear btn-small" id="btn-cancel" @click="closeCategory()">Cancel</button>
                </div>
              </transition>
            </div>

            <div class="new-category-add hidden-sm-and-up" @click="openList()" >
              <i class="fa fa-tags"></i>
              <span>Open Category</span>
            </div>
              <ul class="category-list">
                <!-- <li id="1" class="category-item active">Vue</li> -->
                <li @click="choseCategory(item._id)" v-for="item in categories" :key="item._id" id="itme.id" class="category-item" 
                  v-bind:class="{ 'hidden-xs-only': isCategoryClose, 'active': item._id == categoryId}">
                  {{item.name}}
                  </li>
                <transition name="slide-fade" mode="in-out">
                  
                </transition>
              </ul>
            


          </div>

          <!-- <div class="grid-content bg-purple"></div> -->
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <!-- <div class="grid-content bg-purple-light"> -->
            <input class="title" id="intput-title" type="text" name="note_title" placeholder="Article Title" v-model="title">
            <!-- <input type="text" class="title" id="input-title" name="note_title" v-model="title" placeholder="Article Title"/> -->
            <markdown-editor :highlight="true" :configs="configs" v-model="content" ref="markdownEditor"></markdown-editor>

           <input type="button" value="Submit" @click="submitArticle">
          <!-- </div> -->
        </el-col>
      </el-row>
      
    </div>
  </div>
</template>

<script>
import markdownEditor from 'vue-simplemde/src/markdown-editor'
import 'font-awesome/css/font-awesome.min.css';
import 'element-ui/lib/theme-chalk/display.css';
import fetch from '../../../util/fetch';
import { Message } from 'element-ui'
// import 'highlight.js/styles/atom-one-light.css';
// import hljs from 'highlight.js'
// window.hljs = hljs;
import {mapState} from 'vuex';

function setState(store) {}

export default {
  name:'article-edit_id',
  components: {
    markdownEditor
  },
  metaInfo: {
    title: 'article',
    titleTemplate: '%s - Lavas',
  },
  async asyncData({store, route}) {
    await store.dispatch('articles/setArticleDetail', {id: route.params.id})
    await store.dispatch('category/setCategories', {});
    setState(store);
  },
  data() {
    return {
      configs: {
        autoDownloadFontAwesome: false,
        status: false,
        spellChecker: false,
      },
      show:true,
      content: '',
      title: '',
      categoryId: '',
      newCategoryName:'',
      addShow: false,
      isCategoryClose: true,
    }
  },

  middleware: ['login-client'],
  computed: {
    ...mapState('category', [
      'categories'
    ]),
    ...mapState('articles', [
      'article'
    ]),
    // content
  },
  created () {
    this.init()
  },

  methods: {
    init() {
      this.content = this.article.content;
      this.title = this.article.title;
      this.categoryId = this.article.category._id
    },

    choseCategory(categoryId) {
      this.categoryId = categoryId
      // Message({
      //   message: categoryId
      // })
    }, 

    openCategory() {
      
      this.addShow = true
    },
    closeCategory() {
     
      this.addShow = false
    },
    openList() {
      this.isCategoryClose = !this.isCategoryClose;
      console.log(this.isCategoryClose)
    },
    async submitArticle() {
      let data = {
        note_title: this.title,
        content: this.content,
        categoryId: this.categoryId
      }
      let url = `articles/${this.article._id}`;
      let result = await fetch.put(url, data);

      // Message({
      //   message: result.status
      // })

      if(result.status === 200) {
        Message({
          message: result.message
        })

        this.$router.push({ path: `/article/${this.article._id}` }) 
      }
    },

    async createCategory() {
      let newCategoryName = this.newCategoryName;
      let data = {
        newCategoryName
      }      

      Message({
        message:this.newCategoryName
      })
      let url = 'category/create';
      let result = await fetch.put(url,  {newCategoryName} );

      if(result.status != 200 ) {
        Message({
          message: result.message
        })
      } else if (result.status === 200) {
        Message({
          message: "创建成功"
        })
        this.$store.dispatch('category/setCategories', {});
      }
    }
  }
}
</script>


<style lang="stylus" scoped>
@import '~simplemde/dist/simplemde.min.css';

.el-col
  border-radius 4px
.bg-purple-dark
  background  #99a9bf
.bg-purple
  background  #d3dce6
.bg-purple-light
  background  #e5e9f2
.grid-content
  border-radius  4px
  min-height  36px

.title:focus
  border-color  #d1d1d1

.slide-fade-enter-active 
  transition: all .3s ease-out
.slide-fade-leave-active 
  transition: all .3s ease-out
.slide-fade-enter, .slide-fade-leave-to
  opacity: 0;


</style>
