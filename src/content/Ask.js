import { getInLocal, saveInLocal } from '../popup/store/LocalStore';
import { getIndexThingById } from '../popup/reducers/stateManipulate';
import { getRandomInt } from '../shared/helpers';
import { dec, insert, update, assoc, propEq, reject, find, head } from 'ramda';
import { drawElementAsk } from './ElementAsk.js';

export const loadPacks = async (idPackOfTheAlarm) => {
  const getElementById = (id, state) => find(propEq('id', id), state);
  const allPacks = await getInLocal('packState');
  const indexOfThePack = getIndexThingById(allPacks, idPackOfTheAlarm);
  const fullPackOfTheAlarm = allPacks[indexOfThePack];
  const cardsInTraning = fullPackOfTheAlarm.cards;
  const firstPackInTrain = [{id: idPackOfTheAlarm, cards: cardsInTraning}];
  let packsInTraning = false;

  /* If first time that is running the play, -> catch, else -> continue */
  try{
    packsInTraning = await getInLocal('packsInTraning');
    console.log('packsInTraning: ', packsInTraning);
  }catch(e){
    saveInLocal('packsInTraning', firstPackInTrain);
    return { packOnAlarm: head(firstPackInTrain), packsInTraning: firstPackInTrain };
  }

  const elementOfTheAlarm = getElementById(idPackOfTheAlarm, packsInTraning);

  if(elementOfTheAlarm){
    return { packOnAlarm: elementOfTheAlarm, packsInTraning };
  }

  //not found element, so insert
  const packsInTraningWithNewPack = insert(0, head(firstPackInTrain), packsInTraning);
  saveInLocal('packsInTraning', packsInTraningWithNewPack);
  return { packOnAlarm: head(firstPackInTrain), packsInTraning };
};

export const getRandomCard = (cards) => {
	const indexCardBeingUsed = getRandomInt(0, dec(cards.length));
	return cards[indexCardBeingUsed];
};

export const ask = async (idPackInTraning) => {
  const packs = await loadPacks(idPackInTraning);
  if(packs.packOnAlarm.cards.length > 0){
    const card = getRandomCard(packs.packOnAlarm.cards);
    const doSuccess = () => {
      const newCards = reject(propEq('id', card.id), packs.packOnAlarm.cards);
      const index = getIndexThingById(packs.packsInTraning, idPackInTraning);
      const packsWithoutCardThatHit = update(index, assoc('cards', newCards, packs.packsInTraning[index]), packs.packsInTraning);
      saveInLocal('packsInTraning', packsWithoutCardThatHit);
    };
    drawElementAsk(card.front, card.back, doSuccess);
  }
};
