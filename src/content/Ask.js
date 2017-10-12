import dec from 'ramda/src/dec'
import insert from 'ramda/src/insert'
import update from 'ramda/src/update'
import assoc from 'ramda/src/assoc'
import propEq from 'ramda/src/propEq'
import reject from 'ramda/src/reject'
import head from 'ramda/src/head'
import { getInLocal, saveInLocal,  getLocal } from 'store/LocalStore'
import { getIndexThingById } from 'reducers/stateManipulate'
import { getRandomInt,  getElementByIdM } from 'shared/helpers'
import { drawElementAsk } from './ElementAsk.js'
import Maybe from 'folktale/maybe'

export const loadPacks = async (idAlarmPack) => {
  const firstPackInTrain = await getLocal('packState')
        .map(allPacks => {
          console.log('allPacks', allPacks)
          return getElementByIdM(idAlarmPack, allPacks)
            .map(packInAlarm => {
              return [{
                id: idAlarmPack,
                cards: packInAlarm.cards
              }]
            }).value
        })
        .run()
        .promise()

  return await getLocal('packsInTraning')
    .orElse( _ => {
      saveInLocal('packsInTraning', firstPackInTrain)
      return Maybe.Just({
        packOnAlarm: head(firstPackInTrain),
        packsInTraning: firstPackInTrain
      })
    })
    .map(training => {
      console.log('training', training)
      return getElementByIdM(idAlarmPack, training)
        .map( packOnAlarm => ({ packOnAlarm, training }))
        .orElse( _ => {
          const packsInTrainingWithNewPack = insert(0, head(firstPackInTrain), training)
          saveInLocal('packsInTraning', packsInTrainingWithNewPack)
          return Maybe.Just({
            packOnAlarm: head(firstPackInTrain),
            training
          })
        })
    })
    .run()
    .promise()
}

export const getRandomCard = (cards) => {
  const indexCardBeingUsed = getRandomInt(0, dec(cards.length))
  return cards[indexCardBeingUsed]
}

export const ask = async (idAlarmPack, alarmName, periodInMinutes) => {
  const packs = await loadPacks(idAlarmPack)
  packs.matchWith({
    Just: ({ value }) => {

      const { packOnAlarm, training } = value
      console.log('packOnAlarm', packOnAlarm)
      console.log('training', training)
      if (packOnAlarm.cards.length > 0) {
        const card = getRandomCard(packOnAlarm.cards)
        const doSuccess = () => {
          const newCards = reject(propEq('id', card.id), packOnAlarm.cards)
          const index = getIndexThingById(training, idAlarmPack)
          const packsWithoutCardThatHit = update(index, assoc('cards', newCards, training[index]), training)
          saveInLocal('packsInTraning', packsWithoutCardThatHit)
        }

        drawElementAsk(card.front, card.back, doSuccess, alarmName, periodInMinutes)
      }

    },
    Nothing: () => console.log('Nothing was found')
  })
}
