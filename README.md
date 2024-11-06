# datamatt.io

Welcome to my personal website. This site is built with Remix and hosted on Cloudflare Pages. Python & SQL are my primary tools being in data, so this website is an exercise to see what I can build using other tools like TypeScript, React, Remix, and Tailwind (with a bit of help from Claude). Below are some helpful notes on setup, otherwise please browse around and enjoy!

## Development

- 📖 [Remix Cloudflare docs](https://remix.run/guides/vite#cloudflare)

Install the latest version of Wrangler:

```sh
npm install wrangler@latest
```

Run the dev server:

```sh
npm run dev
```

To run Wrangler:

```sh
npm run build
npm run start
```

## Typegen

Generate types for your Cloudflare bindings in `wrangler.toml`:

```sh
npm run typegen
```

You will need to rerun typegen whenever you make changes to `wrangler.toml`.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then, deploy your app to Cloudflare Pages simply push to the `main` branch and Cloudflare will automatically deploy your app.
