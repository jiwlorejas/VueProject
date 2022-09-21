import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Dashboard from '../views/DashboardView.vue';
import AboutVuetify from '../views/AboutVuetify.vue'
import SimpleCalculator from '../views/SimpleCalculator.vue'
import StringManipulation from '../views/StringManipulation.vue'
import QuizView from '../views/QuizView.vue'
import Scores from '../views/Scores.vue';
import HomeView from '../views/HomeView.vue'
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
            path: '/QuizView',
            name: 'QuizView',
            component: QuizView
        },

        {
            path: '/Scores',
            name: 'Scores',
            component: Scores
        },

        {
            path: '/AboutPage',
            name: 'AboutPage',
            component: AboutPage
        },

        {
            path: '/',
            name: 'login',
            component: Login
        },

        {
            path: '/register',
            name: 'Register',
            component: Register
        },

        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard
        },

    ]
})

export default router