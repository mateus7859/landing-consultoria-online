import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
function scripts(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? scripts(path) : /\.(js|mjs)$/.test(path) ? [path] : [];
  });
}
const files = [...scripts(join(root, 'dist/scripts')), ...scripts(join(root, 'scripts'))];
for (const file of files) execFileSync(process.execPath, ['--check', file]);
const html = readFileSync(join(root, 'dist/index.html'), 'utf8');
const references = [...html.matchAll(/(?:src|href)="(\.\/[^"#]+)"/g)].map((match) => match[1]);
for (const reference of references) {
  if (!existsSync(resolve(root, 'dist', reference))) throw new Error(`Arquivo ausente: ${reference}`);
}
console.log(`OK: ${files.length} arquivos JavaScript e ${references.length} referências locais verificados.`);
