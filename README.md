# Discoord | A Discord Clone

## Prerequisites

### Rename `.env.example` to `.env.local`

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
LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_URL=
NEXT_PUBLIC_SITE_URL=
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
## Known issues

1. Issue with dialog component from [shadcn-ui/dialog](https://github.com/shadcn-ui/ui/issues/1595) - Screen Freeze after dialog close
