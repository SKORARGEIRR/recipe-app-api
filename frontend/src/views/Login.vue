<template>
  <div>
    <b-row>
      <b-col sm="6" class="mx-auto">
        <b-form-group
          id="group-username"
          description="Bitte den Accountnamen eingeben."
          label="Account"
          label-for="username"
        >
          <b-input-group size="lg" class="my-1">
            <template v-slot:prepend>
                <b-input-group-text>
                  <b-icon icon="person-fill"></b-icon>
                </b-input-group-text>
            </template>
            <b-form-input
            id="username"
            type="email"
            autocomplete="username"
            placeholder="Benutzername"
            v-model="form.email"
            v-on:keyup.enter="loginUser()"
            ></b-form-input>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="6" class="mx-auto">
        <b-form-group
          id="group-password"
          description="Bitte das Accountpasswort eingeben."
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
      <b-col sm="6" class="mx-auto">
        <b-button
        type="submit"
        size="md"
        block
        variant="info"
        @click="loginUser()"
        class="mx-auto">
            <b-icon icon="box-arrow-in-right"></b-icon> Anmelden
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import axios from 'axios'
import Cookie from 'js-cookie'

export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    loginUser() {
      console.log('loginUser..')
      let email = this.form.email
      let password = this.form.password
      let basic = btoa(password)
      let data = {
        email: email,
        password: basic,
      }

      axios({
        method: 'post',
        url: '/user/token/',
        data: data,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then(res => {
        // Do something
        console.log(res)
      })
      .catch(err => {
        // Do something
        console.log('error @ /user/token..', err)
      })

    },
  },
};
</script>

<style scoped>

</style>
