import { getInLocal } from '../popup/store/LocalStore.js';
import { getIndexThingById } from '../popup/reducers/stateManipulate.js';

export const ask = async () => {
  const allPacks = await getInLocal('packState');
  const idPackToTrain = await getInLocal('idPackToTrain');
  const indexOfThePack = getIndexThingById(allPacks, idPackToTrain);
  const packToTrain = allPacks[indexOfThePack];
}

