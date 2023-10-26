<template>
  <div>
    <div class="clubs">
      <div class="mt-5">
        <div class="row row-cols-1 row-cols-md-4 row-cols-sm-2 g-4 mt-5">
          <div v-for="event in eventList" :key="event.id" class="col d-flex align-items-stretch">
            <div class="card">
              <img src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top"
                   alt="Hollywood Sign on The Hill" />
              <div class="card-body">
                <h5 class="card-title">{{ event.name }}</h5>
                <hr class="mt-2 mb-4">
                <p class="card-text text-start">{{ event.description }} </p>
              </div>
              <div class="card-footer text-success">
                le {{ event.date }} à {{ event.time }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import eventService from "@/services/EventService";

export  default {
  name: "MainSection",
  async beforeCreate() {
    this.eventList = await eventService.getAllEvents();
  },
  data() {
    return {
      seeMoreClubEvents: false,
      eventList: null,
    }
  },
  mounted() {
  },
  methods: {
    seeMoreClub : function() {
      this.seeMoreClubEvents = true;
      console.log(this.seeMoreClubEvents);
    }
  }
}
</script>