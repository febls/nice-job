import Vue from 'vue'

import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'
import '@mdi/font/css/materialdesignicons.css' // Material design icons
import '@fortawesome/fontawesome-free/css/all.css'


Vue.use(Vuetify, {
  iconfont: ['mdi', 'fa'],
  theme: {
    primary: '#fdb913',
    accent: "#231f20",
    secondary: '#e2490d',
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3,
    dark: '#FDF7FA'
  }
})