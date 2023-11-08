<template>
  <div>
    <div class="row vh-100">
      <side-bar></side-bar>
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="mt-5 mb-5" style="height: 5%"></div>
        <statistique-section></statistique-section>
      </main>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/dashboard/SideBar";
import StatistiqueSection from "@/components/dashboard/stats/StatistiqueSection";
export default {
  name: "DashboardView",
  components: {StatistiqueSection, SideBar}
}
</script>