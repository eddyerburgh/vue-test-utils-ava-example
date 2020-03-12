import { shallowMount } from '@vue/test-utils'
import test from 'ava'
import List from '../../src/components/List.vue'

test('List.vue', t => {
  const items = ['', '']
  const wrapper = shallowMount(List, {
    propsData: { items }
  })
  t.is(wrapper.findAll('li').length, items.length)
})
