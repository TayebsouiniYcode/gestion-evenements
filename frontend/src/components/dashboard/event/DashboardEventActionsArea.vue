<template>
  <div class="d-flex justify-content-end">
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addEventModal">
      ajouter événement
    </button>

    <div class="modal fade" id="addEventModal" tabindex="-1" aria-labelledby="addEventModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Ajouter un événement</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form class="d-flex flex-column gap-3" @submit.prevent="submitForm">
              <div class="form-group text-start">
                <label class="form-label" for="name">Nom de l'événement</label>
                <input v-model="name" class="form-control" type="text" name="name" id="name" value="" placeholder="Entrez un nom valide" required="true">
              </div>
              <div class="form-group text-start">
                <label class="form-label" for="description">Description</label>
                <textarea v-model="description" class="form-control" cols="6" rows="6" id="description" placeholder="Description de l'événement"></textarea>
              </div>
              <div class="form-group text-start">
                <label class="form-label" for="date">Date</label>
                <input v-model="date" type="date" class="form-control" id="date" />
              </div>
              <div class="form-group">
                <label class="form-label" for="time">Time</label>
                <input v-model="time" type="time" class="form-control" id="time" />
              </div>
              <div class="form-group">
                <label class="form-label" for="image">Image</label>
                <input @change="onFileChange" type="file" class="form-control" id="image" />
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DashboardEventActionsArea",
  data() {
    return {
      name: '',
      description: '',
      date: '',
      time: '',
      image: null,
    };
  },
  methods: {
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.image = files[0];
    },
    submitForm() {
      const formData = new FormData();
      formData.append('name', this.name);
      formData.append('description', this.description);
      formData.append('date', this.date);
      formData.append('time', this.time);
      formData.append('image', this.image);

      axios.post('http://127.0.0.1:8000/api/events', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => {
        console.log('Event created:', response.data);
      })
      .catch(error => {
        console.error('Error creating event:', error);
      });
    },

  }
}
</script>