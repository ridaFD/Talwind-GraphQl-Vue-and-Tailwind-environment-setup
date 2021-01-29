import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'
import Vue from 'vue';
import VueRouter from 'vue-router'
import './bootstrap'
import PostList from './PostList.vue';
import Post from './Post.vue';

window.Vue = Vue;
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'index',
        component: PostList
    },
    {
        path: '/post/:id',
        name: 'Post',
        component: Post
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

Vue.use(VueApollo)
const apolloClient = new ApolloClient({
    // You should use an absolute URL here
    uri: 'http://blog.test/graphql'
})
const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
})

const app = new Vue({
    el: '#app',
    apolloProvider,
    router
});
