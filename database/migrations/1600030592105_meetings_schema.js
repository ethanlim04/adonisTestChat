'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MeetingsSchema extends Schema {
  up () {
    this.create('meetings', (table) => {
      table.increments()
      table.integer("meeting_id")
      table.timestamps()
    })
  }

  down () {
    this.drop('meetings')
  }
}

module.exports = MeetingsSchema
