
# <img src="https://cloud.githubusercontent.com/assets/378023/15063285/cf554e40-1383-11e6-9b9c-45d381b03f9f.png" width="60px" align="center" alt="Devtron icon"> Devtron Neo

An [Electron](https://www.electronjs.org/) [DevTools](https://developer.chrome.com/docs/devtools/)
extension to help you inspect, monitor, and debug your app.

<!-- [![Travis Build Status](https://travis-ci.org/electron/devtron.svg?branch=master)](https://travis-ci.org/electron/devtron) -->
<!-- [![AppVeyor Build status](https://ci.appveyor.com/api/projects/status/t9eqglwos7kyv6w3/branch/master?svg=true)](https://ci.appveyor.com/project/electron-bot/devtron/branch/master) -->
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![downloads:?](https://img.shields.io/npm/dm/devtron-next.svg)](https://www.npmjs.com/packages/devtron-next)

![screenshot](https://cloud.githubusercontent.com/assets/378023/15036521/e3e7cd06-12ca-11e6-8054-ed0455015f05.png)

## Features

  * **IPC monitor** to track and inspect the messages sent and received
    between the renderer and main processes in your app.
  * **Event inspector** that shows the events and listeners that are registered
    in your app on the core Electron APIs such as the window, the app, and the
    processes.
  * **App Linter** that checks your apps for possible issues and missing
    functionality.

<!-- ## Installing

```sh
npm install --save-dev devtron-neo
```

Then execute the following from the Console tab of your running Electron app's
developer tools:

```js
require('devtron-neo').install()
```

You should then see a `Devtron` tab added. -->

## Disabled Node Integration

If your application's `BrowserWindow` was created with `nodeIntegration` set
to `false` then you will need to expose some globals via a [preload](https://www.electronjs.org/docs/latest/api/browser-window/#new-browserwindowoptions)
script to allow Devtron access to Electron APIs:

```js
window.__devtron = {require: require, process: process}
```

Then restart your application and Devtron should successfully load. You may
want to guard this assignment with a `if (process.env.NODE_ENV === 'development')`
check to ensure these variables aren't exposed in production.

## Developing locally

```
git clone https://github.com/maopy/devtron
cd devtron
npm install
npm start
```

This will start a process that watches and compiles the extension as files
are modified.

Then open the Console tab of your Electron app and run the following with the
path updated for the location that you've cloned devtron to:

```js
require('/Users/me/code/devtron').install()
```

Then a Devtron tab should appear and it will now be enabled for that
application.

You can reload the extension by closing and reopening the dev tools.

<!-- ### Running in a browser

To make developing and debugging the extension easier, you can run it in a
Chrome tab that will talk remotely to a running Electron app over HTTP.

- Set the `DEVTRON_DEBUG_PATH` environment variable to the path of the cloned
  devtron repository.
- Start your Electron application.
- Click the **Devtron** tab.
- You should then see the following messages logged to the **Console** tab:

  > Devtron server listening on http://localhost:3948
  >
  > Open file:///Users/me/devtron/static/index.html to view

- Then open `/Users/me/devtron/static/index.html` in Chrome
- The page there will talk remotely to the running Electron app so you'll
  be able to fully interact with each pane with real data.
  
### Additional Notes

- `require('devtron-next').install()` cannot be called before the `ready` event of the `app` module has been emitted. -->

## Contributing

Have an idea for something this extension could do to make debugging Electron
apps easier? Please [open an issue](https://github.com/maopy/devtron-neo/issues/new).

Pull requests are also welcome and appreciated. Run `npm test` to run the
existing tests. This project uses the [standard JavaScript style](http://standardjs.com).

## License

MIT
