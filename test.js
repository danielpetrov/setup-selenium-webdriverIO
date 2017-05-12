var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'internet explorer',
        platform: 'windows',
        version: 11,
        ensureCleanSession: true
    }
};
webdriverio
    .remote(options)
    .init()
    .url('http://buddy.works')
    .saveScreenshot('buddyworks.png')
    .end();
