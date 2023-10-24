//import router from './router/router.js'

import Vue from 'vue';
import VueRouter from 'vue-router';
import eventsView from "@/views/event/EventsView";
import testComponent from "@/components/TestComponent";


Vue.use(VueRouter);

const routes = [
    { path: '/', component: eventsView },
    { path: '/test', component: testComponent}
];

const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;