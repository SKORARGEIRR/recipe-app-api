<template>
  <div>
    <b-container fluid="xl" class="px-0">
      <b-row>
        <b-col>
          <navbar></navbar>
          <router-view/>
        </b-col>
      </b-row>
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
