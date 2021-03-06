import Home from '../home/home';
import Login from '../user/login';
import Register from '../user/register';
import Exercises from '../exercises/exercises';
import NotFound from '../not-found';

export default [
    {
        path: '/',
        name: 'index',
        component: Home,
    },

    {
        path: '/login',
        name: 'login',
        component: Login,
    },

    {
        path: '/register',
        name: 'register',
        component: Register,
    },

    {
        path: '/exercises',
        name: 'exercises',
        component: Exercises
    },

    { path: '*', component: NotFound }
];