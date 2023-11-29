//import router from './router/router.js'

import Vue from 'vue';
import VueRouter from 'vue-router';
import eventsView from "@/views/event/EventsView";
import testComponent from "@/components/TestComponent";
//import DashboardView from "@/views/dashboard/DashboardView";
import DashboardEvents from "@/views/dashboard/DashboardEvents";
import EventDetailsView from "@/views/event/EventDetailsView";
import PanierView from "@/views/shared/PanierView";
import MainDashboard from "@/views/dashboard/MainDashboard";
Vue.use(VueRouter);

const routes = [
    { path: '/', component: eventsView },
    { path: '/test', component: testComponent},
    { path: '/dashboard', component: MainDashboard},
    { path: '/dashboard/events', component: DashboardEvents},
    { path: '/event/:id', name: 'event-details', component: EventDetailsView},
    { path: '/panier', name: 'panier', component: PanierView}    
];

const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;