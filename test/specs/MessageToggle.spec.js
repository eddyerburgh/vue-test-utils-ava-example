import { shallow } from 'vue-test-utils'
import MessageToggle from '../../src/components/MessageToggle.vue'
import Message from '../../src/components/Message'
import test from 'ava'

test('toggles msg passed to Message when button is clicked', t => {
  const wrapper = shallow(MessageToggle)
  const button = wrapper.find('#toggle-message')
  button.trigger('click')
  const MessageComponent = wrapper.find(Message)
  t.true(MessageComponent.hasProp('msg', 'message'))
  button.trigger('click')
  t.true(MessageComponent.hasProp('msg', 'toggled message'))
})
