import { createRouter, createWebHistory } from 'vue-router';

// Импорт маршрутизируемых страниц
import HomePage from '../pages/HomePage.vue';
import ServicePage from '../pages/ServicePage.vue';
import ShopPage from '../pages/ShopPage.vue';
import AccountPage from '../pages/AccountPage.vue';
import BookingPage from '../pages/BookingPage.vue';
import ReviewsPage from '../pages/ReviewsPage.vue';
import AdminPage from '../pages/AdminPage.vue';
import ContactsPage from '../pages/ContactsPage.vue';
import AboutPage from '../pages/AboutPage.vue';

const routes = [
  { path: '/', component: HomePage, name: 'Home' },
  { path: '/services', component: ServicePage, name: 'Services' },
  { path: '/shop', component: ShopPage, name: 'Shop' },
  { path: '/account', component: AccountPage, name: 'Account' },
  { path: '/booking', component: BookingPage, name: 'Booking' },
  { path: '/reviews', component: ReviewsPage, name: 'Reviews' },
  { path: '/admin', component: AdminPage, name: 'Admin' },
  { path: '/contacts', component: ContactsPage, name: 'Contacts' },
  { path: '/about', component: AboutPage, name: 'About' },
];

const router = createRouter({
  history: createWebHistory('/vipauto/'), // Указываем базовый путь
  routes,
});

export default router;
