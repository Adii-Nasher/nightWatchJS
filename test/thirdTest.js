module.exports = {

    before : function(browser) {
        browser
        .windowMaximize()
        .url('https://www.demoblaze.com')

         console.log('Starting the execution');
    },

   'Login': function(client) {
    client
    .waitForElementVisible('body')
    .assert.titleEquals('STORE')
    .click(by.css("a#login2"))
    .waitForElementVisible("h5#logInModalLabel")
    .pause(2000)
    .setValue(by.xpath("//input[@id='loginusername']"), 'Adii123')
    .pause(2000)
    .setValue(by.xpath("//input[@id='loginpassword']"), 'ABCDEFGH')
    .pause(2000)
    .click(by.xpath("//button[normalize-space()='Log in']"))
    .pause(2000)
    .acceptAlert()
    .waitForElementVisible('a#logout2')
    .click('a#logout2')
   },

   /*
   'Sign up': function(client) {
     client
     .waitForElementVisible('a#signin2')
     .click("a#signin2")
     .waitForElementVisible("h5#signInModalLabel")
     .setValue(by.xpath("//input[@id='sign-username']"), 'Adii123')
     .pause(2000)
     .setValue(by.xpath("//input[@id='sign-password']"), 'ABCDEFGH')
     .pause(2000)
     .click(by.xpath("//button[normalize-space()='Sign up']"))
     .pause(2000)
     .acceptAlert()
     .waitForElementVisible("//div[@id='signInModal']//span[@aria-hidden='true'][normalize-space()='×']")
     .click("//div[@id='signInModal']//span[@aria-hidden='true'][normalize-space()='×']")
   },
   */

   'Contact' : function(client) {
    client
    .waitForElementVisible('body')
    .click(by.xpath("//a[normalize-space()='Contact']"))
    .waitForElementVisible(by.xpath("//h5[@id='exampleModalLabel']"))
    .setValue(by.xpath("//input[@id='recipient-email']"), 'abcd@gmail.com')
    .pause(2000)
    .setValue(by.xpath("//input[@id='recipient-name']"), 'Adii123')
    .pause(2000)
    .setValue(by.xpath("//textarea[@id='message-text']"), 'Hii, Have a Nice Day!!!')
    .pause(2000)
    .click(by.xpath("//button[normalize-space()='Send message']"))
    .pause(2000)
    .acceptAlert()
   },

   'About Us' : function(client) {
    client
    .waitForElementVisible('body')
    .click(by.xpath("//a[normalize-space()='About us']"))
    .pause(2000)
    .waitForElementVisible(by.xpath("//div[@id='videoModal']//span[@aria-hidden='true'][normalize-space()='×']"))
    .click(by.xpath("//div[@id='videoModal']//span[@aria-hidden='true'][normalize-space()='×']"))
   },

   'Cart' : function(client) {
    client
    .waitForElementVisible('body')
    .click("a#cartur")
    .waitForElementVisible(by.xpath("//h2[normalize-space()='Products']"))
    .assert.textContains(by.xpath("//h2[normalize-space()='Products']"), "Products")
    .waitForElementVisible(by.xpath("//a[@id='nava']"))
    .click(by.xpath("//a[@id='nava']"))
   },

   'Product Description' : function(client) {
    client
    .waitForElementVisible(by.xpath("//div[@id='tbodyid']//div[1]//div[1]//div[1]"))
    .click(by.xpath("//a[normalize-space()='Samsung galaxy s6']"))
    .pause(2000)
    .assert.textContains(by.xpath("//h2[normalize-space()='Samsung galaxy s6']"), "Samsung galaxy s6")
    .pause(2000)
    .waitForElementVisible(by.xpath("//a[normalize-space()='Add to cart']"))
    .click(by.xpath("//a[normalize-space()='Add to cart']"))
    .pause(2000)
    .acceptAlert()
   },

   'Product Listing Page' : function (client) {
    client
    .waitForElementVisible(by.xpath("//a[@id='nava']"))
    .click(by.xpath("//a[@id='nava']"))
    .pause(2000)
    .click(by.xpath("//a[4]"))
    .assert.textContains(by.xpath("//a[4]"), "Monitors")
    .waitForElementVisible(by.xpath("//div[@id='tbodyid']//div[1]//div[1]//div[1]"))
    .isPresent(by.xpath("//img[@src='imgs/apple_cinema.jpg']"))
    .isVisible(by.xpath("//h5[normalize-space()='$400']"))
    .isVisible(by.xpath("//div[@id='tbodyid']//div[1]//div[1]//div[1]//p[1]"))
   },

   'Carousel' : function (client) {
    client
    .waitForElementVisible('body')
    .isPresent(by.xpath("//img[@alt='First slide']"))
    .pause(2000)
    .click(by.xpath("//span[@class='carousel-control-next-icon']"))
    .pause(2000)
    .isPresent(by.xpath("//img[@alt='Second slide']"))
   },

   after : function() {
    console.log("Execution Done");
   }
}
