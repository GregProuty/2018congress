const express = require('express');
const app = express();
const hash = require('../static/hash.js');
const _ = require('underscore');

app.use('/', express.static('../dist'))

app.get('/details', function (req, res) {
  let json = hash[req.query.name];
  // changes 150369 to "$ 150369.00"
  json = _.mapObject(json, (val, key) => {
    if(typeof val === 'number' && key !== 'Cand_Zip') {
      return '$ ' + val.toFixed(2)
    }
    return val
  });
  res.send(JSON.stringify(json))
})

app.listen(3000, () => console.log('Server running on port: 3000 \nVisit localhost:3000 in your web browser'))

module.exports = function() {
  let app = express();
  app.set('port', 3000);
  return app;
};