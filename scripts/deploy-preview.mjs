import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const { name } = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));

function branchAlias(branch) {
  const slug = branch.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const alias = `branch-${slug}`;
  if (!slug || alias.length + 1 + name.length > 63) {
    throw new Error('Use a branch name that produces a nonempty preview slug of at most 43 characters.');
  }
  return alias;
}

if (process.argv.includes('--check')) {
  assert.equal(branchAlias('main'), 'branch-main');
  assert.equal(branchAlias('Feature/123_New'), 'branch-feature-123-new');
  assert.equal(branchAlias('123'), 'branch-123');
  assert.equal(branchAlias('a'.repeat(43)), `branch-${'a'.repeat(43)}`);
  assert.throws(() => branchAlias('a'.repeat(44)));
  assert.throws(() => branchAlias(''));
  assert.throws(() => branchAlias('///'));
  console.log('Preview branch alias checks passed.');
} else {
  const branch = execFileSync('git', ['branch', '--show-current'], { encoding: 'utf8' }).trim();
  const alias = branchAlias(branch);
  execFileSync('pnpm', ['build'], { stdio: 'inherit' });
  execFileSync('pnpm', ['exec', 'wrangler', 'versions', 'upload', '--preview-alias', alias], { stdio: 'inherit' });
}
