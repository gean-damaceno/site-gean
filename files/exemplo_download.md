# 📥 Exemplo Prático de Downloads

## Como Adicionar Seus Próprios Arquivos

### 1. Coloque seus arquivos na pasta `files/`

Por exemplo:
```
site_gean/
├── files/
│   ├── meu_slide.pdf
│   ├── meu_codigo.zip
│   ├── meus_dados.csv
│   └── meu_relatorio.pdf
```

### 2. Adicione links nas páginas

Use este formato nas suas páginas `.qmd`:

```markdown
::: {.callout-note}
## 📥 Downloads Disponíveis

- [📊 Meu Slide (PDF)](files/meu_slide.pdf)
- [📋 Meu Código (ZIP)](files/meu_codigo.zip)
- [📋 Meus Dados (CSV)](files/meus_dados.csv)
- [📋 Meu Relatório (PDF)](files/meu_relatorio.pdf)
:::
```

### 3. Exemplos de Uso

#### Para Slides:
```markdown
[📊 Slides Estatística (PDF)](files/slides_estatistica.pdf)
```

#### Para Códigos:
```markdown
[📋 Scripts R (ZIP)](files/scripts_r.zip)
```

#### Para Dados:
```markdown
[📋 Dados de Exemplo (CSV)](files/dados_exemplo.csv)
```

#### Para Relatórios:
```markdown
[📋 Relatório Técnico (PDF)](files/relatorio_tecnico.pdf)
```

### 4. Ícones Sugeridos

- 📊 **Slides/Apresentações**
- 📋 **Códigos/Scripts**
- 📋 **Dados/CSV**
- 📚 **Livros/Apostilas**
- 🗺️ **Mapas/Dados Espaciais**
- 📋 **Relatórios/Documentos**
- 🎤 **Conferências**
- 🌍 **Internacionais**

### 5. Dicas Importantes

1. **Nomes de arquivos**: Use nomes descritivos sem espaços
2. **Tamanho**: Mantenha arquivos menores que 50MB
3. **Formato**: Use formatos amplamente compatíveis
4. **Organização**: Mantenha uma estrutura lógica

### 6. Exemplo Completo

```markdown
## Meu Projeto

Descrição do meu projeto...

::: {.callout-note}
## 📥 Downloads Disponíveis

- [📊 Slides da Apresentação (PDF)](files/apresentacao_projeto.pdf)
- [📋 Códigos do Projeto (ZIP)](files/codigos_projeto.zip)
- [📋 Dados Utilizados (CSV)](files/dados_projeto.csv)
- [📋 Relatório Final (PDF)](files/relatorio_projeto.pdf)
:::
```

### 7. Verificação

Após adicionar os arquivos:
1. Coloque os arquivos na pasta `files/`
2. Adicione os links nas páginas
3. Teste os downloads no site
4. Verifique se os links funcionam corretamente 