var app = require('connect')();

// Messages are pretty-printed by default. To disable this feature, pass in `{pretty: false}` as arguments.
app.use(require('browser-logger')());

app.use('/', function(req, res) {
  console.log('1. single string');
  console.info([2, 'array']);
  console.warn('3. different types', ['array'], {key: 'value'});
  console.dir({key1: 1, 'key2': [2], "key3": {nested1: {nested2: 3}}});
  console.log('5. contains format strings: %d - %s - %j', 1.2, 'string', {key: 'value'}, 'extra');
  console.error(new Error('Oops...'));
  console.trace();
  console.time('Timer1');
  console.timeEnd('Timer1');

  res.end('Open your browser console to see the logs.');
});

require('http').createServer(app).listen(3000);
