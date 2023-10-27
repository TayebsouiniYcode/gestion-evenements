<template>
  <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style="width: 280px;">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg class="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
      <span class="fs-4">YouCode Events</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto text-start mt-5">
      <li class="nav-item">
        <router-link to="/dashboard" class="nav-link active" aria-current="page">
          Dashboard
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/dashboard/events" class="nav-link text-white" aria-current="page">
          Events
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/dashboard" class="nav-link text-white" aria-current="page">
          Dashboard
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/dashboard" class="nav-link text-white" aria-current="page">
          Dashboard
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/dashboard" class="nav-link text-white" aria-current="page">
          Dashboard
        </router-link>
      </li>
    </ul>
    <hr>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
        <strong>Tayeb SOUINI</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
}
</script>