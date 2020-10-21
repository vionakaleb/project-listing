<template>
	<div>
    <b-container>
        <div class="pt-5 pb-5" align="center">
          <FormIcafe class="mb-0" :listMyICafe="listMyICafe"></FormIcafe>
        </div>

        <!-- <div class="col-md-6 mt-4">
              <FormOwner class="w-100 mb-3"></FormOwner>         
        </div> -->

    </b-container>
  </div>
</template>

<script>
import FormIcafe from '@/components/Form.icafe'
import Vue from 'vue'
import VueBus from 'vue-bus'
import axios from 'axios'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-106150648-4'
})
Vue.use(VueBus)

export default {
  name: 'form',
  components: {
    FormIcafe,
    VueAnalytics
  },
  data () {
    return {
      name: 'Form',
      showAlert: true,
      logged_player: {},
      listMyICafe: []
    }
  },
  mounted: function () {
    this.$root.$emit('checkLoggedPlayer')
    this.checkLoggedPlayer()
    this.track()
  },
  methods: {
    checkLoggedPlayer () {
      if (localStorage.getItem('token') || localStorage.getItem('token') != null) {
        let data = {
          'token': localStorage.getItem('token')
        }
        axios.post(process.env.API_URL + '/get-user', data)
          .then(response => {
            // console.log('---------------+++++')
            // console.log(response.data)
            // console.log('---------------+++++')
            if (response.data.status === 200) {
              this.logged_player = response.data.data
              this.getMyCommunities()
              // return true
            } else {
              this.logged_player = {}
              // return false
            }
          }, response => {
            // return false
          })
      } else {
        this.logged_player = {}
        this.$router.push('/home')
      }
    },
    getMyCommunities: function () {
      let data = {
        'token': localStorage.getItem('token'),
        'player_id': this.logged_player.id
      }
      axios.post(process.env.API_URL + '/user-communities', data)
        .then(response => {
          this.listMyICafe = response.data.data
          // console.log('---------------+++++')
          // console.log(this.logged_player)
          // console.log('---------------+++++')
        }, response => {
          // console.log(response.data)
        })
    },
    track () {
      this.$ga.page('form')
    }
  }
}
</script>

<style>
label {display:block;clear:both;}

.ml-custom
{
  margin-left:1px;
}
</style>