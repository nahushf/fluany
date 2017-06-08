import { getInLocal, saveInLocal } from '../popup/store/LocalStore';
import { getIndexThingById } from '../popup/reducers/stateManipulate';
import Alarm from '../shared/Alarms.js';
import { getRandomInt } from '../shared/helpers';
import { dec, assocPath, remove} from 'ramda';
import { initElements, askDraw } from './ElementAsk.js';

initElements();
export const loadPacks = async () => {
  const allPacks = await getInLocal('packState');
  const idPackToTrain = await getInLocal('idPackToTrain');
  const indexOfThePack = getIndexThingById(allPacks, idPackToTrain);
  const packInTraining = allPacks[indexOfThePack];
  saveInLocal('cardsInTraining', packInTraining.cards);
};

export const getRandomCard = (cards) => {
	const indexCardBeingUsed = getRandomInt(0, dec(cards.length));
	return cards[indexCardBeingUsed];
};

export const ask = async () => {
  const cardsInTraining = await getInLocal('cardsInTraining');
  const card = getRandomCard(cardsInTraining);
	askDraw(card.front);
	console.log('asking..', card);
};
