'use strict'

const Controller = require('egg').Controller

class UserController extends Controller {
  async list() {
    const { ctx } = this
    ctx.body = 'hi, user list'
  }
  async detail() {
    const { ctx } = this
    ctx.body = 'hi, user dettail'
  }
  async add() {
    const { ctx } = this
    ctx.body = 'hi, user add'
  }
  async del() {
    const { ctx } = this
    ctx.body = 'hi, user del'
  }
}

module.exports = UserController