<template>
  <div>
  <!-- NAVBAR -->
  <nav class="navbar navbar-expand navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand float-left" href="/">
        <img src="" alt=""/>
        JustJournal
      </a>
      <ul class="nav navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/view-topics">Topics</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>

  <div class="container mt-5">
    <!-- <RouterView /> -->
    <RouterView></RouterView>
  </div>
  
  </div>
</template>

<style>
</style>
