<template>
  <div>
    im in the details componnent and name is {{ this.event.name }}
  </div>
</template>

<script>
export default {
  name: "EventDetailsComponent",
  props: {
    event: event
  }
}
</script>