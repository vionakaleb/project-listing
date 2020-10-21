<template>
	<div>
			<h1 class="d-none">iCafe</h1>
			<section class="w-100 text-center">
				<home-banner></home-banner>
			</section>
	</div>
</template>

<script>
import HomeBanner from '@/components/Home.Banner'
import Vue from 'vue'
import VueBus from 'vue-bus'
import { BContainer } from 'bootstrap-vue/esm/components/layout/container'
import { LayoutPlugin } from 'bootstrap-vue/esm/components/layout'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-106150648-4'
})

Vue.use(VueBus)
Vue.component('b-container', BContainer)
Vue.use(LayoutPlugin)

export default {
  name: 'hello',
  components: {
    HomeBanner,
    VueAnalytics
  },

  methods: {
    track () {
      this.$ga.page('home')
    }
  },

  mounted () {
    this.track()
  },

  data () {
    return {
      name: 'iCafe',
      showAlert: true,
      text: `
        iCafe.
        `
    }
  }
}
</script>