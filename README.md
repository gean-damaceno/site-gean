# Site Gean Damaceno

Site pessoal desenvolvido com Quarto.

## Estrutura do Projeto

### Arquivos Públicos (visíveis no GitHub):
- `*.qmd` - Arquivos Quarto que geram o site
- `_quarto.yml` - Configuração do Quarto
- `styles.css` - Estilos personalizados
- `imagem/` - Imagens do site
- `files/` - Arquivos para download público

### Arquivos Privados (não enviados para GitHub):
- `*.R` - Scripts R privados
- `*.csv`, `*.xlsx` - Dados privados
- `dados/` - Pasta com dados sensíveis
- `scripts_privados/` - Scripts que não devem ser públicos

## Como Usar

1. Para adicionar conteúdo público: edite os arquivos `.qmd`
2. Para adicionar conteúdo privado: coloque em pastas não versionadas
3. Faça commit apenas dos arquivos que devem ser públicos

## Deploy

O site é publicado automaticamente via GitHub Actions em:
https://gean-damaceno.github.io/site-gean/
