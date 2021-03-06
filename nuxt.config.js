module.exports = {
  head: {
    title: 'Particle',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: 'Control for Photon Particle' }
    ]
  },
  loading: { color: '#3B8070' },
  build: {
    vendor: ['socket.io-client']
  }
}
