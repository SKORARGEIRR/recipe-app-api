<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <navbar></navbar>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <router-view/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from '../layout/Navbar.vue';

export default {
  name: 'Deauthenticated',
  components: {
    Navbar,
  },
};
</script>

<style scoped>

</style>
