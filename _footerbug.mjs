import { chromium } from "playwright";
const browser = await chromium.launch();
for (const width of [360, 375, 390, 414]) {
  const page = await browser.newPage({ viewport: { width, height: 1000 } });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.evaluate(() => document.querySelector("footer")?.scrollIntoView());
  await page.waitForTimeout(300);
  const info = await page.evaluate(() => {
    const link = document.querySelector('a[href*="google.com/maps"]');
    const group = link.parentElement;
    const groupRect = group.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    const footerRect = document.querySelector("footer").getBoundingClientRect();
    return {
      groupWidth: groupRect.width,
      groupRight: groupRect.right,
      footerRight: footerRect.right,
      linkOverflowsGroup: linkRect.right > groupRect.right + 1,
      groupOverflowsFooter: groupRect.right > footerRect.right + 1,
      groupScrollWidth: group.scrollWidth,
      groupClientWidth: group.clientWidth,
    };
  });
  console.log(`width ${width}px:`, info);
  await page.close();
}
await browser.close();
