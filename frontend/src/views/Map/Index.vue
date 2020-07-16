<template>
  <div>
    <b-row>
      <b-col>
        <main-menu></main-menu>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <sub-menu></sub-menu>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        Karte
      </b-col>
    </b-row>
  </div>
</template>

<script>
import MainMenu from './MainMenu';
import SubMenu from './SubMenu';

export default {
  name: 'Map',
  components: {
    MainMenu,
    SubMenu,
  },
};
</script>

<style scoped>

</style>
