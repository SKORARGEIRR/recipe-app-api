<template>
  <div>
    <b-row>
      <b-col sm="6" class="mx-auto bg-white mt-5 rounded">
        <login-header></login-header>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="6" class="mx-auto bg-white">
        <b-form-group
          id="group-email"
          description="Bitte die E-Mail Adresse eingeben."
          label="E-Mail"
          label-for="email"
        >
          <b-input-group size="lg" class="my-1">
            <template v-slot:prepend>
                <b-input-group-text>
                  <b-icon icon="at"></b-icon>
                </b-input-group-text>
            </template>
            <b-form-input
              id="email"
              type="email"
              autocomplete="email"
              placeholder="beispiel@email.com"
              v-model="form.email"
              v-on:keyup.enter="loginUser()"
            ></b-form-input>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="6" class="mx-auto bg-white">
        <b-form-group
          id="group-password"
          description="Bitte das Passwort eingeben."
          label="Passwort"
          label-for="password"
        >
          <b-input-group size="lg" class="my-2">
            <template v-slot:prepend>
                <b-input-group-text>
                  <b-icon icon="lock-fill"></b-icon>
                </b-input-group-text>
            </template>
            <b-form-input
              id="password"
              type="password"
              autocomplete="current-password"
              placeholder="Passwort"
              v-model="form.password"
              v-on:keyup.enter="loginUser()"
            ></b-form-input>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="6" class="mx-auto bg-white pb-4 rounded">
        <b-button
          id="btn-login"
          type="submit"
          size="md"
          block
          variant="info"
          @click="loginUser()"
          class="mx-auto"
        >
            <b-icon icon="box-arrow-in-right"></b-icon> Anmelden
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import axios from 'axios';
import Cookie from 'js-cookie';

import LoginHeader from '@/views/Login/Header';

export default {
  name: 'LoginIndex',
  components: {
    LoginHeader,
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
  computed: {
    ...mapGetters('auth', [
      'IS_AUTH_LOGGED_IN',
    ]),
  },
  watch: {
    IS_AUTH_LOGGED_IN (newVal, oldVal) {
      if (newVal) {
        this.$router.push({ name: 'Authenticated' });
      };
    },
  },
  methods: {
    ...mapActions('auth', [
        'login',
    ]),
    loginUser() {
      let email = this.form.email;
      let password = this.form.password;
      this.login({ email: email, password: password });
    },
  },
  mounted() {
    /**
     * Redirect user in case of accessing this component after successful
     * authentication.
     */
    if (this.IS_AUTH_LOGGED_IN) {
      this.$router.push({ name: 'Authenticated' });
    };
    /**
     * Redirect user in case of accessing this component with cookie still
     * intact but vuex cleared.
     */
    let cookie = Cookie.getJSON('user');
    if (cookie) {
      console.log('Found cookie on login page. Redirecting.');
      this.$router.push({ name: 'Authenticated' });
    };
  },
};
</script>

<style scoped>

</style>
