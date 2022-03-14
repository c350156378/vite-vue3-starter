import { mount } from '@vue/test-utils'

import Vuex from './vuex.vue'

test('vuex.vue', async () => {
  const wrapper = mount(Vuex)
  expect(wrapper.html()).toContain('unit test page')
  expect(wrapper.html()).toContain('count is: 0')
  await wrapper.find('button').trigger('click')
  expect(wrapper.html()).toContain('count is: 1')
})
