<h1 align="center">Portfolio</h1>

> Portfólio pessoal desenvolvido com tecnologias modernas para criar experiências digitais interativas e responsivas.

<p align="center">
  <img src="./docs/static/demo.gif" alt="Portfolio Demo">
</p>

Este é o **Meu Portfolio**, uma aplicação web que demonstra projetos, habilidades e tecnologias utilizadas, com foco em design moderno, performance e boas práticas de desenvolvimento.

## 📌 Table of Contents
- [🔹 Sobre o Portfolio](#-sobre-o-portfolio)
- [🚀 Começando](#-começando)
- [⚙️ Tecnologias](#-tecnologias)
- [📂 Estrutura do Projeto](#-estrutura-do-projeto)
- [📜 Licença](#-licença)

## 🔹 Sobre o Portfolio

Este portfólio apresenta meus projetos e competências como desenvolvedor frontend e fullstack, com destaque para:

- **Experiência interativa** usando animações com `motion/react`.
- **Design responsivo e moderno** com `Tailwind CSS`.
- **Código seguro e escalável** com `TypeScript`.
- **Qualidade e consistência** usando `Prettier`, `ESLint` e `Commitlint`.
- **Componentização avançada** com `shadcn/ui` e React.

O objetivo é proporcionar uma navegação fluida e mostrar habilidades técnicas de forma visualmente atraente.

## 🚀 Começando
### 📋 Pré-requisitos

Antes de começar, certifique-se de ter os seguintes itens:
- Git (opcional, mas recomendado para clonar o repositório);
- Node.js;
- Gerenciador de pacotes (Estou usando [pnpm](https://pnpm.io/pt/));
- Conta no [EmailJS](https://www.emailjs.com/) para enviar e-mails pelo portfolio.

### 🔧 Instalação

1. Clone o repositório
```bash
git clone https://github.com/JulioC090/portfolio.git
```

2. Instale as dependências
```bash
pnpm install
pnpm approve-builds
```

3. [Configure o EmailJS](https://www.emailjs.com/docs/tutorial/overview/)
  - Adicione um serviço de e-mail
  - Crie um modelo de e-mail

4. Adicione suas credenciais do `EmailJS` em `example.env`:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID="seu_service_id"
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID="seu_template_id"
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY="sua_chave_publica"
```

5. Renomeie example.env para .env
```bash
mv example.env .env
```

6. Execute o projeto
```
pnpm dev
```


## ⚙️ Tecnologias

O portfolio foi desenvolvido utilizando:

- **[Next.js](https://nextjs.org/)** – Framework React para SSR, SSG e API routes.
- **[Tailwind CSS](https://tailwindcss.com/)** – Estilização utilitária para design rápido e responsivo.
- **[motion/react](https://www.framer.com/motion/)** – Animações fluidas e interativas.
- **[TypeScript](https://www.typescriptlang.org/)** – Tipagem estática para maior confiabilidade do código.
- **[Prettier](https://prettier.io/)** – Formatação consistente do código.
- **[ESLint](https://eslint.org/)** – Linter para manter qualidade e boas práticas.
- **[Commitlint](https://commitlint.js.org/)** – Garantia de commits padronizados.
- **[shadcn/ui](https://ui.shadcn.com/)** – Biblioteca de componentes pré-construídos e personalizáveis.

## 📂 Estrutura do Projeto

```
public/ # Assets estáticos (imagens, gifs, ícones)
src/
├── app/ # Entrypoint e configuração do Next.js
├── components/ # Componentes reutilizáveis da UI
├── features/ # Funcionalidades específicas
│ ├── navigation/ # Navbar, menus
│ ├── sections/ # Seções do site (hero, projetos, contato)
│ └── theme/ # Gerenciador de temas
├── hooks/ # Hooks customizados
└── lib/ # Bibliotecas internas/utilitárias
.commitlintrc # Configuração Commitlint
.gitignore # Arquivos ignorados pelo git
components.json # JSON de referência de componentes
env.d.ts # Tipagens para variáveis de ambiente
eslint.config.mjs # Configuração do ESLint
next-env.d.ts # Tipagens Next.js
next.config.ts # Configuração Next.js
```

## 📜 Licença

Este portfólio é open-source e liberado sob a licença MIT.  
Sinta-se à vontade para usar, estudar e contribuir!