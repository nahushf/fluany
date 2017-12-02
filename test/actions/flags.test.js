import {
  CHANGE_FILTER_PACKAGE,
  CHANGE_PAGINATION_PACKAGE,
  TOGGLE_ACTIVE_SEARCH,
  LOADING_EDIT_PACKAGES,
  CHANGE_CARD,
  CHANGE_MESSAGE,
  PROFILE_TOGGLE,
  IS_EDIT_PACKAGE,
  NEW_PACKAGE
} from 'constants/ActionTypes.js'
import {
  changeFilterPackage,
  toggleActiveSearch,
  newPackage,
  changePagination,
  isEditPackage,
  changeCard,
  toggleActiveProfile,
  changeMessage,
  editPackageLoading
} from 'actions/flags'

describe('Flag Actions', () => {
  describe('changeFilterPackage', () => {
    it('should return the correct type and the passed value', () => {
      const filterValue = ''
      const expectedResult = {
        type: CHANGE_FILTER_PACKAGE,
        value: filterValue
      }
      expect(changeFilterPackage(filterValue)).toEqual(expectedResult);
    });
  });

  describe('toggleActiveSearch', () => {
    it('should return the correct type and the passed value', () => {
      const toggle = true
      const expectedResult = {
        type: TOGGLE_ACTIVE_SEARCH,
      }
      expect(toggleActiveSearch()).toEqual(expectedResult);
    });
  });

  describe('newPackage', () => {
    it('should return the correct type and the passed value', () => {
      const is = true
      const expectedResult = {
        type: NEW_PACKAGE,
        value: is
      }
      expect(newPackage(is)).toEqual(expectedResult);
    });
  });

  describe('changePagination', () => {
    it('should return the correct type and the passed value', () => {
      const expectedResult = {
        type: CHANGE_PAGINATION_PACKAGE,
      }
      expect(changePagination()).toEqual(expectedResult);
    });
  });

  describe('isEditPackage', () => {
    it('should return the correct type and the passed value', () => {
      const value = {newpackage: true, title: 'a title'}
      const expectedResult = {
        type: IS_EDIT_PACKAGE,
        value
      }
      expect(isEditPackage(value)).toEqual(expectedResult);
    });
  });

  describe('changeCard', () => {
    it('should return the correct type and the passed value', () => {
      const value = {front: 'a front', back: 'a back'}
      const expectedResult = {
        type: CHANGE_CARD,
        value
      }
      expect(changeCard(value)).toEqual(expectedResult);
    });
  });

  describe('menuToggle', () => {
    it('should return the correct type and the passed value', () => {
      const value = true
      const expectedResult = {
        type: PROFILE_TOGGLE,
        value
      }
      expect(toggleActiveProfile(value)).toEqual(expectedResult);
    });
  });

  describe('changeMessage', () => {
    it('should return the correct type and the passed the message', () => {
      const message = { error: true, message:'invalid message' }
      const expectedResult = {
        type: CHANGE_MESSAGE,
        value: message
      }
      expect(changeMessage(message)).toEqual(expectedResult);
    });
  });

  describe('editPackageLoading', () => {
    it('should return the correct type and the passed the message', () => {
      const value = false
      const expectedResult = {
        type: LOADING_EDIT_PACKAGES,
        value
      }
      expect(editPackageLoading(value)).toEqual(expectedResult);
    });
  });
})
