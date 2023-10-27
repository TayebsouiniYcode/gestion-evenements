<template>
  <div>
    <div class="row vh-100">
      <side-bar></side-bar>
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <filter-dashboard-event></filter-dashboard-event>
        <dashboard-event-actions-area></dashboard-event-actions-area>
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