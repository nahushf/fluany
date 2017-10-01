import { saveInLocal } from 'store/LocalStore';
import { settingNewPack } from 'shared/helpers';
import defaultPackages from '../defaultPackages';
const packages = defaultPackages.map(settingNewPack);
saveInLocal('packState', packages);
