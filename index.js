import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import AddBook from '../views/AddBook.vue';
import BookDetail from '../views/BookDetail.vue';
import EditBook from '../views/EditBook.vue';
import NotFound from '../views/404.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/add', name: 'AddBook', component: AddBook },
  { path: '/book/:id', name: 'BookDetail', component: BookDetail, props: true },
  { path: '/edit/:id', name: 'EditBook', component: EditBook, props: true },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
