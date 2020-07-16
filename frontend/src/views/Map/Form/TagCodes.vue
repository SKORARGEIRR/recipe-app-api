<template>
  <div>
    <b-form-group label="ICD-10 Code(s) auswählen:">
      <b-form-tags v-model="value" no-outer-focus class="mb-2">
        <template v-slot="{ tags, disabled, addTag, removeTag }">

          <b-dropdown variant="outline-secondary" block>
            <template v-slot:button-content>
              Code(s) auswählen
            </template>
            <b-dropdown-form @submit.stop.prevent="() => {}">
              <b-form-group
                label-for="tag-search-input"
                label="Code oder Beschreibung suchen"
                label-cols-md="auto"
                class="mb-0"
                label-size="sm"
                :description="searchDesc"
                :disabled="disabled"
              >
                <b-form-input
                  v-model="search"
                  id="tag-search-input"
                  type="search"
                  size="sm"
                  autocomplete="off"
                 ></b-form-input>
              </b-form-group>
            </b-dropdown-form>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-text
              v-for="option in availableOptions"
              :key="option"
              @click="onOptionClick({ option, addTag })"
            >
              <b-button size="sm" block variant="outline-secondary">{{ option }}</b-button>
            </b-dropdown-text>
            <b-dropdown-text v-if="availableOptions.length === 0">
              Keine Ergebnisse für {{ search }}
            </b-dropdown-text>
          </b-dropdown>

          <ul v-if="tags.length > 0" class="list-inline d-inline-block mt-2">
            <li v-for="tag in tags" :key="tag" class="list-inline-item">
              <b-form-tag
                @remove="removeTag(tag)"
                :title="tag"
                :disabled="disabled"
                variant="info"
              >{{ tag }}</b-form-tag>
            </li>
          </ul>
        </template>
      </b-form-tags>
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: 'MapTagCodes',
  data() {
    return {
      options: [
        'E00-E07 (Krankheiten der Schilddrüse)',
        'E00 (Angeborenes Jodmangelsyndrom)',
        '1-10 (Klinische Untersuchung)',
        '1-20 (Neurologische Untersuchungen)',
      ],
      search: '',
      value: []
    }
  },
  computed: {
    criteria() {
      // Compute the search criteria
      return this.search.trim().toLowerCase()
    },
    availableOptions() {
      const criteria = this.criteria
      // Filter out already selected options
      const options = this.options.filter(opt => this.value.indexOf(opt) === -1)
      if (criteria) {
        // Show only options that match criteria
        return options.filter(opt => opt.toLowerCase().indexOf(criteria) > -1);
      }
      // Show all options available
      return options
    },
    searchDesc() {
      if (this.criteria && this.availableOptions.length === 0) {
        return 'Keine Codes oder Beschreibungen stimmen mit der Suchanfrage überein.'
      }
      return ''
    }
  },
  methods: {
    onOptionClick({ option, addTag }) {
      addTag(option)
      this.search = ''
    }
  },
};
</script>

<style>

</style>
