<h1 align="center">Fluany</h1>

<div align="center">
  <img alt="logo" src="https://github.com/victorvoid/fluany/blob/master/src/assets/fluflu.svg" width="128">
</div>

<div align="center">
  <strong>Fluany is a chrome extension to memorize and study anything, fast and easy while you're surfing the Internet.</strong>
</div>

<div align="center">
  <h3>
    <a href="https://www.fluany.com">
      Website
    </a>
    <span> | </span>
    <a href="https://www.fluany.com/packages">
      Packages
    </a>
    <span> | </span>
    <a href="https://github.com/victorvoid/fluany/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22">
      Contribute
    </a>
    <span> | </span>
    <a href="https://gitter.im/fluany/">
      Chat
    </a>
  </h3>
</div>

## How Can I Contribute?
  Read [Contributing to Fluany](CONTRIBUTING.md)
  
## How to run development environment

You should do this before editing any code to see how it works.

1. run `gulp` which will start webpack-dev-server
2. in Chrome open `chrome://extensions/`
3. check `Developer mode`
4. click on `Load unpacked extension`
5. add REPOSITORY_DIRECTORY/build
6. Now you can check background script via link in extension `Inspect views: background page` and you will see some messages in console
7. Navigate to any http or **https** page and open development tools and console. You can see messages from content scripts.
8. Find extension icon right from adress bar.
  1. Click with left mouse button to show html content
  2. Click with right mouse button and select `Inspect Popup`. Then in console you can see some messages
9. You can edit your codebase with almost 100% hot/full reload support.
10. You can to use [remote-redux-devtools](https://github.com/zalmoxisus/remote-redux-devtools).

## LICENSE

The code is available under the [MIT License](LICENSE.md).
