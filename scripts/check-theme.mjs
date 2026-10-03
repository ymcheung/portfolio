import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';

const directory = new URL('../dist/client/_astro/', import.meta.url);
const styles = readdirSync(directory).filter((file) => file.endsWith('.css'));
assert(styles.length > 0, 'Build the site before checking its theme CSS.');
const css = styles.map((file) => readFileSync(new URL(file, directory), 'utf8')).join('\n');
for (const variable of ['--lightningcss-light', '--lightningcss-dark']) {
  assert(!css.includes(`var(${variable}`) || css.includes(`${variable}:`),
    `Built theme colors reference ${variable} without defining it.`);
}
console.log('Built theme color references resolve.');
