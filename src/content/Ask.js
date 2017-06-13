import { getInLocal, saveInLocal } from '../popup/store/LocalStore';
import { getIndexThingById } from '../popup/reducers/stateManipulate';
import { getRandomInt } from '../shared/helpers';
import { dec, assocPath, remove} from 'ramda';
import { drawElementAsk } from './ElementAsk.js';

export const loadPacks = async () => {
  const allPacks = await getInLocal('packState');
  const idPackToTrain = await getInLocal('idPackToTrain');
  const indexOfThePack = getIndexThingById(allPacks, idPackToTrain);
  const packInTraining = allPacks[indexOfThePack];
  saveInLocal('timeMinutes', packInTraining.timeMinutes);
  saveInLocal('cardsInTraining', packInTraining.cards);
};

export const getRandomCard = (cards) => {
	const indexCardBeingUsed = getRandomInt(0, dec(cards.length));
	return cards[indexCardBeingUsed];
};

export const ask = async () => {
  const cardsInTraining = await getInLocal('cardsInTraining');
  const card = getRandomCard(cardsInTraining);
	drawElementAsk(card.front, card.back);
};
