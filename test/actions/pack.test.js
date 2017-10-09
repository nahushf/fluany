import {
  ADD_PACKAGE,
  REMOVE_PACKAGE,
  CHANGE_PACKAGE_COLORID,
  CHANGE_PACKAGE_TITLE,
  CHANGE_PACKAGE_DESCRIPTION,
  IS_EDIT_PACKAGE,
  CHANGE_TIME_PACKAGE,
  IS_EDITING_CARD,
  CHANGE_PACKAGE_COLOR,
  REMOVE_CARD,
  LOAD_PACKS_LOCAL,
  CREATE_CARD,
  CHANGE_PLAY_PACK,
  PERCENT_PROGRESS_PACK,
  IMPORT_PACKAGE,
  COLOR_PROGRESS_PACK,
  ALL_NO_EDITING_CARD,
  IS_SETTING
} from 'constants/ActionTypes'
import {
  addPackage,
  loadPackLocal,
  removePackage,
  changePackageTitle,
  changePackageDescription,
  changeColorID,
  changePackageColor,
  changeTimePackage,
  isSetting,
  changePercentProgress,
  changeColorProgress,
  changePlayPack,
  importPackage,
  isEditingCard,
  removeCard,
  createCard,
  allNoEditingCard
} from 'actions/pack'

describe('Pack Actions', () => {
  describe('addPackage', () => {
    it('should return the correct type and the passed package', () => {
      const newpackage = {front: 'front', back: 'back'}
      const expectedResult = {
        type: ADD_PACKAGE,
        value: newpackage
      }
      expect(addPackage(newpackage)).toEqual(expectedResult);
    });
  });

  describe('loadPackLocal', () => {
    it('should return the correct type and the passed local package', () => {
      const newpackage = {front: 'front', back: 'back'}
      const expectedResult = {
        type: LOAD_PACKS_LOCAL,
        value: newpackage
      }
      expect(loadPackLocal(newpackage)).toEqual(expectedResult);
    });
  });

  describe('removePackage', () => {
    it('should return the correct type and the passed package id', () => {
      const id = '1'
      const expectedResult = {
        type: REMOVE_PACKAGE,
        id
      }
      expect(removePackage(id)).toEqual(expectedResult);
    });
  });

  describe('changePackageTitle', () => {
    it('should return the correct type and the passed package title', () => {
      const title = 'I am a title'
      const id = '1'
      const expectedResult = {
        type: CHANGE_PACKAGE_TITLE,
        value: title,
        id
      }
      expect(changePackageTitle(id, title)).toEqual(expectedResult);
    });
  });

  describe('changePackageDescription', () => {
    it('should return the correct type and the passed package description', () => {
      const description = 'I am a description'
      const id = '1'
      const expectedResult = {
        type: CHANGE_PACKAGE_DESCRIPTION,
        value: description,
        id
      }
      expect(changePackageDescription(id, description)).toEqual(expectedResult);
    });
  });

  describe('changeColorID', () => {
    it('should return the correct type and the passed package color', () => {
      const colorid = '1'
      const id = '1'
      const expectedResult = {
        type: CHANGE_PACKAGE_COLORID,
        value: colorid,
        id
      }
      expect(changeColorID(id, colorid)).toEqual(expectedResult);
    });
  });

  describe('changePackageColor', () => {
    it('should return the correct type and the passed a bool to know if is changing the package color', () => {
      const isChanging = true
      const id = '1'
      const expectedResult = {
        type: CHANGE_PACKAGE_COLOR,
        value: isChanging,
        id
      }
      expect(changePackageColor(isChanging, id)).toEqual(expectedResult);
    });
  });

  describe('changeTimePackage', () => {
    it('should return the correct type and the passed a package time', () => {
      const time = 2
      const id = '1'
      const expectedResult = {
        type: CHANGE_TIME_PACKAGE,
        value: time,
        id
      }
      expect(changeTimePackage(time, id)).toEqual(expectedResult);
    });
  });

  describe('isSetting', () => {
    it('should return the correct type and the passed a package isSetting', () => {
      const value = false
      const id = '1'
      const expectedResult = {
        type: IS_SETTING,
        value,
        id
      }
      expect(isSetting(value, id)).toEqual(expectedResult);
    });
  });

  describe('changePercentProgress', () => {
    it('should return the correct type and the passed a package percent progress', () => {
      const percent = 10
      const id = '1'
      const expectedResult = {
        type: PERCENT_PROGRESS_PACK,
        value: percent,
        id
      }
      expect(changePercentProgress(percent, id)).toEqual(expectedResult);
    });
  });

  describe('changeColorProgress', () => {
    it('should return the correct type and the passed a package percent color', () => {
      const percentColor = '2'
      const id = '1'
      const expectedResult = {
        type: COLOR_PROGRESS_PACK,
        value: percentColor,
        id
      }
      expect(changeColorProgress(percentColor, id)).toEqual(expectedResult);
    });
  });

  describe('changePlayPack', () => {
    it('should return the correct type and the passed a package play status', () => {
      const status = true
      const id = '1'
      const expectedResult = {
        type: CHANGE_PLAY_PACK,
        value: status,
        id
      }
      expect(changePlayPack(status, id)).toEqual(expectedResult);
    });
  });

  describe('importPackage', () => {
    it('should return the correct type and the passed a new package imported', () => {
      const newpackage = {back: 'a back', front: 'a front'}
      const expectedResult = {
        type: IMPORT_PACKAGE,
        value: newpackage,
      }
      expect(importPackage(newpackage)).toEqual(expectedResult);
    });
  });

  describe('isEditingCard', () => {
    it('should return the correct type and the passed a boolean to know if is editing card', () => {
      const value = true
      const prop = 'isChangingColor'
      const id = '1'
      const indexCard = 0
      const expectedResult = {
        type: IS_EDITING_CARD,
        value,
        prop,
        id,
        indexCard
      }
      expect(isEditingCard(value, prop, id, indexCard)).toEqual(expectedResult);
    });
  });

  describe('removeCard', () => {
    it('should return the correct type and the passed the package and indice of card', () => {
      const id = '1'
      const indexCard = '1'
      const expectedResult = {
        type: REMOVE_CARD,
        id,
        indexCard
      }
      expect(removeCard(id, indexCard)).toEqual(expectedResult);
    });
  });

  describe('createCard', () => {
    it('should return the correct type and the passed the package id, card id and the card value', () => {
      const id = '1'
      const idCard = 1
      const value = { front: 'front', back: 'back' }
      const expectedResult = {
        type: CREATE_CARD,
        id,
        idCard,
        value
      }
      expect(createCard(id, idCard, value)).toEqual(expectedResult);
    });
  });


  describe('allNoEditingCard', () => {
    it('should return the correct type', () => {
      const id = '1'
      const expectedResult = {
        type: ALL_NO_EDITING_CARD,
        id
      }
      expect(allNoEditingCard(id)).toEqual(expectedResult);
    });
  });
})
