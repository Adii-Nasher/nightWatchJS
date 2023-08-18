 module.exports = {
    '@tags' : 'Home',
    'Homepage' : function(client) {
        client
        .windowMaximize()
        .url('https://www.demoblaze.com')
        .waitForElementVisible('body')
        .assert.titleEquals('STORE')
        .pause(1000)
        .click(by.xpath('//a[4]'))
        .pause(1000)
        .assert.textContains('a.hrefch','Apple monitor 24')
        .pause(1000)
    },

    'Product Tile' : function(client) {
    client
    .waitForElementVisible('body')
    .click(by.xpath('//a[3]'))
    .waitForElementVisible('body')
    .assert.textContains('a.hrefch', 'Sony vaio i5')
    },

    'Contact Us' : function(client) {
        client
        .pause(2000)
        .click(by.xpath("//a[normalize-space()='Contact']"))
        .pause(2000)
        .waitForElementVisible('#exampleModalLabel')
        .assert.textContains('#exampleModalLabel', 'New message')
        .waitForElementVisible('#recipient-email')
        .sendValue('#recipient-email','abc@example.com')
        .waitForElementVisible('#recipient-name')
        .sendValue('#recipient-name','ABC DEF')
        .waitForElementVisible('#message-text')
        .sendValue('#message-text','My message is to contact you!!!')
        .waitForElementVisible("button[onclick='send()']")
        .click("button[onclick='send()']")
        .end();
    }
 };

