module.exports = {
    before : function (client) {
        client 
        .windowMaximize()
        .url('https://www.duckcreek.com/')

        console.log('Starting the Execution')
    },

    'HomePage' : function (client) {
        client
        .waitForElementVisible('body')
        .pause(2000)
        .isPresent(by.xpath("//a[@class='home-link']//img[@alt='Duck Creek']"))
        .click(by.xpath("//a[normalize-space()='Products']"))
        .waitForElementVisible(by.xpath("//a[normalize-space()='Duck Creek Suite']"))
        .click(by.xpath("//a[normalize-space()='Duck Creek Suite']"))
        .pause(2000)
        .waitForElementVisible(by.xpath("//a[@class='cta purple']"))
        .assert.textContains(by.xpath("//a[@class='cta purple']"), "Learn More")
        .click(by.xpath("//a[@class='cta purple']"))
        .waitForElementVisible(by.xpath("//img[@class='entered lazyloaded']"))
        .click(by.xpath("//img[@class='entered lazyloaded']"))
    },

    'Careers' : function(client) {
        client
        .waitForElementVisible('body')
        .click(by.xpath("//a[normalize-space()='Careers']"))
        .pause(2000)
        .waitForElementVisible(by.xpath("//a[normalize-space()='Dive in to Duck Creek']"))
        .click(by.xpath("//a[normalize-space()='Dive in to Duck Creek']"))
        .pause(2000)
        .assert.textContains(by.xpath("//a[normalize-space()='Apply Here']"),"Apply Here")
        .end();
    }
}