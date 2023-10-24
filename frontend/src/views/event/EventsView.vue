<template>
  <div>
    <header-component></header-component>
    <hero-section></hero-section>
    <div class="container m-auto">
      <main-section></main-section>
      <footer-component></footer-component>
    </div>
  </div>
</template>

<script>
  import HeaderComponent from "@/components/template/HeaderComponent";
  import HeroSection from "@/components/events/HeroSection";
  import MainSection from "@/components/events/MainSection";
  import FooterComponent from "@/components/template/FooterComponent";

  export default {
    name: "EventsView",
    components: {FooterComponent, MainSection, HeroSection, HeaderComponent}
  }
</script>