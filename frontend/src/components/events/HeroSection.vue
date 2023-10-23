<template>
  <header>
    <div class="text-center bg-image" style="
      background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp');
      height: 400px;
      background-repeat: no-repeat;
      background-size: cover;
    ">
      <div class="mask h-100" style="background-color: rgba(0, 0, 0, 0.6);">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white">
            <h1 class="mb-3">YouCode Events</h1>
            <h4 class="mb-3 fs-5">Youssoufia</h4>
            <a class="btn btn-outline-light btn-lg" href="#!" role="button">Call to action</a>
          </div>
        </div>
      </div>
    </div>
    <div id="eventfilter" class="d-flex justify-content-center">
      <filter-component></filter-component>
    </div>
  </header>
</template>

<script>
  import FilterComponent from "@/components/events/FilterComponent";
  export default {
    name: "HeroSection",
    components: {FilterComponent}
  }
</script>