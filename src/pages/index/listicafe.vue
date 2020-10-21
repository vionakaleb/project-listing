<template>
	<div>
        <b-container>
            <div class="pt-5 pb-5">
                <b-row class="justify-content-between">
                    <b-col cols="12" xxl="4" xl="4" lg="4" md="6" sm="6">
                        <SelectIcafe class="mb-3 mb-sm-5 mb-md-5"
                        :selectItem="selectItem"
                        @setSelectCity="setSelectCity"></SelectIcafe>
                    </b-col>
                    <b-col cols="12" xxl="4" xl="4" lg="4" md="6" sm="6">
                        <SearchIcafe class="mb-3 mb-sm-5 mb-md-5"
                        :searchText="searchText"
                        @setSearch="setSearch"></SearchIcafe>
                    </b-col>
                </b-row>
                <b-row>
                    <template v-if="listICafe.length > 0">
                        <b-col v-if="loading" class="flex-fill text-center">
                          <img src="http://res.cloudinary.com/yamisok/image/upload/v1517211996/post/ysuv4mntlcebkudbgv2y.gif" style="max-width:128px;">
                        </b-col>
                        <b-col class="d-flex flex-column" cols="6" xxl="2" xl="2" lg="3" md="3" sm="6" v-for="(LI, index) in listICafe" :key="index" v-if="!loading" @click="getCommunityDetail(LI.url)">
                              <ListIcafe class="d-card--one flex-grow-1 pointer"
                              v-b-modal.myModalFoto
                              :title="LI.name"
                              :imgSrc="LI.avatar_url"
                              :description="LI.description.substring(0, 75) + '...'"
                              v-if="LI.description.length > 75"></ListIcafe>
                              <ListIcafe class="d-card--one flex-grow-1 pointer"
                              v-b-modal.myModalFoto
                              :title="LI.name"
                              :imgSrc="LI.avatar_url"
                              :description="LI.description.substring(0, 75)"
                              v-else></ListIcafe>
                        </b-col>
                        <div class="flex-fill text-center">
                            <mugen-scroll :handler="getMoreList" v-if="!loadingMore && countICafeTemp < countICafe">
                               <img src="http://res.cloudinary.com/yamisok/image/upload/v1517211996/post/ysuv4mntlcebkudbgv2y.gif" style="max-width:128px;">
                            </mugen-scroll>
                        </div>
                    </template>
                    <template v-if="listICafe.length <= 0 && !loading">
                        <div class="flex-fill text-center">
                            Tidak Ada Data
                        </div>
                    </template>
                </b-row>
            </div>
        </b-container>

        <modal-foto></modal-foto>
    </div>
</template>

<script>
import SelectIcafe from '@/components/Select.icafe'
import SearchIcafe from '@/components/Search.icafe'
import ListIcafe from '@/components/List.icafe'
import ModalFoto from '@/components/modal/ModalFoto'
import MugenScroll from 'vue-mugen-scroll'
import Vue from 'vue'
import VueBus from 'vue-bus'
import axios from 'axios'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-106150648-4'
})
Vue.use(VueBus)

export default {
  name: 'listicafe',
  components: {
    SelectIcafe,
    SearchIcafe,
    ListIcafe,
    ModalFoto,
    MugenScroll,
    VueAnalytics
  },
  data () {
    return {
      selectItem: [],
      listICafe: [],
      loading: false,
      loadingMore: false,
      page: 1,
      searchText: '',
      countICafe: 0,
      countICafeTemp: 0,
      selectedCity: '',
      loadingGallery: false
    }
  },
  watch: {
    searchText (after, before) {
      this.getList(this.selectedCity, this.searchText)
    },
    selectedCity (after, before) {
      this.getList(this.selectedCity, this.searchText)
    }
  },
  mounted: function () {
    this.$root.$emit('checkLoggedPlayer')
    this.getList(this.selectedCity, this.searchText)
    this.getCityList()
    this.track()
  },
  methods: {
    fetchSearch: function () {

    },
    getList: function (city, search) {
      this.loading = true
      setTimeout(() => {
        axios.get(process.env.API_URL + '/get-communities?city=' + city + '&search=' + search)
          .then(response => {
            // console.log(response.data)
            this.listICafe = response.data.data
            this.countICafe = response.data.count_data
            this.countICafeTemp += response.data.data.length
            this.loading = false
          }, response => {
            // console.log(response.data)
            this.loading = false
          })
      }, 1000)
    },
    getCityList: function () {
      axios.get(process.env.API_URL + '/get-cities')
        .then(response => {
          // console.log(response.data)
          this.selectItem = response.data.data
          // this.loading = false
        }, response => {
          // console.log(response.data)
          // this.loading = false
        })
    },
    getMoreList: function () {
      this.page++
      this.loadingMore = true
      setTimeout(() => {
        axios.get(process.env.API_URL + '/get-communities?page=' + this.page)
          .then(response => {
            // console.log(response.data)
            for (let idx in response.data.data) {
              this.listICafe.push(response.data.data[idx])
            }
            this.countICafeTemp += response.data.data.length
            this.loadingMore = false
          }, response => {
            // console.log(response.data)
            this.loadingMore = false
          })
      }, 1000)
    },
    setSelectCity (city) {
      this.selectedCity = city
    },
    setSearch (input) {
      this.searchText = input
    },
    getCommunityDetail: function (url) {
      axios.get(process.env.API_URL + '/get-community-galleries?url=' + url)
        .then(response => {
          // console.log(response.data)
          // this.selectItem = response.data.data
          this.$root.$emit('setData', response.data.data)
          // this.loading = false
        }, response => {
          // console.log(response.data)
          // this.loading = false
        })
    },
    track () {
      this.$ga.page('home')
    }
  }
}
</script>
<style lang="scss" scoped>

</style>