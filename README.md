connect-browser-logger
======================

Displays Node.js server-side logs in your browser console.

## Usage

First, install it in your project's directory:

    npm install browser-logger

Then add this line to your app's configuration:

    app.use(require('browser-logger')());

Messages are pretty-printed by default. To disable this feature, pass in `{pretty: false}` as arguments:

    app.use(require('browser-logger')({pretty: false}));

Finally, install [this Chrome extension](https://chrome.google.com/webstore/detail/klkbgnmlfeofkjekneeoaekibkkhnlab).

Now, messages logged via `console.log()` (and other methods on the `console` object) in your app will display in Chrome's console.

![screenshot](http://i.imgur.com/fuD1V.png "screenshot")

See the `example` directory for a working example.
