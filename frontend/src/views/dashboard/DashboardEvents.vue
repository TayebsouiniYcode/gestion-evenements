<template>
  <div>
    <div class="row vh-100">
      <side-bar></side-bar>
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4" style="height: 10%"></div>
        <filter-dashboard-event></filter-dashboard-event>
        <hr class="mt-5 mb-5">
        <dashboard-event-actions-area></dashboard-event-actions-area>
        <hr class="mt-5 mb-5">

        <event-list-component></event-list-component>
      </main>
    </div>
  </div>
</template>

<script>


import SideBar from "@/components/dashboard/SideBar";
import FilterDashboardEvent from "@/components/dashboard/event/FilterDashboardEvent";
import DashboardEventActionsArea from "@/components/dashboard/event/DashboardEventActionsArea";
import EventListComponent from "@/components/dashboard/event/EventListComponent";
export default {
  name: "DashboardEvents",
  components: {EventListComponent, DashboardEventActionsArea, FilterDashboardEvent, SideBar},
}
</script>