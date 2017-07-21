import { shallow } from 'vue-test-utils'
import test from 'ava'
import List from '../../src/components/List.vue'

test('List.vue', t => {
  const items = ['', '']
  const wrapper = shallow(List, {
    propsData: { items }
  })
  t.is(wrapper.findAll('li').length, items.length)
})
