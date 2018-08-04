import fetch from '../util/fetch';

const SET_CATEGORIES = 'setCategories';


export const state = () => ({
    categories: []
});

export const mutations = {
    [SET_CATEGORIES](state, { categories }) {
        state.categories = categories
    }
};


export const actions = {
    async setCategories({ commit }, params) {
        try {
            let url = 'categories';
            
            let result = await fetch({
                url:url,
                method: 'get'
            })

            console.log(result);
            let categories = result.categories;
            commit(SET_CATEGORIES, {
                categories
            })
        } catch (error) {
            console.log('error in setcategories');
            console.log(error);
        }
    }
};