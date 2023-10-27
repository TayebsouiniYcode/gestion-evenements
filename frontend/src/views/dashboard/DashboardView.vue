<template>
  <div>
    <div class="row vh-100">
      <side-bar></side-bar>
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <h3>This is content</h3>
      </main>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/dashboard/SideBar";
export default {
  name: "DashboardView",
  components: {SideBar}
}
</script>