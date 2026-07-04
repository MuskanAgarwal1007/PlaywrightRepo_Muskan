import { chromium, test, webkit, firefox} from "@playwright/test";

test(" RedBus Launch",
async ()=>{ 
    const browser1=await chromium.launch({headless:false, channel:"msedge"});
    const context1=await browser1.newContext();
    const page1=await context1.newPage();
    await page1.goto("https://www.redbus.in/");

    let link1 = page1.url();
    let title1=await page1.title();

     console.log("redbus Url is"+ link1 +" with tile "+ title1);

    await page1.waitForTimeout(3000);
    page1.close()
});
test(" Flipkart Launch",
async ()=>{ 
    const browser1=await firefox.launch({headless:false});
    const context1=await browser1.newContext();
    const page1=await context1.newPage();
    await page1.goto("https://www.flipkart.com/");

    let link2 = page1.url();
    let title2=await page1.title();

    console.log("Flpikart Url is"+ link2 +" with tile "+ title2);

    await page1.waitForTimeout(3000);
    page1.close()
});