<template>
  <div>
    <b-form-group
      id="map-group-dataset"
      label="Verfügbare Datensätze:"
      label-for="map-input-dataset"
    ><b-form-select
        id="map-input-dataset"
        v-model="dataset"
        :options="datasetOptions"
      >
        <template v-slot:first>
            <option value="null" disabled>Datensatz auswählen</option>
        </template>
      </b-form-select>
    </b-form-group>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'MapSelectDataset',
  computed: {
    ...mapGetters('map', [
      'GET_MAP_DATASET_OPTIONS',
    ]),
    dataset: {
      get () { return this.$store.state.map.form.dataset; },
      set (value) { this.$store.commit('map/SET_MAP_DATASET', value); }
    },
    datasetOptions() {
      return this.$store.state.map.form.dataset_options;
    },
  },
};
</script>

<style scoped>

</style>
