//import router from './router/router.js'

import Vue from 'vue';
import VueRouter from 'vue-router';
import eventsView from "@/views/event/EventsView";
import testComponent from "@/components/TestComponent";
import DashboardView from "@/views/dashboard/DashboardView";
import DashboardEvents from "@/views/dashboard/DashboardEvents";

Vue.use(VueRouter);

const routes = [
    { path: '/', component: eventsView },
    { path: '/test', component: testComponent},
    { path: '/dashboard', component: DashboardView},
    { path: '/dashboard/events', component: DashboardEvents}
];

const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;