'use strict'

const Controller = require('egg').Controller

class NoteController extends Controller {
  async list() {
    const { ctx } = this
    ctx.body = 'hi, note list'
  }
  async detail() {
    const { ctx } = this
    ctx.body = 'hi, note detail'
  }
  async add() {
    const { ctx } = this
    ctx.body = 'hi, note add'
  }
  async del() {
    const { ctx } = this
    ctx.body = 'hi, note del'
  }
}

module.exports = NoteController