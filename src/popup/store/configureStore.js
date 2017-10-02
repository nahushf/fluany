/**
 * @fileOverview The condition to manages if is production or development environment
 * @name configureStore.js
 * @author <a href="https://github.com/victorvoid">Victor Igor</a>
 * @license MIT
 */

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod')
} else {
  module.exports = require('./configureStore.dev')
}
