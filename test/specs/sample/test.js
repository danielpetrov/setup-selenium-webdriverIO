describe('DuckDuckGo search', function() {
    it('searches for WebdriverIO', function() {
        browser.url('https://duckduckgo.com/');
        //browser.saveScreenshot('png.png')
        browser.setValue('#search_form_input_homepage', 'W');
        browser.click('#search_button_homepage');
        var title = browser.getTitle();
        console.log('Title is: ' + title);
        // outputs: "Title is: W (Software) at DuckDuckGo"
    });
});