<template>
  <div>
    <table class="table align-middle mb-0 bg-white mt-5 text-start">
      <thead class="bg-light">
      <tr>
        <th>Name</th>
        <th>Date time </th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="event in eventList" :key="event.id">
        <td>
          <div class="d-flex align-items-center">
            <img
                src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                style="width: 45px; height: 45px"
                class="rounded-circle"
            />
            <div class="ms-3">
              <p class="fw-bold mb-1"> {{ event.name }}</p>
              <p class="text-muted mb-0"> {{ event.description }}</p>
            </div>
          </div>
        </td>
        <td>
          <p class="fw-normal mb-1"> {{ event.date }}</p>
          <p class="text-muted mb-0"> {{ event.time }}</p>
        </td>
        <td>
          <button type="button" class="btn btn-link btn-sm btn-rounded">
            Edit
          </button>
        </td>
      </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
import eventService from "@/services/EventService";
export default {
  async beforeCreate() {
    this.eventList = await eventService.getAllEvents();
  },
  name: "EventListComponent",
  data() {
    return {
      eventList : null,
    }
  }
}
</script>