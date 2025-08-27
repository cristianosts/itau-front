# itau-front

Replica da interface web do Itaú, desenvolvida com **Next.js (App Router)**, **React**, **TypeScript** e **TailwindCSS**, priorizando **performance**, **escalabilidade** e **arquitetura limpa**.

---

## Tecnologias Utilizadas
- **Next.js (App Router)** – Roteamento moderno.
- **React 18** – Componentização, hooks e reatividade.
- **TypeScript** – Tipagem estática para maior confiabilidade e manutenibilidade.
- **TailwindCSS** – Estilização utilitária, responsiva e altamente produtiva.
- **Vercel** – Deploy e CI/CD nativo para projetos Next.js.

---

## Descrição

O projeto é uma reprodução da **experiência digital Itaú**, trazendo uma interface **moderna, responsiva e escalável**.  
A arquitetura foi organizada para garantir **clareza**, **reuso de componentes** e **facilidade de manutenção**, alinhada a boas práticas do ecossistema **Next.js + TypeScript**.  

---

## Estrutura do Projeto

```bash
itau-front/
├── public/               # Arquivos estáticos (imagens, ícones, fontes)
├── src/
│   ├── app/              # Estrutura do App Router (Next.js 13+)
│   ├── assets/           # Recursos estáticos internos (svgs, imagens, etc.)
│   ├── components/       # Componentes reutilizáveis da UI
│   │   ├── container.tsx
│   │   ├── header.tsx
│   │   ├── itemMenu.tsx
│   │   ├── search.tsx
│   │   ├── sectionHero.tsx
│   │   └── sectionServices.tsx
│   └── ...
├── .gitignore
├── .gitattributes
├── LICENSE
