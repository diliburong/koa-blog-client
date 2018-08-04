import axios from 'axios';
import fetch from '../util/fetch';


const CREATE_TOKEN = 'createToken';
const DELETE_TOKEN = 'deleteToken';
const SET_LOGIN = 'setLogin';
const SET_LOGOUT = 'setLogout';

export const state = () => ({
    login: (sessionStorage.getItem('token') == "" || sessionStorage.getItem('token') == null)? false: true,
    token: sessionStorage.getItem('token')
});

export const mutations = {
    [CREATE_TOKEN](state, {token}) {
        state.token = token;
        sessionStorage.setItem('token', token);
    },

    [DELETE_TOKEN](state) {
        state.token = null;
        sessionStorage.setItem('token', '');
        state.login = false
        console.log(state.token);
    },

    [SET_LOGIN](state, login) {
        state.login = login;
    }
}


export const actions = {
    async createToken({commit}, {username, password}) {
        try {
            let url = `logintoken`;

            let result = await fetch({
                url: url,
                method: 'post',
                data:{
                    username,
                    password
                }
            })
            // let result = await fetch.post

            if (result.status === 200 ) {
                let token = result.token;
                commit(CREATE_TOKEN, {
                    token
                });
                commit(SET_LOGIN, true);
            } else {
                commit(DELETE_TOKEN);
            }

            return result;
        } catch (error) {
            console.log('error in createToken');
            console.log(error);
        }
    },

    async deleteToken({ commit }, {} ) {
        commit(DELETE_TOKEN);
    }
}


