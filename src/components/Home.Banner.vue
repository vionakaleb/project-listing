<template>
    <div>
        <a href="/form"><img class="responsive img-responsive w-100 mb-3" src="/static/img/banner1.jpg"></a>
        <img id="home-detail" class="img-landing mobile-hidden" src="/static/img/panel-1a.jpg"><br>
        <div class="p-button-home" style="background-color: #FFC801;">
            <template v-if="logged === true">
                <b-link to="/form">
                    <b-button class="btn d-btn--yellow d-button--one text-white mb-2 mb-lg-3 mb-md-2 mb-sm-2 mb-xl-3 text-uppercase text-black" style="background-color: #181818;"><b>Daftar Gratis Sekarang</b></b-button>
                </b-link>
            </template>

            <template v-else>
                <b-link v-b-modal.myModalDaftar>
                    <b-button class="btn d-btn--yellow d-button--one text-white mb-2 mb-lg-3 mb-md-2 mb-sm-2 mb-xl-3 text-uppercase text-black" style="background-color: #181818;"><b>Daftar Gratis Sekarang</b></b-button>
                </b-link>
            </template>
            <br>
            <p class="text-daftar mb-0">Lihat cara pendaftaran <b-link v-b-modal.myModalTutorial class="text-gray"><b>DISINI</b></b-link></p>
        </div>
        <img id="home-detail" class="img-landing desktop-hidden" src="/static/img/panel-2a.jpg"><br>
        <div class="p-button-home" style="background-color: #FFC801;">
            <template v-if="logged === true">
                <b-link to="/form">
                    <b-button class="btn d-btn--yellow d-button--one text-white mb-2 mb-lg-3 mb-md-2 mb-sm-2 mb-xl-3 text-uppercase text-black" style="background-color: #181818;"><b>Daftar Gratis Sekarang</b></b-button>
                </b-link>
            </template>

            <template v-else>
                <b-link v-b-modal.myModalDaftar>
                    <b-button class="btn d-btn--yellow d-button--one text-white mb-2 mb-lg-3 mb-md-2 mb-sm-2 mb-xl-3 text-uppercase text-black" style="background-color: #181818;"><b>Daftar Gratis Sekarang</b></b-button>
                </b-link>
            </template>
            <br>
            <p class="text-daftar mb-0">Lihat cara pendaftaran <b-link v-b-modal.myModalTutorial class="text-gray"><b>DISINI</b></b-link></p>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'

    export default {
      name: 'HomeBanner',
      components: {
      },
      data () {
        return {
          name: 'iCafe',
          showAlert: true,
          text: `
            iCafe.
            `,
          logged: false
        }
      },
      created () {
        this.checkLoggedPlayer()
      },
      methods: {
        checkLoggedPlayer () {
          if (localStorage.getItem('token') || localStorage.getItem('token') != null) {
            let data = {
              'token': localStorage.getItem('token')
            }
            axios.post(process.env.API_URL + '/get-user', data)
              .then(response => {
                if (response.data.status === 200) {
                  this.logged = true
                  // return true
                } else {
                  this.logged = false
                  // return false
                }
              }, response => {
                // return false
                this.logged = false
              })
          } else {
            this.logged = false
          }
        }
      }
    }
</script>
<style type="text/css">
    .d-btn--yellow:hover{
        color:#ffffff!important;
        background-color: #353535!important;
        border: 2px solid #FFD101;
    }
</style>
