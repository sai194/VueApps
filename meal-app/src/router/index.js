import Vue from 'vue'
import Router from 'vue-router'
import Latest from '@/components/Latest'
import Random from '@/components/Random'
import Search from '@/components/Search'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VeeValidate from 'vee-validate';
import MealRow from '../components/MealRow'
import NavBar from '../components/NavBar'
import Filter from '../components/Filter'
import FilterRow from '../components/FilterRow'
Vue.component('meal-row', MealRow);
Vue.component('nav-bar', NavBar);
Vue.component('filter-row', FilterRow);
Vue.use(Router);
Vue.use(BootstrapVue);
Vue.use(VeeValidate);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'latest',
            component: Latest,
            meta: { title: 'Home' }
        },
        {
            path: '/random',
            name: 'random',
            component: Random,
            meta: { title: 'Random' }
        },
        {
            path: '/search',
            name: 'search',
            component: Search,
            meta: { title: 'Search' }
        },
        {
            path: '/search/:keyword',
            name: 'search-keyword',
            component: Search,
            meta: { title: 'Search' }
        },
        {
            path: '/search/:type/:keyword',
            name: 'filter-keyword',
            component: Filter,
            meta: { title: 'Filter' }
        }
    ]
})