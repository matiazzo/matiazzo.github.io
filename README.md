# André Matiazzo - Portfolio

Portfolio pessoal de André Matiazzo, Staff Product Designer.

## Setup Local

### Pré-requisitos

- [Node.js](https://nodejs.org/) v16 ou superior
- npm (incluído com Node.js)

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/matiazzo/matiazzo.github.io.git
cd matiazzo.github.io
```

2. Instale as dependências:
```bash
npm install
```

### Executar Localmente

Para iniciar um servidor local na porta 3000:

```bash
npm run dev
```

O site estará disponível em: `http://localhost:3000`

#### Alternativas de servidor

Você também pode usar qualquer um destes servidores locais:

**com Python 3:**
```bash
python -m http.server 8000
```

**com Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**com http-server (npm):**
```bash
npx http-server
```

### Estrutura do Projeto

```
├── index.html          # Página principal
├── css/                # Arquivos de estilos
│   ├── custom.css     # CSS customizado
│   └── tachyons.min.css
├── fav/               # Favicons e ícones
├── img/               # Imagens
├── p5/                # Sketches p5.js (opcional)
├── cv/                # CV/Currículo
└── package.json       # Configuração do projeto
```

### Desenvolvimento

- Edite os arquivos HTML/CSS normalmente
- O servidor local recarrega automaticamente quando você salva (refresh manual no browser)
- Sem build step necessário - é um site estático

### Deploy

O site é deployado automaticamente via GitHub Pages quando você faz push para o branch `master`.

---

**Contato:** [matiazzoandre@gmail.com](mailto:matiazzoandre@gmail.com)
