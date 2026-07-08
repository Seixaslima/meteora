# Meteora

Loja virtual (front-end) desenvolvida em **React**, com listagem de produtos por categoria, busca, modal de detalhes do produto e layout responsivo. Construída durante o [Challenge Front-end 7ª edição da Alura](https://www.alura.com.br/challenges/front-end-7).

## 🔗 Links

- **GitHub:** [Seixaslima/meteora](https://github.com/Seixaslima/meteora)
- **Live Site:** [meteora-tawny.vercel.app](https://meteora-tawny.vercel.app/)

## ✨ Features

- **Listagem de Produtos** - Produtos consumidos de uma API (my-json-server) com dados de nome, preço e categoria
- **Filtro por Categoria** - Navegação entre categorias via rota dinâmica (`/categoria/:categoria`)
- **Busca de Produtos** - Pesquisa por termo com resultado em página dedicada (`/busca/:busca`)
- **Modal de Produto** - Detalhes do produto em modal, sem sair da listagem
- **Newsletter** - Modal de cadastro de e-mail
- **Menu Sanduíche** - Navegação mobile com abrir/fechar animado
- **Detecção de Dispositivo** - Context que identifica Mobile/Tablet/Desktop pela largura da tela
- **Layout Responsivo** - Construído com Bootstrap + CSS Modules

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 18.2 | Biblioteca de UI |
| **React Router DOM** | 6.13 | Roteamento SPA |
| **React Bootstrap** | 2.8 | Componentes de UI |
| **Bootstrap** | 5.3 | Grid e estilos base |
| **CSS Modules** | - | Estilos com escopo por componente |
| **React Icons** | 4.10 | Ícones |
| **React Scripts (CRA)** | 5.0 | Build e dev server |

## 📁 Project Structure

```
src/
├── Context/                     # React Context (estado global)
│   ├── Produtos.js             # Fetch e filtro de produtos (categoria/busca)
│   └── Dispositivo.js          # Detecção de Mobile/Tablet/Desktop
├── Paginas/                     # Páginas da aplicação
│   ├── Inicial/                # Home
│   ├── PaginaCategoria/        # Listagem por categoria
│   └── PaginaBusca/            # Resultado de busca
├── componentes/
│   ├── PaginaPadrao/           # Layout base (Cabeçalho + Rodapé + Outlet)
│   ├── Cabecalho/              # Header com logo e menu
│   ├── MenuSanduiche/          # Menu mobile
│   ├── ListaMenu/              # Itens de navegação
│   ├── Banner/                 # Banner da home
│   ├── Categorias/              # Grade de categorias (+ Card)
│   ├── SecaoProdutos/          # Grade de produtos
│   ├── CardProduto/            # Card de produto (+ ModalProduto)
│   ├── ModalPadrao/            # Modal genérico reutilizável
│   ├── Newsletter/              # Bloco de newsletter (+ ModalNewsletter)
│   └── Rodape/                 # Footer
├── json/                        # Dados estáticos (categorias, produtos, db)
├── routes.jsx                   # Definição de rotas (react-router-dom)
└── index.js                     # Entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Seixaslima/meteora.git

# Navigate to project
cd meteora

# Install dependencies
npm install

# Run development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build    # Gera build otimizado em /build
```

### Tests

```bash
npm test          # Executa testes com React Testing Library
```

## 🔄 Routing & Data Flow

| Route | Component | Data Source |
|-------|-----------|------------|
| `/` | `Inicial` | `categorias.json` + API de produtos |
| `/categoria` | `PaginaCategoria` | API de produtos (todas categorias) |
| `/categoria/:categoria` | `PaginaCategoria` | API de produtos filtrada por categoria |
| `/busca/:busca` | `PaginaBusca` | API de produtos filtrada por termo |

Todas as rotas são renderizadas dentro do layout `PaginaPadrao`, que envolve as páginas com Cabeçalho e Rodapé. Os produtos são buscados via `ProdutosProvider` (Context API), que consome a API pública `my-json-server.typicode.com/Seixaslima/meteora-db`.

## 💡 What I Learned

- **Context API** - Estado global de produtos e detecção de dispositivo sem prop drilling
- **React Router com rotas aninhadas** - Layout compartilhado via `<Outlet />` em `PaginaPadrao`
- **Consumo de API externa** - Fetch dinâmico com query params para filtro por categoria/busca
- **CSS Modules + Bootstrap** - Combinação de grid utilitário com estilos isolados por componente
- **Componentização de Modais** - Modal genérico (`ModalPadrao`) reaproveitado em produto e newsletter

## 🎯 Future Improvements

### High Priority
- [ ] **Migrar para JS puro nos Contexts** - Trocar `require` por `import` em `Produtos.js` e `Dispositivo.js`
- [ ] **Tratamento de erro no fetch** - Feedback visual em caso de falha na API
- [ ] **Loading states** - Skeleton/spinner enquanto os produtos carregam

### Medium Priority
- [ ] **Testes automatizados** - Cobrir componentes principais com React Testing Library
- [ ] **Acessibilidade** - Revisão de contraste, `alt`s e navegação por teclado
- [ ] **Corrigir erros de digitação nos JSONs** - Ex: "bolça" em `categorias.json`

### Nice to Have
- [ ] **Migração para TypeScript**
- [ ] **Carrinho de compras**
- [ ] **Dark mode**

## 📚 Useful Resources

- [React Documentation](https://react.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Alura Challenges](https://www.alura.com.br/challenges)

## 👨‍💻 Author

- **GitHub:** [@Seixaslima](https://github.com/Seixaslima/)
- **Email:** lucasseixaslima2@gmail.com
