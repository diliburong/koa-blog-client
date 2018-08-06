<template>
    <div class="page-index">
        <h2>Stutter</h2>
        <add-article></add-article>
    </div>
</template>

<script>
function setState(store) {}

export default {
    name: 'home',
    metaInfo: {
        title: 'home',
        titleTemplate: '%s - Stutter',
    },
    async asyncData({store, route}) {
        setState(store);
    }
};
</script>

<style lang="stylus" scoped>

.page-index
    display flex
    justify-content center
    align-items center
    flex-direction column

    h2
        font-size 46px
        font-weight 500
        margin-bottom 0

</style>
