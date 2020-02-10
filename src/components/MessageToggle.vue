<template>
  <div>
    <message :msg="msg" />
    <button
      id="toggle-message"
      @click="toggleMessage"
    >
      Change message
    </button>
  </div>
</template>

<script>
import Message from './Message'

export default {
  name: 'MessageToggle',
  components: {
    Message
  },
  data: () => ({
    msg: null
  }),
  methods: {
    toggleMessage () {
      this.msg = this.msg === 'default message' ? 'toggled message' : 'default message'
    }
  }
}
</script>
