import { shallow } from 'vue-test-utils'
import test from 'ava'
import Message from '../../src/components/Message'

test('renders props.msg when passed', t => {
  const msg = 'new message'
  const wrapper = shallow(Message, {
    context: { props: { msg } }
  })
  t.is(wrapper.text(), msg)
})

test('renders default message if not passed a prop', t => {
  const defaultMessage = 'default message'
  const wrapper = shallow(Message, {context: {}})
  t.is(wrapper.text(), defaultMessage)
})
