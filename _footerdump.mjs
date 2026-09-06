import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 375, height: 1200 } });
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.evaluate(() => document.querySelector("footer")?.scrollIntoView());
await page.waitForTimeout(400);

const dump = await page.evaluate(() => {
  const footer = document.querySelector("footer");
  const all = footer.querySelectorAll("*");
  const results = [];
  for (const el of all) {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) continue;
    const tag = el.tagName.toLowerCase();
    const text = el.childNodes.length && el.childNodes[0].nodeType === 3 ? el.textContent.trim().slice(0, 30) : "";
    results.push({
      tag,
      text,
      x: Math.round(r.x),
      y: Math.round(r.y),
      w: Math.round(r.width),
      h: Math.round(r.height),
      right: Math.round(r.right),
    });
  }
  return { viewportWidth: window.innerWidth, elements: results };
});
console.log(JSON.stringify(dump, null, 1));
await browser.close();
