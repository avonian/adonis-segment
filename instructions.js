'use strict'

const path = require('path')

module.exports = async function (cli) {
  try {
    await cli.makeConfig('segment.js', path.join(process.cwd(), './node_modules/adonis-segment/templates/config.mustache'))
    cli.command.completed('create', 'config/segment.js')
  } catch (error) {
    // Ignore errors
  }
}