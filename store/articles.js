import fetch from '../util/fetch';

const SET_ARTICLE_DETAIL = 'setArticleDetail';
const SET_ARTICLES = 'setArticles';

export const state = () => ({
    articles: [],
    article: {}
});

export const mutations = {
    [SET_ARTICLE_DETAIL](state, {article}) {
        state.article = article
    },

    [SET_ARTICLES](state, { articles }) {
        state.articles = articles
    }
};

export const actions = {
    async setArticleDetail({ commit }, params) {
        try {
            let url = `articles/${params.id}`;

            let result = await fetch({
                url:url,
                method: 'get',
            })

            let article = result.article;

            commit(SET_ARTICLE_DETAIL, {
                article
            })
        } catch (error) {
            console.log('error in setArticleDetail');
            console.log(error);
        }

       
    },
    
    async setArticles({ commit }, params) {
        if (this.state.articles.articles) {
            try {
                let url = `articles`;
                let result = await fetch({
                    url: url,
                    method:'get'
                })

                let articles = result.articles;
                commit(SET_ARTICLES, {
                    articles
                })
            }
            catch (error) {
                // TODO with error
                console.log('error in setArticles');
                console.log(error);
            }

        } else {
            console.log('123')
        }
    }
};
