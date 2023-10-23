<template>
  <div id="app">
    <EventsView></EventsView>
  </div>
</template>

<script>
import EventsView from "@/views/event/EventsView";
export default {
  name: 'App',
  components: {
    EventsView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
