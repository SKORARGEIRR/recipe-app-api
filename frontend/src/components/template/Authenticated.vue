<template>
  <div>
    <b-container fluid>
      <navbar></navbar>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import Navbar from '../layout/Navbar.vue';

export default {
  name: 'Authenticated',
  components: {
    Navbar,
  },
};
</script>

<style scoped>

</style>
