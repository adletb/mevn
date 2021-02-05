import VueRouter from 'vue-router'
import TodoList from '../components/TodoList'
import Home from '../components/Home'

export default new VueRouter ({
    mode: 'history',
    routes: [
        {
            path: '/todo-list', 
            component: TodoList 
        },
        {
            path: '/',
            component: Home
        }
    ]
})