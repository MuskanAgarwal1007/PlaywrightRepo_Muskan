//way one set timeout arugment feature
let browser = "Chrome"

function checkBrowserVersion(x)
{
    console.log("the message is delayed by 2s")
    setTimeout(x, 2000,browser)// Use setTimeout Arguments Feature
}

function callbackbrowser(browser)
{
console.log("Browser version using callback:"+ browser)
}

checkBrowserVersion(callbackbrowser)
//way 2 using arrow function
let browser = "Chrome"

function checkBrowserVersion(x)
{
    console.log("the message is delayed by 2s")
    setTimeout(() => x(browser), 2000);//using arrow function
}

function callbackbrowser(browser)
{
console.log("Browser version using callback:"+ browser)
}

checkBrowserVersion(callbackbrowser)

//using wrapper function
let browser = "Chrome"

function checkBrowserVersion(x)
{
    console.log("the message is delayed by 2s")
    setTimeout(function() {
    x(browser); 
}, 2000)
}

function callbackbrowser(browser)
{
console.log("Browser version using callback:"+ browser)
}

checkBrowserVersion(callbackbrowser)

//incorrect original logic(?)
let browser = "Chrome"

function checkBrowserVersion(x)
{
    console.log("the message is delayed by 2s")
    setTimeout(x, 2000)
    setTimeout(x(browser), 2000)
}

function callbackbrowser(browser)
{
console.log("Browser version using callback:"+ browser)
}

checkBrowserVersion(callbackbrowser)