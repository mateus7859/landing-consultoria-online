import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const port = Number(process.env.PORT || 3000);
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon' };
const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    let path = resolve(root, '.' + pathname);
    if (path !== root.slice(0, -1) && !path.startsWith(root.endsWith(sep) ? root : root + sep)) {
      response.writeHead(403).end('Acesso negado');
      return;
    }
    if ((await stat(path)).isDirectory()) path = resolve(path, 'index.html');
    const body = await readFile(path);
    response.writeHead(200, { 'Content-Type': (types[extname(path)] || 'application/octet-stream') + (['.html', '.css', '.js', '.svg'].includes(extname(path)) ? '; charset=utf-8' : ''), 'Cache-Control': 'no-store' });
    response.end(body);
  } catch {
    response.writeHead(404).end('Arquivo não encontrado');
  }
});
server.on('error', (error) => {
  console.error('Não foi possível abrir o servidor local:', error.message);
  process.exitCode = 1;
});
server.listen(port, '127.0.0.1', () => console.log(`Consultoria Online: http://localhost:${port}`));
