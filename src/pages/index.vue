<template>
  <div id="yamisok">
    <b-navbar toggleable="md" variant="dark" type="dark" sticky>
      <b-navbar-brand class="home-nav-p" style='width:150px;' to="/"><img alt="ICAFE YAMISOK"  class="home-ivista-logo" width="150" src="/static/img/logo2.png"></b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="text-center mt-md-0 mt-2">
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="px-3 text-uppercase" to="/home">Home</b-nav-item>
          <b-nav-item class="px-3 text-uppercase" to="/form" v-if="logged_valid">Form</b-nav-item>
          <b-nav-item class="px-3 text-uppercase" to="/list-icafe">List iCafe</b-nav-item>
          <b-nav-item class="px-3 text-uppercase" v-b-modal.myModalTutorial>Tutorial</b-nav-item>
          <b-nav-item class="px-3 text-uppercase" v-b-modal.myModalDaftar v-if="!logged_valid">Login / Register</b-nav-item>
          <b-nav-item class="px-3 text-uppercase" @click="logout()" v-if="logged_valid">Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <main>
      <router-view></router-view>
    </main>

    <footer class="dark-footer" style="background-color: #313131">
      <b-container>
          <b-row>
          <section class="col-sm-12 col-xs-12 text-center p-4" style="font-size: 11px; color: #aaa">
            <a>Copyright ©2018 Yamisok. Any commercial use or distribution without the express written<br>
            consent of Yamisok is strictly prohibited.</a>
          </section>
          </b-row>
      </b-container>
    </footer>

    <!-- Modal Component -->
    <modal-daftar></modal-daftar>
    <modal-tutorial></modal-tutorial>
  </div>
</template>
<script>
  import axios from 'axios'
  import ModalDaftar from '@/components/modal/ModalDaftar'
  import ModalTutorial from '@/components/modal/ModalTutorial'

  export default{
    data () {
      return {
        logged_valid: false,
        refresh: false
      }
    },
    components: {
      ModalDaftar,
      ModalTutorial
    },
    mounted: function () {
      this.checkLoggedPlayer()
      this.$root.$on('checkLoggedPlayer', () => {
        this.checkLoggedPlayer()
      })
    },
    methods: {
      checkLoggedPlayer () {
        // this.refresh = true
        if (localStorage.getItem('token') || localStorage.getItem('token') != null) {
          let data = {
            'token': localStorage.getItem('token')
          }
          axios.post(process.env.API_URL + '/get-token', data)
            .then(response => {
              // console.log('---------------+++++')
              // console.log(response.data)
              // console.log('---------------+++++')
              this.logged_valid = true
            }, response => {
              this.logged_valid = false
              localStorage.removeItem('token')
            })
        } else {
          this.logged_valid = false
        }
        // this.refresh = false
      },
      logout () {
        // this.refresh = true
        localStorage.removeItem('token')
        this.checkLoggedPlayer()
        // console.log(this.logged_valid)
        window.location = './'
      }
    }
  }
</script>