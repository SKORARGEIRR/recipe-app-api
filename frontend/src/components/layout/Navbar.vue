<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Operations Explorer</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/opex2/home">Home</b-nav-item>
        <b-nav-item to="/opex2/map">Karte</b-nav-item>
        <b-nav-item @click="logout()">Logout</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'Navbar',
  methods: {
    ...mapActions('auth', [
        'logout',
    ]),
  },
}
</script>

<style scoped>

</style>
