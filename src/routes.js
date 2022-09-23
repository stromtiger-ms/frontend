import * as VueRouter from 'vue-router'
import Dashboard from './dashboard/Dashboard.vue'
import ChartView from './chartview/ChartView.vue'

const routes = [
    { name: 'index', path: '/', component: Dashboard },
    { name: 'chart-view', path: '/chart/:id', component: ChartView }
]

export default VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
})
