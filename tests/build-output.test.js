// Checks the built site in dist/. Run through `npm test`, which builds first.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const read = (file) => readFileSync(new URL(`../dist/${file}`, import.meta.url), 'utf-8');

test('home page introduces Pustalorc with the hub line', () => {
  const html = read('index.html');
  assert.match(html, /Vicente &quot;Pustalorc&quot; Pastor|Vicente "Pustalorc" Pastor/);
  assert.match(
    html,
    /Developer, tinkerer, and occasional game modder\. This is my corner of the internet\./
  );
});

test('home page links to the portfolio, email and GitHub', () => {
  const html = read('index.html');
  assert.match(html, /href="https:\/\/dev\.pustalorc\.com"/);
  assert.match(html, /href="mailto:contact@pustalorc\.com"/);
  assert.match(html, /href="https:\/\/github\.com\/Pustalorc"/);
});

test('home page no longer links to YouTrack', () => {
  assert.doesNotMatch(read('index.html'), /track\.pustalorc\.com/);
});

test('home page canonical URL is the domain root', () => {
  assert.match(read('index.html'), /<link rel="canonical" href="https:\/\/pustalorc\.com\/">/);
});

test('404 page is built as a flat file', () => {
  assert.match(read('404.html'), /command not found:/);
});

test('robots.txt allows crawling and points at the sitemap', () => {
  const robots = read('robots.txt');
  assert.match(robots, /^User-agent: \*$/m);
  assert.match(robots, /^Allow: \/$/m);
  assert.match(robots, /^Sitemap: https:\/\/pustalorc\.com\/sitemap-index\.xml$/m);
});

test('sitemap lists the home page', () => {
  assert.match(read('sitemap-0.xml'), /<loc>https:\/\/pustalorc\.com\/<\/loc>/);
});
