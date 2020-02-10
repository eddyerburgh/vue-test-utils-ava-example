import { shallowMount } from '@vue/test-utils'
import MessageToggle from '../../src/components/MessageToggle.vue'
import Message from '../../src/components/Message'
import test from 'ava'

test('toggles msg passed to Message when button is clicked', t => {
  const wrapper = shallowMount(MessageToggle)
  const button = wrapper.find('#toggle-message')
  t.is(wrapper.vm.msg, null)
  button.trigger('click')
  t.is(wrapper.vm.msg, 'default message')
  button.trigger('click')
  t.is(wrapper.vm.msg, 'toggled message')
})
