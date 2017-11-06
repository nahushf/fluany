/**
 * @fileOverview The condition to manages if is production or development environment
 * @name configureStore.js
 * @license GNU General Public License v3.0
 */

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod')
} else {
  module.exports = require('./configureStore.dev')
}
