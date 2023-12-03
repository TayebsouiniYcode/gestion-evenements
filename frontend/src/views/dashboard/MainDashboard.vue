<template>
  <div class="row">
    <div class="col-md-2">
      <side-bar></side-bar>
    </div>
    <div class="col-md-10">
      <navbar-dashboard></navbar-dashboard>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/dashboard/SideBar";
import NavbarDashboard from "@/components/dashboard/NavbarDashboard";
export default {
  name: "MainDashboard",
  components: {NavbarDashboard, SideBar},
}
</script>

<style>

</style>