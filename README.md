# Discoord | Discord Clone

### Create `.env.local` file at root of your project

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

### Setup prisma for Planetscale mySQL database

```shell
npx prisma generate
npx prisma db push
```

## Start the App

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
