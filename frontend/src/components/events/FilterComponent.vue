<template>
  <div class="w-75 border border-1 p-3 bg-white">
    <form class="d-flex gap-5">
      <div class="form-group w-25">
        <input class="form-control p-3" type="text" name="keywords" value="" placeholder="Artists, Venues, Keywords">
      </div>
      <div class="form-group w-25">
        <input class="form-control p-3" type="text" name="location" value="" placeholder="Anywhere">
      </div>
      <div class="form-group w-25">
        <input class="form-control p-3" type="datetime-local" name="time" value="" placeholder="Any time">
      </div>
      <div class="form-group w-25">
        <input class="form-control btn btn-primary p-3 bg-dark border-0 text-light" name="search" type="submit" value="SEARCH">
      </div>
    </form>
    <div class="suggestions d-flex gap-4 mt-5">
      <span class="bg-light px-3">Today</span>
      <span class="bg-light px-3">Tomorrow</span>
      <span class="bg-light px-3">This week</span>
      <span class="bg-light px-3">Next week</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FilterComponent"
  }


</script>