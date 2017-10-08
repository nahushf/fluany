import dec from 'ramda/src/dec'
import insert from 'ramda/src/insert'
import update from 'ramda/src/update'
import assoc from 'ramda/src/assoc'
import propEq from 'ramda/src/propEq'
import reject from 'ramda/src/reject'
import find from 'ramda/src/find'
import head from 'ramda/src/head'
import { getInLocal, saveInLocal } from 'store/LocalStore'
import { getIndexThingById } from 'reducers/stateManipulate'
import { getRandomInt } from 'shared/helpers'
import { drawElementAsk } from './ElementAsk.js'

export const loadPacks = async (idPackOfTheAlarm) => {
  const getElementById = (id, state) => find(propEq('id', id), state)
  const allPacks = await getInLocal('packState')
  const indexOfThePack = getIndexThingById(allPacks, idPackOfTheAlarm)
  const fullPackOfTheAlarm = allPacks[indexOfThePack]
  const cardsInTraning = fullPackOfTheAlarm.cards
  const firstPackInTrain = [{id: idPackOfTheAlarm, cards: cardsInTraning}]
  let packsInTraning = false

  /* If first time that is running the play, -> catch, else -> continue */
  try {
    packsInTraning = await getInLocal('packsInTraning')
  } catch (e) {
    saveInLocal('packsInTraning', firstPackInTrain)
    return { packOnAlarm: head(firstPackInTrain), packsInTraning: firstPackInTrain }
  }

  const elementOfTheAlarm = getElementById(idPackOfTheAlarm, packsInTraning)

  if (elementOfTheAlarm) {
    return { packOnAlarm: elementOfTheAlarm, packsInTraning }
  }

  // not found element, so insert
  const packsInTraningWithNewPack = insert(0, head(firstPackInTrain), packsInTraning)
  saveInLocal('packsInTraning', packsInTraningWithNewPack)
  return { packOnAlarm: head(firstPackInTrain), packsInTraning }
}

export const getRandomCard = (cards) => {
  const indexCardBeingUsed = getRandomInt(0, dec(cards.length))
  return cards[indexCardBeingUsed]
}

export const ask = async (idPackInTraning, alarmName, periodInMinutes) => {
  const packs = await loadPacks(idPackInTraning)
  if (packs.packOnAlarm.cards.length > 0) {
    const card = getRandomCard(packs.packOnAlarm.cards)
    const doSuccess = () => {
      const newCards = reject(propEq('id', card.id), packs.packOnAlarm.cards)
      const index = getIndexThingById(packs.packsInTraning, idPackInTraning)
      const packsWithoutCardThatHit = update(index, assoc('cards', newCards, packs.packsInTraning[index]), packs.packsInTraning)
      saveInLocal('packsInTraning', packsWithoutCardThatHit)
    }
    drawElementAsk(card.front, card.back, doSuccess, alarmName, periodInMinutes)
  }
}
getInLocal('packsInTraning').then(packs=> console.log('------> ', packs))
