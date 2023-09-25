# Discoord | Discord Clone

### Create `.env.local` file at root of your project

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
DATABASE_URL=
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
```

### Setup prisma for Planetscale mySQL database

```shell
npx prisma generate
npx prisma db push
```

## Start the App

```bash
bun dev
# or
npm run dev
# or
yarn dev
# or
pnpm dev
```
