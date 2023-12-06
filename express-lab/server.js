const express = require('express')
const app = express();
app.get('/greeting', function (req, res) {
    res.send('<h1>Hello Stranger<h1>');
})

app.get('/greeting/:firstName', function(req, res) {
    console.log(req.params);
    res.send('hello ' +  'Its great to see you! ' + req.params.firstName);
});
  
app.listen(3000, function () {
    console.log('listen to port 3000');
});