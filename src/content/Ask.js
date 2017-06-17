import { getInLocal, saveInLocal } from '../popup/store/LocalStore';
import { getIndexThingById } from '../popup/reducers/stateManipulate';
import { getRandomInt } from '../shared/helpers';
import { dec, insert, assocPath, remove, propEq, reject, find, head } from 'ramda';
import { drawElementAsk } from './ElementAsk.js';

export const loadPacks = async (idPackOfTheAlarm) => {
  const getElementById = (id, state) => find(propEq('id', id), state);
  const allPacks = await getInLocal('packState');
  const indexOfThePack = getIndexThingById(allPacks, idPackOfTheAlarm);
  const fullPackOfTheAlarm = allPacks[indexOfThePack];
  const cardsInTraning = fullPackOfTheAlarm.cards;
  const firstPackInTrain = [{id: idPackOfTheAlarm, cards: cardsInTraning}];
  let packsInTraning = false;

  try{
    packsInTraning = await getInLocal('packsInTraning');
  }catch(e){
    saveInLocal('packsInTraning', firstPackInTrain);
    return head(firstPackInTrain);
  }

  const elementOfTheAlarm = getElementById(idPackOfTheAlarm, packsInTraning);

  if(elementOfTheAlarm){
    return elementOfTheAlarm;
  }

  //not found element, so create
  const packsInTraningWithNewPack = insert(0, head(firstPackInTrain), packsInTraning);
  saveInLocal('packsInTraning', packsInTraningWithNewPack);
  return head(firstPackInTrain);
};

export const getRandomCard = (cards) => {
	const indexCardBeingUsed = getRandomInt(0, dec(cards.length));
	return cards[indexCardBeingUsed];
};

export const ask = async (idPackInTraning) => {
  const packOnAlarm = await loadPacks(idPackInTraning);
  if(packOnAlarm.cards.length > 0){
    const card = getRandomCard(packOnAlarm.cards);
    const doSuccess = () => {
      // const newCards = reject(propEq('id', card.id), packOnAlarm.cards);
      // saveInLocal('cardsInTraining', newCards);
    };
    drawElementAsk(card.front, card.back, doSuccess);
  }
};
