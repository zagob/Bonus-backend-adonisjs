'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Project extends Model {

  projects () {
    return this.hasMany('App/Models/Project')
  }
}

module.exports = Project
