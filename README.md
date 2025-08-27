# itau-front

Replica da interface web do Itaú, desenvolvida com **React**, **Next.js**, **TypeScript** e **TailwindCSS**, visando **performance**, **escalabilidade** e **alta manutenibilidade**.

---

## Tecnologias Utilizadas
- **React.js** – Componentização e reatividade.
- **Next.js** – Renderização híbrida (SSR/SSG), roteamento otimizado e SEO.
- **TypeScript** – Tipagem estática para maior segurança e robustez.
- **TailwindCSS** – Estilização utilitária e responsiva com alta produtividade.

---

## Descrição

Este projeto tem como objetivo replicar a experiência digital do Itaú em uma **interface moderna, responsiva e performática**, aplicando padrões de arquitetura limpa, separação de responsabilidades e boas práticas de desenvolvimento front-end.  

Além do foco em **UI/UX**, a aplicação segue princípios de **reuso de componentes**, **organização modular** e **padronização de código**.

---

## Estrutura do Projeto

```bash
itau-front/
├── public/           # Arquivos estáticos (imagens, ícones, fontes)
├── src/
│   ├── assets/       # Recursos estáticos internos (imagens, svgs, etc.)
│   ├── components/   # Componentes reutilizáveis da interface
│   ├── hooks/        # Hooks customizados para lógica de negócio
│   ├── pages/        # Páginas (Next.js - file-based routing)
│   ├── services/     # Comunicação com APIs e integrações
│   ├── utils/        # Funções utilitárias e helpers
│   └── App.tsx       # Componente principal
├── .env              # Variáveis de ambiente
├── package.json      # Dependências e scripts do projeto
└── README.md
