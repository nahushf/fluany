import { sinon, spy } from 'sinon'
import { mount, render, shallow } from 'enzyme'

global.sinon = sinon
global.spy = spy

global.mount = mount
global.render = render
global.shallow = shallow
global.localStorage = { getItem () {}, setItem () {} }
global.chrome = window.chrome = {
  extension: {
    getURL: function() {}
  },
  runtime: {
    sendMessage: function() {}
  },
  storage: {
    sync: {
      get: function() {},
      set: function() {}
    }
  },
  i18n: {
    getMessage () {}
  }
};
