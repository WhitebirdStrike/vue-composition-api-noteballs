<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">Noteballs</div>

        <a
          @click.prevent="showMobileNav = !showMobileNav"
          class="navbar-burger"
          role="button"
          :class="{ 'is-active': showMobileNav }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': showMobileNav }"
      >
        <div class="navbar-end">
          <Routerlink to="/" class="navbar-item" active-class="is-active"
            >Notes</Routerlink
          >
          <Routerlink to="/stats" class="navbar-item" active-class="is-active"
            >Stats</Routerlink
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
/*
imports
*/

import { ref } from "vue";

/*
mobile nav
*/

const showMobileNav = ref(false);
</script>

<style>
@media (max-width: 2023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
