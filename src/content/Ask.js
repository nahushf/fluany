import { getInLocal, saveInLocal } from '../popup/store/LocalStore';
import { getIndexThingById } from '../popup/reducers/stateManipulate';
import { getRandomInt } from '../shared/helpers';
import { dec } from 'ramda';

export const loadPacks = async () => {
  const allPacks = await getInLocal('packState');
  const idPackToTrain = await getInLocal('idPackToTrain');
  const indexOfThePack = getIndexThingById(allPacks, idPackToTrain);
  const packInTraining = allPacks[indexOfThePack];
  // saveInLocal('cardsInTraining', packInTraining.cards);
};

const getRandomCard = (cards) => {
	const indexCardBeingUsed = getRandomInt(0, dec(cards.length));
  console.log('indexBeingUsed: ', indexCardBeingUsed);
	return cards[indexCardBeingUsed];
};

export const ask = async () => {
  const cardsInTraining = await getInLocal('cardsInTraining');
  const card = getRandomCard(cardsInTraining);
};
