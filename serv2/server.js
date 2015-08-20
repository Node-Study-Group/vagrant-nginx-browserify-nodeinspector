require('express')()
  .use(require('express').static('public'))
  .listen(3001);
