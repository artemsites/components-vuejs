import { render } from '@testing-library/vue'
import SwitcherBox from './SwitcherBox.js'

test('render component', () => {
  const debug = render(BaseButton)


  
  debug()
})



// import { mount } from '@vue/test-utils'
// import SwitcherBox from './SwitcherBox.js'

// test('render component', () => {
//   const wrapper = mount(SwitcherBox)

//   const sw = wrapper.get('[class="switcher-box"]')

//   console.log(sw)
  
//   // expect(sw.text()).toBe('TEST')
// })