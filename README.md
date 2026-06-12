# Site Dom Antônio Carlos

Landing page institucional para Dom Antônio Carlos, criada com Next.js, TypeScript e Tailwind CSS.

## Objetivo

Gerar pedidos de proposta para palestras, workshops e ações formativas em saúde emocional, TDAH adulto, liderança, educação e riscos psicossociais, além de captar contatos interessados em atendimento psicanalítico presencial ou online.

## Tecnologias

- Next.js
- TypeScript
- Tailwind CSS
- React

## Como rodar localmente

```powershell
npm install
npm run dev
```

Abra:

```text
http://localhost:3000
```

## Build de produção

```powershell
npm run build
npm run start
```

## Estrutura principal

- `src/app/page.tsx`: página inicial
- `src/app/politica-de-privacidade/page.tsx`: política de privacidade
- `src/components/ContactForm.tsx`: formulário que abre WhatsApp com dados preenchidos
- `src/data/site.ts`: contatos, navegação e dados estruturados da página
- `public/images/`: imagens utilizadas no site

## Observações

- O formulário não grava dados em banco.
- O envio atual abre o WhatsApp com a mensagem preenchida.
- Áreas de depoimentos, instituições atendidas, registros e logotipos estão reservadas para inclusão futura somente com autorização.
- Conteúdos relacionados à NR-1 são apresentados como ações educativas complementares.
