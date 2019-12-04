'use strict'

module.exports = app => {
  require('./router/user')(app)
  require('./router/note')(app)
};
