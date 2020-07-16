<template>
  <div>
    <b-row>
      <b-col>
        <form-select-dataset></form-select-dataset>
      </b-col>
      <b-col>
        <form-tag-codes></form-tag-codes>
      </b-col>
      <b-col>
        Altersgruppe auswählen
      </b-col>
      <b-col>
        Geschlecht auswälen
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        Erhebungsjahr auswählen
      </b-col>
      <b-col>
        Nach Bundesland filtern
      </b-col>
      <b-col>
        Suche zurücksetzen
      </b-col>
      <b-col>
        Kartenvergleich auswählen
      </b-col>
      <b-col>
        Eine Übersicht über die ICD-10 und OPS Systematiken finden Sie hier (ICD-10) und hier (OPS).
      </b-col>
      <b-col>
        Suche teilen
      </b-col>
    </b-row>
  </div>
</template>

<script>
import FormSelectDataset from './Form/SelectDataset';
import FormTagCodes from './Form/TagCodes';

export default {
  name: 'MapMainMenu',
  components: {
    FormSelectDataset,
    FormTagCodes,
  },
  data() {
    return {}
  },
};
</script>

<style scoped>

</style>
