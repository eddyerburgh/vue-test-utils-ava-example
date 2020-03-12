<template>
  <div>
    <message-toggle />
    <list :items="['list item 1', 'listen item 2']" />
  </div>
</template>

<script>
import MessageToggle from './MessageToggle'
import List from './List'

export default {
  name: 'Page',
  components: {
    MessageToggle,
    List
  }
}
</script>
