<template>
  <div class="row mt-5 gap-2">
    <div class="col-md-6 col-12">
      <img class="h-100 img-fluid" src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
    </div>
    <div class="col-md-5 col-12">
      <div class="w-100 h-100 d-flex flex-column align-items-start gap-2 justify-content-between">
        <div class="event__details--name">
          <h1> {{ event.name }}</h1>
          <hr>
          <p class="text-success text-start">Date : {{ event.date }} | {{ event.time }}</p>
        </div>
        <div class="event__details--description">
          <p class="text-start">
            {{ event.description }}
          </p>
        </div>
        <div class="event__details--ticket w-100">
          <p>Ticket disponibles: <span class="text-success">27 Ticket</span></p>
          <button type="button" data-bs-toggle="modal" data-bs-target="#checkoutModal" class="btn btp-primary bg-dark text-light p-3 mt-5 w-100">Checkout now</button>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="checkoutModal" tabindex="-1" aria-labelledby="checkoutModalLabel" aria-hidden="true" style="padding-left: 40% !important; padding-top: 5% !important;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-dark text-light">
            <h5 class="modal-title" id="checkoutModalLabel">Checkout</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Ticket disponibles: <span class="text-success">27 Ticket</span></p>
            <form class="mt-4">
              <div class="form-group">
                <label class="form-label">Nombre de ticket</label>
                <input type="number" v-model="quantity" class="form-control" min="1" max="27" value=1>
              </div>
            </form>
          </div>
          <div class="modal-footer d-flex flex-column gap-3">
            <button type="button" class="btn btn-secondary bg-light text-dark w-100" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary bg-dark text-light w-100" data-bs-dismiss="modal" @click="addToCart(event.id)">Add to card</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { useCartStore } from "@/states/panier";

export default {
  name: "EventDetailsComponent",
  data (){
    return {
      quantity: 0
    }
  },
  props: {
    event: event,
  },
  methods: {
    addToCart(id) {
      useCartStore().addToCart(id, this.quantity);
    }
  }
}


</script>

<style>

.btn:hover {
  background-color: #a0aec0 !important;
  color: #1a202c !important;
}
</style>