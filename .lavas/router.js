import Vue from 'vue';
import Router from 'vue-router';

    
import _2243cf1a5b5a1b7cb5e6d6af47ece8b7 from '@/pages/About.vue';
    

    
import _9d49a922ebc8a6d77ca82c0a74289b98 from '@/pages/Appshell.vue';
    

    
import _4981029d4ca92a3ffe2016b33af9369e from '@/pages/Article.vue';
    

    
import _591730067551fb609167d2a1634a07fc from '@/pages/article/_id.vue';
    

    
import _ef91d8244ac02dac8e714f275e50f312 from '@/pages/article/edit/_id.vue';
    

    
import _b01b318a9354b93d7b2bffa4d41df98e from '@/pages/Create.vue';
    

    
import _d2462dcf0c7beccd286c658e08187914 from '@/pages/Error.vue';
    

    
import _fa552d893034483b4043b5abfffbef71 from '@/pages/Home.vue';
    

    
import _67830448037326425509e44bce7632b7 from '@/pages/Index.vue';
    

    
import _1c344d083993d726b6efda48972bfdff from '@/pages/Login.vue';
    


let routes = [
    {
        "path": "/about",
        "component": _2243cf1a5b5a1b7cb5e6d6af47ece8b7,
        "meta": {},
        "name": "about"
    },
    {
        "path": "/appshell",
        "component": _9d49a922ebc8a6d77ca82c0a74289b98,
        "meta": {},
        "name": "appshell"
    },
    {
        "path": "/article",
        "component": _4981029d4ca92a3ffe2016b33af9369e,
        "meta": {},
        "name": "article",
        "children": [
            {
                "path": ":id",
                "component": _591730067551fb609167d2a1634a07fc,
                "meta": {},
                "name": "articleId"
            },
            {
                "path": "edit/:id",
                "component": _ef91d8244ac02dac8e714f275e50f312,
                "meta": {},
                "name": "articleEditId"
            }
        ]
    },
    {
        "path": "/create",
        "component": _b01b318a9354b93d7b2bffa4d41df98e,
        "meta": {},
        "name": "create"
    },
    {
        "path": "/home",
        "component": _fa552d893034483b4043b5abfffbef71,
        "meta": {},
        "name": "home"
    },
    {
        "path": "/",
        "component": _67830448037326425509e44bce7632b7,
        "meta": {},
        "name": "index"
    },
    {
        "path": "/login",
        "component": _1c344d083993d726b6efda48972bfdff,
        "meta": {},
        "name": "login"
    },
    {
        "path": "/error",
        "component": _d2462dcf0c7beccd286c658e08187914,
        "meta": {},
        "name": "error",
        "alias": "*"
    }
];

Vue.use(Router);




const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition;
    } else {
        const position = {};
        // scroll to anchor by returning the selector
        if (to.hash) {
            position.selector = to.hash;
        }
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(m => m.meta.scrollToTop)) {
            // cords will be used if no selector is provided,
            // or if the selector didn't match any element.
            position.x = 0
            position.y = 0
        }
        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return position;
    }
};



export const keepAlivePages = routes.filter(route => route.keepAlive || route.meta.keepAlive)
                            .map(route => route.name);

export function createRouter() {
    let router = new Router({
        mode: 'history',
        base: '/',
        scrollBehavior,
        routes
    });



    

    router.beforeEach((to, from, next) => {
        if (router.app.$store) {
            if (router.app.$store.state.pageTransition.enable) {
                
                let effect = 'fade';
                
                router.app.$store.commit('pageTransition/setType', 'fade');
                router.app.$store.commit('pageTransition/setEffect', effect);
            }
        }
        next();
    });


    return router;
}
