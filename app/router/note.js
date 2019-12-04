// app/router/admin.js
module.exports = app => {
    app.router.get('/note/list', app.controller.note.list)
    app.router.get('/note/detail', app.controller.note.detail)
    app.router.get('/note/add', app.controller.note.add)
    app.router.get('/note/del', app.controller.note.del)
};