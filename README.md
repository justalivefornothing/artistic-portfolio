# Artistic Portfolio

Portfolio site blending **Van Gogh–inspired painterly backgrounds** with **Apple-style glassmorphism** — frosted cards, layered depth, and restrained motion.

Design research and three full concepts live in [`ideas.md`](./ideas.md). Selected direction: **Luminous Impressionism** (painterly backdrop + sharp glass foreground).

## Stack

React, Vite, Tailwind, Framer Motion-ready layout (`client/` + `server/` monorepo style). Package manager: **pnpm**.

## Run

```bash
pnpm install
pnpm dev
pnpm build
```

## Layout

```
client/     frontend
server/     Express host (if used)
shared/     shared types
ideas.md    design concepts and implementation roadmap
```

## Design notes

- Display + body type pairing chosen for artistic vs premium contrast
- Glass cards over blurred swirl fields
- Parallax and short entrance transitions; respect `prefers-reduced-motion` in production polish

## License

Private unless stated otherwise.
