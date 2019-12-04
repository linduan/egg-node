// app/router/news.js
module.exports = app => {
  app.router.get('/user/list', app.controller.user.list)
  app.router.get('/user/detail', app.controller.user.detail)
  app.router.get('/user/add', app.controller.user.add)
  app.router.get('/user/del', app.controller.user.del)
};
  
  