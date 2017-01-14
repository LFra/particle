const Nuxt = require('nuxt')
const fs = require('fs')
const app = require('express')()
const server = require('http').Server(app)
const five = require('johnny-five')
const Particle = require('particle-io')
const chalk = require('chalk')
const log = console.log
const auth = require('./auth')
// const webpackConfig = require('./webpack.dev')
const io = require('socket.io')(server)
// Body parser, to access req.body

const board = new five.Board({
  io: new Particle({
    token: auth.token,
    deviceId: auth.deviceId
  })
})


// We instantiate Nuxt.js with the options
const isProd = process.env.NODE_ENV === 'production'
let config = require('./nuxt.config.js')
config.dev = !isProd
const nuxt = new Nuxt(config)

server.listen(3000, () => {
  console.log(`Listening at http://localhost:3000`)
})

// Add nuxt to the mix. For SSR and other development goodies.
nuxt.build().then(() => {
  app.use(nuxt.render)
}).catch((error) => {
  console.error(error)  // eslint-disable-line no-console
  process.exit(1)
})

const pins = {
  7: {
    led: {
      on: () => console.log('on'),
      off: () => console.log('off')
    }
  }
}

board.on('ready', () => {
  const led = new five.Led('D7')
  led.off()
  pins[7].led = led
})

io.on('connection', (socket) => {
  // console.log('connected')
  socket.on('message', (x, id) => {
    if (x === 'on') {
      pins[id].led.on()
      log( chalk.gray('Turning on'), chalk.bgCyan.bold(' ' + id + ' '))
    }
    if (x === 'off') {
      pins[id].led.off()
      log( chalk.gray('Turning of'), chalk.bgMagenta.bold(' ' + id + ' '))
    }
  })
})
