<img width="1898" height="896" alt="image" src="https://github.com/user-attachments/assets/3dc3c160-8bd7-4000-9509-7df959f0e9d9" />
<img width="1895" height="895" alt="image" src="https://github.com/user-attachments/assets/1c85df1b-9dee-4146-921a-8791a6ecf75c" />
<img width="1890" height="895" alt="image" src="https://github.com/user-attachments/assets/0f38e067-3a17-4740-aa04-a9beba527fdc" />
<img width="1899" height="865" alt="image" src="https://github.com/user-attachments/assets/6e7020de-2117-421b-97b6-4c8c361f597c" />



# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv@0.13.1 create --template minimal --no-types --install npm ./
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
