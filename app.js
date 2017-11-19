const express = require('express');
const app = express();

var port = process.env.PORT || 4000;
app.use('/', express.static(__dirname + '/public'));



app.listen(port);
