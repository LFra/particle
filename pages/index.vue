<template>
  <div class="container">
    <button @click='switchLED'>12: ON</button>
    <button @click='switchLEDOFF'>12: OFF</button>
  </div>
</template>

<script>
  import socket from '~plugins/socket.io.js'
export default {
  mounted: function () {
    socket.on('connection', function () {
      console.log('hello')
    })
  },
  data () {
    return {
      formError: null,
      formUsername: '',
      formPassword: ''
    }
  },
  methods: {
    switchLED: function () {
      socket.emit('message', 'on', 7)
    },
    switchLEDOFF: function () {
      socket.emit('message', 'off', 7)
    }
  }
}
</script>

<style>
.container {
  padding: 100px;
}
.error {
  color: red;
}
</style>
