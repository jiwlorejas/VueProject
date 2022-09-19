import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Dashboard from '../views/Dashboard.vue';
import AboutVuetify from '../views/AboutVuetify.vue'
import SimpleCalculator from '../views/SimpleCalculator.vue'
import StringManipulation from '../views/StringManipulation.vue'
import QuizView from '../views/QuizView.vue'
import HomeView from '../views/HomeView.vue'
import AboutMe from '../views/AboutMe.vue'
import AboutPage from '../views/AboutPage.vue'




const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/HomeView',
            name: 'HomeView',
            component: HomeView
        },

        {
            path: '/StringManip',
            name: 'StringManipulation',
            component: StringManipulation
        },

        {
            path: '/SimpleMath',
            name: 'SimpleCalculator',
            component: SimpleCalculator
        },

        {
            path: '/Vuetify',
            name: 'AboutVuetify',
            component: AboutVuetify
        },

        {
            path: '/AboutMe',
            name: 'AboutMe',
            component: AboutMe
        },

        {
            path: '/QuizView',
            name: 'QuizView',
            component: QuizView
        },

        {
            path: '/AboutPage',
            name: 'AboutPage',
            component: AboutPage
        },

        {
            path: '/login',
            name: 'login',
            component: Login
        },

        {
            path: '/register',
            name: 'Register',
            component: Register
        },

        {
            path: '/Dashboard',
            name: 'Dashboard',
            component: Dashboard
        },

    ]
})

export default router