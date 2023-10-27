<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid d-flex gap-5">
        <a class="navbar-brand" href="#">You-Event</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Events</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Catégories
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Gigs</a></li>
                <li><a class="dropdown-item" href="#">Clubs</a></li>
                <li><a class="dropdown-item" href="#">festivals</a></li>
              </ul>
            </li>
          </ul>
          <div class="avatar">
            <div class="avatar-dropdown d-flex gap-3">
              <div class="avatar">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Tayeb SOUINI" class="rounded-circle">
              </div>
              <div class="dropdown">
                <button class="btn dropdown-toggle text-dark" type="button" id="userDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Tayeb SOUINI
                </button>
                <ul class="dropdown-menu" aria-labelledby="userDropdown">
                  <li><a class="dropdown-item" href="#">Profile</a></li>
                  <li><a class="dropdown-item" href="#">Settings</a></li>
                  <li>
                    <router-link to="/dashboard" class="dropdown-item">Dashboard</router-link>
                  </li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Logout</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>

<script>
  export default {
    name: "HeaderComponent"
  }
</script>

<style>

</style>