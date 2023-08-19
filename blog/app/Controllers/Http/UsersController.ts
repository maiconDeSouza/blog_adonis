import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async create({}: HttpContextContract) {
    return { msg: 'create' }
  }

  public async login({}: HttpContextContract) {
    return { msg: 'login' }
  }

  public async destroy({}: HttpContextContract) {
    return { msg: 'destroy' }
  }
}
