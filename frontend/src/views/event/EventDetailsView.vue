<template>
  <div>
    <header-component></header-component>
    <hero-section></hero-section>
    <div class="container m-auto">
      <event-details :event=this.event></event-details>
      <footer-component></footer-component>
    </div>
  </div>
</template>

<script>
import EventService from "@/services/EventService";
import HeaderComponent from "@/components/template/HeaderComponent";
import HeroSection from "@/components/events/HeroSection";
import FooterComponent from "@/components/template/FooterComponent";
import EventDetails from "@/components/events/EventDetails";
export default {
  components: {EventDetails, FooterComponent, HeroSection, HeaderComponent},
  data() {
    return{
      idEvent : null,
      event : null
    }
  },
  async created() {
    this.idEvent = this.$route.params.id;
    this.event = await EventService.getEvent(this.idEvent);
  },
  name: 'EventDetailsView'
}
</script>