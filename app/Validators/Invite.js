'use strict'

class Invite {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      invites: 'reuired|array',
      'invites.*': 'required|email'
    }
  }
}

module.exports = Invite
