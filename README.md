## Setup testing tools locally

open cmd as administrator and run:

`npm install --global --production windows-build-tools`

## Testing in Chrome:

![chrome logo](images/chrome.jpg)

#### Start selenium server locally:
`npm run start-chrome-server`
#### Run tests
`npm run start`

## Testing in IE:

![ie logo](images/ie.jpg)

#### Start selenium server locally:
`npm run start-ie-server`
#### Run tests
`npm run start`
http://stackoverflow.com/questions/14952348/not-able-to-launch-ie-browser-using-selenium2-webdriver-with-java
http://stackoverflow.com/questions/37456099/protractor-test-in-ie

First, check your default zoom level in Internet Explorer. If it's not 100% then do the following steps:

* Open Internet Explorer.
* Press Alt + X and then click on Internet Options.
* Click on the Advanced tab.
* Place a check mark on "Reset Zoom level for new Windows and tab"
* Press Apply and ok.
* Close and open Internet Explorer window and check if the Default Zoom is set to 100 %.