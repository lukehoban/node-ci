var express = require('express'),
    http = require('http'),
    morgan = require('morgan'),
    redis = require('redis');

var app = express();

app.use(morgan('combined'));

var client = redis.createClient(
  process.env.REDIS_1_PORT_6379_TCP_PORT || '127.0.01',
  process.env.REDIS_1_PORT_6379_TCP_ADDR || 6379
);

app.get('/', function(req, res, next) {
  client.incr('visits', function(err, visits) {
    if(err) return next(err);
    res.send('<h1>Demo Counter</h1><br/>You have viewed this page ' + visits + ' times!\n');
  });
});

http.createServer(app).listen(process.env.PORT || 3000, function() {
  console.log('Listening on port ' + (process.env.PORT || 3000));
});
