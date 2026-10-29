# Consultoria Online — Fase 1

Estrutura base de uma landing page para emagrecimento, hipertrofia e melhora
da composição corporal. HTML, CSS e JavaScript sem frameworks, bibliotecas,
fontes remotas ou instalação de dependências.

**Checkpoint:** `fase-1-estrutura-base`.

## Abrir o projeto

1. Extraia o ZIP por completo.
2. Abra `dist/index.html` no navegador. Os caminhos são relativos e o projeto
   funciona também sem servidor e sem conexão com a internet.

Opcionalmente, com Node.js 18 ou superior, execute na pasta do projeto:

```sh
npm start
```

Acesse `http://localhost:3000`. Use `Ctrl+C` para encerrar.
Não é necessário rodar `npm install`. O servidor fica restrito à máquina local.
Se a porta estiver ocupada, use `PORT=3001 npm start` no macOS/Linux ou
`$env:PORT=3001; npm start` no PowerShell.

## Editar

| O que alterar | Arquivo |
| --- | --- |
| Textos, título da aba, imagem e rótulo do botão | `dist/scripts/config.js` |
| Cores, fontes, largura e raios | `dist/styles/tokens.css` |
| Estilos gerais e acessibilidade | `dist/styles/base.css` |
| Layout dos componentes e responsividade | `dist/styles/components.css` |
| Cabeçalho | `dist/scripts/components/Header.js` |
| Seção inicial | `dist/scripts/components/Hero.js` |
| Botão | `dist/scripts/components/Button.js` |
| Rodapé | `dist/scripts/components/Footer.js` |
| Marca provisória | `dist/scripts/components/Brand.js` e `dist/assets/favicon.svg` |
| Montagem da página | `dist/scripts/main.js` |

Todos os textos provisórios estão identificados visualmente com `[SUBSTITUIR]`.
Os nomes das três áreas vieram do briefing. Nenhum resultado foi prometido.

Para substituir o espaço reservado da imagem, adicione um arquivo em
`dist/assets/images/`, defina `hero.image.src` como
`"./assets/images/sua-foto.webp"` e escreva uma descrição em `hero.image.alt`.
O recorte é ajustável em `hero.image.position` (por exemplo, `"center top"`).
Se a imagem não carregar, o espaço reservado continua visível.

O botão é propositalmente visual: `button.enabled` está como `false` e
`button.href` está vazio. Não existe integração, redirecionamento ou coleta.
Os campos deixam uma futura edição simples, mas esta entrega não os ativa.

## Organização

`dist/` contém os arquivos estáticos editáveis e prontos para abrir. Não é
uma pasta gerada: não a apague. Não há etapa de build.

- `dist/index.html`: documento principal.
- `dist/scripts/config.js`: conteúdo centralizado.
- `dist/scripts/components/`: cinco componentes independentes.
- `dist/scripts/utils/dom.js`: criação segura de elementos.
- `dist/scripts/main.js`: composição da página.
- `dist/styles/`: três arquivos CSS separados por responsabilidade.
- `dist/assets/`: favicon e pasta para imagens futuras.
- `scripts/serve.mjs`: servidor local opcional.
- `scripts/check.mjs`: conferência de sintaxe e referências.
- `docs/VALIDACAO.md`: registro da verificação final.
- `CHECKPOINT.md`: escopo congelado desta fase.
- `.openai/hosting.json`: identificação do projeto salvo no Sites.
- `package.json` e `.gitignore`: comandos e organização.

## Verificar

```sh
npm run check
```

Também abra a página nas larguras de 390 px (celular) e 1440 px (computador).
Confirme a ausência de rolagem horizontal, os textos completos, o empilhamento
da seção inicial e o botão desativado. O projeto usa HTML semântico, link para
pular ao conteúdo, contraste legível e fontes do sistema.

## Restaurar o checkpoint exportado

A cópia exportada inclui todos os arquivos do projeto, `checkpoint.json` e
`checkpoints/fase-1-estrutura-base.bundle`. O bundle contém o código e a tag Git,
sem credenciais. Git é opcional para abrir ou editar os arquivos.

Para recuperar o histórico em outra pasta:

```sh
git clone checkpoints/fase-1-estrutura-base.bundle consultoria-restaurada
cd consultoria-restaurada
git checkout fase-1-estrutura-base
```

## Limites desta entrega

Somente Fase 1: cabeçalho, seção inicial, botão provisório e rodapé. Sem login,
WhatsApp, formulário, pagamentos, analytics ou informações inventadas.
O projeto foi salvo sem implantação. A tag `noindex` é uma precaução e não é
um controle de acesso. Nenhum script deste projeto publica o site.

Para usar o código fora do Sites, basta a pasta `dist/`. O arquivo
`.openai/hosting.json` não é necessário para abrir o projeto localmente.
