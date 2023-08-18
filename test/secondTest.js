module.exports = {
    '@disabled' : true,
    'About us' : function(browse) {
        browse
        .windowMaximize()
        .url('https://www.demoblaze.com')
        .waitForElementVisible('body')
        .click(by.xpath("//a[normalize-space()='About us']"))
        .waitForElementVisible('h5#videoModalLabel')
        .element.findAll(by.xpath("//button[@aria-label='Close']")).nth(4).click()
        .end();
    }
}