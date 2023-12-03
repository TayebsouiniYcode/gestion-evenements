<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">VotreLogo</router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <form class="d-flex mx-auto my-2 my-lg-0">
          <input class="form-control me-2" type="search" placeholder="Rechercher" aria-label="Search">
          <button class="btn btn-outline-light" type="submit">Rechercher</button>
        </form>

        <div class="dropdown ms-lg-auto mt-2 mt-lg-0">
          <a href="#" class="nav-link dropdown-toggle text-decoration-none text-white" role="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://via.placeholder.com/30" alt="Photo de profil" class="rounded-circle me-2">
            Tayeb SOUINI
          </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
            <li><a class="dropdown-item" href="#">Profil</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbarDashboard",
}
</script>