import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const LED_ADD = 'LED_ADD'
const LED_DISABLE = 'LED_DISABLE'
const LED_SWITCH_STATUS = 'LED_SWITCH_STATUS'

const store = new Vuex.Store({
  state: {
    LEDs: {

    },
    numberOfLEDs: 1
  },
  mutations: {
    [LED_ADD] (state, {pin}){
      state.LEDs[state.numberOfLEDs] = {
        id: state.numberOfLEDs,
        pin: pin,
        status: 'OFF'
      }
      state.numberOfLEDs ++
    },
    [LED_DISABLE] (state, { id }){
      state.LEDs[id].status = 'DISABLED'
    },
    [LED_SWITCH_STATUS] (state, { id }){
      let LED = state.LEDs[id]
      if (LED.status === 'OFF') LED.status = 'ON'
      else LED.status = 'OFF'
    }
  },
  actions: {
    LEDAdd: ({ commit }, { pin }) => {
      commit(LED_ADD, { pin })
    },
    LEDSwitchStatus: ({ commit }, { id }) => {
      commit(LED_SWITCH_STATUS, { id : id })
    }
  },
  getters: {
    LEDs: state => state.LEDs,
    LED: (state,id) => state.LEDs.id
  }

})

export default store
