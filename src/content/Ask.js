import dec from 'ramda/src/dec'
import isEmpty from 'ramda/src/isEmpty'
import insert from 'ramda/src/insert'
import update from 'ramda/src/update'
import assoc from 'ramda/src/assoc'
import propEq from 'ramda/src/propEq'
import reject from 'ramda/src/reject'
import head from 'ramda/src/head'
import { saveInLocal,  getLocal } from 'store/LocalStore'
import { getRandomInt,  getElementByIdM } from 'shared/helpers'
import { getIndexThingById } from 'reducers/stateManipulate'
import { drawElementAsk } from './ElementAsk.js'
import { Just } from 'folktale/maybe'

export const loadPacks = async (idAlarmPack) => {
  const firstPackInTrain = await getLocal('packState')
        .map(allPacks => {
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
      return Just({
        packOnAlarm: head(firstPackInTrain),
        packsInTraning: firstPackInTrain
      })
    })
    .map(training => {
      return getElementByIdM(idAlarmPack, training)
        .map( packOnAlarm => ({ packOnAlarm, training }))
        .orElse( _ => {
          const packsInTrainingWithNewPack = insert(0, head(firstPackInTrain), training)
          saveInLocal('packsInTraning', packsInTrainingWithNewPack)
          return Just({
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
      if (!isEmpty(packOnAlarm.cards)) {
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
