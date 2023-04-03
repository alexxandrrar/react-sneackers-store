import { use } from 'i18next'
import { initReactI18next } from 'react-i18next'

import common from './ua/common.json'

const resources = {
  ua: {
    common,
  },
} as const

export default use(initReactI18next).init({
  lng: 'ua',
  resources,
})
