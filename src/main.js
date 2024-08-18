import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import * as VaueRouter from 'vue-router'
import ShoppingCartPage from './pages/ShoppingCartPage.vue';
import ProductsPage from './pages/ProductsPage.vue';
import ProductDetailsPage from './pages/ProductDetailsPage.vue';
import PageNotFound from './pages/PageNotFound.vue';

createApp(App)
.use(VaueRouter.createRouter({
    history: VaueRouter.createWebHistory(process.env.BASE_URL),
    routes:[
        {
        path:"/cart",
        component: ShoppingCartPage,
    },
    {
        path:'/products',
        component: ProductsPage,
    },
    {
        path:'/products/:productId',
        component: ProductDetailsPage,
    },
    {
        path:'/:pathMatch(.*)*',
        component: PageNotFound,
    }
]
})).mount('#app')
