<template>
  <div>
    <header-component></header-component>
    <hero-section></hero-section>
  </div>
</template>

<script>
  import HeaderComponent from "@/components/template/HeaderComponent";
  import HeroSection from "@/components/events/HeroSection";

  export default {
    name: "EventsView",
    components: {HeroSection, HeaderComponent}
  }
</script>