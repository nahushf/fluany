import { getInLocal, saveInLocal } from '../popup/store/LocalStore';
import { getIndexThingById } from '../popup/reducers/stateManipulate';
import { getRandomInt } from '../shared/helpers';
import { dec, assocPath, remove, propEq, reject } from 'ramda';
import { drawElementAsk } from './ElementAsk.js';

export const loadPacks = async () => {
  try{
    const loadCards  = await getInLocal('cardsInTraining');
    return loadCards;
  }catch(e){
    const allPacks = await getInLocal('packState');
    const idPackToTrain = await getInLocal('idPackToTrain');
    const indexOfThePack = getIndexThingById(allPacks, idPackToTrain);
    const packInTraining = allPacks[indexOfThePack];
    const cardsInTraning = packInTraining.cards;
    saveInLocal('timeMinutes', packInTraining.timeMinutes);
    saveInLocal('cardsInTraining', cardsInTraning);
    return cardsInTraning;
  }
};

export const getRandomCard = (cards) => {
	const indexCardBeingUsed = getRandomInt(0, dec(cards.length));
	return cards[indexCardBeingUsed];
};

export const ask = async () => {
  const cardsInTraining = await loadPacks();
  if(cardsInTraining.length > 0){
    const card = getRandomCard(cardsInTraining);
    const doSuccess = () => {
      const newCards = reject(propEq('id', card.id), cardsInTraining);
      saveInLocal('cardsInTraining', newCards);
    };
    drawElementAsk(card.front, card.back, doSuccess);
  }
};
