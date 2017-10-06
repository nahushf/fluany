import { getRandomInt } from 'shared/helpers'

const randomColor = () => getRandomInt(1, 4)
export const packStructured = {
  timeMinutes: 1,
  playing: false,
  percentage: 0,
  colorProgress: '',
  colorID: randomColor(),
  isChangingColor: false,
  isSetting: false
}
