import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.post('', 'UsersController.create')
  Route.delete('', 'UsersController.destroy')
  Route.post('/login', 'UsersController.login')
}).prefix('/users')

Route.group(() => {
  Route.resource('', 'PostsController').apiOnly()
}).prefix('/post')
