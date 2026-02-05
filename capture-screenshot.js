const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch({
        headless: 'new'
    });

    const page = await browser.newPage();

    // Set viewport to mobile size (540x720 for Play Store screenshot)
    await page.setViewport({
        width: 540,
        height: 720,
        deviceScaleFactor: 2
    });

    // Navigate to the app
    await page.goto('https://subuh-injection.vercel.app/', {
        waitUntil: 'networkidle0'
    });

    // Wait a bit for animations to settle
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Take screenshot
    const screenshotPath = path.join(__dirname, 'screenshot1.png');
    await page.screenshot({
        path: screenshotPath,
        type: 'png'
    });

    console.log(`Screenshot saved to: ${screenshotPath}`);

    await browser.close();
})();
