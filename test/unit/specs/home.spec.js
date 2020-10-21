import Vue from 'vue'
import Home from '@/pages/index/home'

describe('home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent)
      .to.equal('IESPL x Yamisok')
  })
})
