<template>
  <div>
    <form class="form d-flex justify-content-between gap-3 text-start border border-1 p-5 bg-light">
      <div class="form-group w-100">
        <label class="form-label" form="name" >Name</label>
        <input v-model="name" type="text" id="name" class="form-control p-3"  placeholder="Name"/>
      </div>
      <div class="form-group w-100">
        <label class="form-label" form="description">Description</label>
        <input v-model="description" type="text" id="description" class="form-control p-3" placeholder="Description"/>
      </div>
      <div class="form-group w-100">
        <label class="form-label" form="date" >Date</label>
        <input v-model="date" type="date" id="date" class="form-control p-3"/>
      </div>
      <div class="form-group w-100 d-flex align-items-end ">
        <button class="btn btn-primary bg-black border-0 p-3 w-100">Search</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      description: '',
      date: null,
    }
  },
  name: "FilterDashboardEvent",
  methods: {
  }
}
</script>