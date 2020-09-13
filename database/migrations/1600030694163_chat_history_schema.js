'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChatHistorySchema extends Schema {
  up () {
    this.create('chat_histories', (table) => {
      table.increments()
      table.integer("meeting_id").notNullable().references("id").inTable("meetings")
      table.integer("user").notNullable().references("id").inTable("users")
      table.string("content").notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('chat_histories')
  }
}

module.exports = ChatHistorySchema
