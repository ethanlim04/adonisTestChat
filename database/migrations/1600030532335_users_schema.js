'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.integer("user_id").notNullable().unique()
      table.string("name").notNullable()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UsersSchema
