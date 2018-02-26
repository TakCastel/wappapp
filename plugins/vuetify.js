import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

export default () => {
  Vue.use(Vuetify, {
    theme: {
      primary: '#41b883',
      secondary: '#2c3e50',
      accent: '#8c9eff',
      error: '#b71c1c',
    },
  });
}
