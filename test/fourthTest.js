module.exports = {

    beforeEach : function (client) {
        client 
        .windowMaximize()
        .url('https://www.duckcreek.com/')
        .waitForElementVisible("a[role='button']")
        .click("a[role='button']")
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
        .pause(3000)
        .getCurrentUrl(function(url){
            console.log(url.value)
        })
        .end()
    },

    'Careers' : function (client) {
        client
        .waitForElementVisible('body')
        .click(by.xpath("//a[normalize-space()='Careers']"))
        .pause(2000)
        .waitForElementVisible(by.xpath("//a[normalize-space()='Life at Duck Creek']"))
        .click(by.xpath("//a[normalize-space()='Life at Duck Creek']"))
        .waitForElementVisible(by.xpath("//a[normalize-space()='Apply Now']"))
        .click(by.xpath("//a[normalize-space()='Apply Now']"))
        .waitForElementVisible("a[data-automation-id='jobTitle']")
        .getText("a[data-automation-id='jobTitle']", function(result){
            console.log(result.value);
        })
        .getCurrentUrl(function(url){
            console.log(url.value)
        })
        .end()
    },

    'Footer' : function (client) {
        client
        .waitForElementVisible("a.location-link")
        .getText("a.location-link", function(result) {
            console.log(result.value);
        })
        .assert.textContains(by.xpath("//div[normalize-space()='For General Enquiries']"), "For General Enquiries")
        .waitForElementVisible("div.copyright")
        .getText("div.copyright", function(result) {
            console.log(result.value);
        })
        .getCurrentUrl(function(url){
            console.log(url.value);
        })
        .end()
    },

    'Header' : function (client) {
        client 
        .waitForElementVisible('ul#main-menu')
        .getText('ul#main-menu', function(result){
         console.log(result.value);
        })
        .waitForElementVisible("li[class='cta menu-item menu-item-top-level']") 
        .getText("li[class='cta menu-item menu-item-top-level']", function(result) {
         console.log(result.value);
        })
        .getCurrentUrl(function(url){
            console.log(url.value)
        })
        .end()
       },

    'About Us' : function (client) {
     client
     .waitForElementVisible(by.xpath("//a[normalize-space()='About Us']"))
     .click(by.xpath("//a[normalize-space()='About Us']"))
     .waitForElementVisible(by.xpath("//a[normalize-space()='About Duck Creek']"))
     .click(by.xpath("//a[normalize-space()='About Duck Creek']"))
     .waitForElementVisible(by.xpath("//a[@class='wp-block-button__link wp-element-button'][normalize-space()='Life at Duck Creek']"))
     .getText(by.xpath("//a[@class='wp-block-button__link wp-element-button'][normalize-space()='Life at Duck Creek']"), function(result){
        console.log(result.value)
     })
     .click(by.xpath("//img[@class='entered lazyloaded']"))
     .getCurrentUrl(function(url){
        console.log(url.value)
     })
     .end()
    },

    'Talk to Sales': function (client) {
        client 
        .waitForElementVisible(by.xpath("//a[@class='menu-item-link'][normalize-space()='Talk to Sales']"))
        .click(by.xpath("//a[@class='menu-item-link'][normalize-space()='Talk to Sales']"))
        .waitForElementVisible(by.xpath("//h1[@class='wp-block-heading is-style-page-heading has-white-color has-text-color prepared animated']"))
        .getText(by.xpath("//h1[@class='wp-block-heading is-style-page-heading has-white-color has-text-color prepared animated']"), function(result){
        console.log(result.vlaue)
        })
        .waitForElementVisible("input[name='firstname']")
        .setValue("input[name='firstname']", "ABCD")
        .waitForElementVisible("input[name='lastname']")
        .setValue("input[name='lastname']", "FGHIJ")
        .waitForElementVisible("input[name='company']")
        .setValue("input[name='company']", "FreeLance Working")
        .waitForElementVisible("input[name='jobtitle']")
        .setValue("input[name='jobtitle']", "Mr")
        .waitForElementVisible("input[name='email']")
        .setValue("input[name='email']", "abcdefg@knoldus.com")
        .waitForElementVisible("textarea[name='message']")
        .setValue("textarea[name='message']", "Hii...This message is from Test Automation Studio")
        .waitForElementVisible(by.xpath("//form[@id='hsForm_b4a2ff0d-4fd5-4164-a9fe-19721a087b53']"))
        .getText(by.xpath("//form[@id='hsForm_b4a2ff0d-4fd5-4164-a9fe-19721a087b53']"), function(result){
            console.log(result.value);
        })
        .getCurrentUrl(function (url){
            console.log(url.value)
        })
        .end()
    },

    'Ecosystem' : function(client) {
     client
     .waitForElementVisible(by.xpath("//a[normalize-space()='Ecosystem']"))
     .click(by.xpath("//a[normalize-space()='Ecosystem']"))
     .waitForElementVisible(by.xpath("//a[normalize-space()='Systems Integrators']"))
     .click(by.xpath("//a[normalize-space()='Systems Integrators']"))
     .waitForElementVisible("div[class='heading prepared animated']")
     .getText("div[class='heading prepared animated']", function(result) {
        console.log(result.value);
     })
     .waitForElementVisible("a[href='https://www.duckcreek.com/partner/']")
     .click("a[href='https://www.duckcreek.com/partner/']")
     .waitForElementVisible("div[class='tabs']")
     .getText("div[class='tabs']", function(result) {
        console.log(result.value);
     })
     .end()
    },

    'Resources' : function (client) {
     client 
     .waitForElementVisible(by.xpath("//a[@class='menu-item-link'][normalize-space()='Resources']"))
     .click(by.xpath("//a[@class='menu-item-link'][normalize-space()='Resources']"))
     .waitForElementVisible(by.xpath("//a[@class='menu-item-link'][normalize-space()='Blog']"))
     .click(by.xpath("//a[@class='menu-item-link'][normalize-space()='Blog']"))
     .waitForElementVisible(by.xpath("//header[@class='blog-header']//div[@class='container']"))
     .getText(by.xpath("//header[@class='blog-header']//div[@class='container']"), function (result) {
        console.log(result.value);
     })
     .waitForElementVisible("div[class='post-title']")
     .getText("div[class='post-title']", function (result){
        console.log(result.value);
     })
     .getCurrentUrl(function(url){
        console.log(url.value)
     })
     .end()
    },

    /* after: function(browser) {
        if(browser.currentTest.results.errors > 0) {
            browser.pause()
        }
        browser.screenshot(),function(result){
        result.value.saveScreenshot('home/knoldus/nightWatch/fail.png')
        }
    } */
}