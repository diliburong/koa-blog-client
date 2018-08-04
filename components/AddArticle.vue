<template>

    <div class="add-article">
        <router-link :to="text" class="link">+</router-link>
        
    </div>

</template>


<script>
export default {
    name: 'addArticle',
    props: {
        text: {
            type: String,
            default: '/create'
        }
    },
    data:function(){
        return {
            
        }
    }
    
};
</script>

<style lang="stylus" scoped>
.add-article
    position fixed
    bottom 4rem
    margin:0 auto;  
    left:0;  
    right:0; 
    width  50px
    height 50px

    .link
        display inline-flex;
        justify-content: center;
        height 100%
        width 100%
        border 2px solid #266894
        border-radius 50%
        font-size 45px
        line-height 45px

</style>