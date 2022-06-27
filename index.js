const puppeteer = require('puppeteer');

const screenShot = async () => {
	
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	
	await page.goto('https://kealanparr.com');
	await page.screenshot({path: 'homepage.png'});
	await browser.close();
};

screenShot();