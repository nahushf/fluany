import defaultPackages from '../defaultPackages'

import {
  settingNewPack
} from 'shared/helpers'

import {
  saveInLocal,
  getInLocal
} from 'store/LocalStore'

const packages = defaultPackages.map(settingNewPack)

getInLocal('packState')
  .catch(() => saveInLocal('packState', packages))
