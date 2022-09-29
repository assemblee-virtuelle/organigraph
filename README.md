[![SemApps](https://badgen.net/badge/Powered%20by/SemApps/28CDFB)](https://semapps.org)

# OrganiGraph

Open-source software developed with the objective of helping organizations make their operations visible. It
allows to visualize the structure of the organization (in the form of a hierarchy of "circles") and, for each circle, 
to see its sub-circles, the people involved, the meeting schedule, documents, news, etc. A simple tool that allows 
anyone to see what is going on and potentially get involved.

![Capture d’écran de 2022-09-14 19-03-08](https://user-images.githubusercontent.com/17931931/190217662-db3e3690-437c-4a15-9e41-7c1c06bbadc9.png)

## Running instances

- [Jardiniers du Nous](https://cercles.jardiniersdunous.org) *(read-only mode)*
- [Assemblée Virtuelle](https://cercles.assemblee-virtuelle.org)

## Getting started

Requirements:

- Node (v14.16 recommended)
- Yarn
- Docker and docker-compose

### Launch the triplestore

```
docker-compose up -d
```

### Launch the backend

```
cd backend
yarn install
yarn run dev
```

Moleculer will function in [REPL mode](https://moleculer.services/docs/0.14/moleculer-repl.html). 
You should be able to type commands such as `services` and view the results.

### Launch the frontend

```
cd frontend
yarn install
yarn start
```

### Linking to SemApps packages

To modify packages on the [SemApps repository](https://github.com/assemblee-virtuelle/semapps) and see the changes before they are published, we recommend to use [`yarn link`](https://classic.yarnpkg.com/en/docs/cli/link/).

#### Linking middleware packages

```bash
cd /SEMAPPS_REPO/src/middleware
yarn run link-all
cd /ORGANIGRAPH_REPO/backend
yarn run link-semapps-packages
```

#### Linking frontend packages

```bash
cd /SEMAPPS_REPO/src/frontend
yarn run link-all
cd /ORGANIGRAPH_REPO/frontend
yarn run link-semapps-packages
```

Additionally, frontend packages need to be rebuilt, or your changes will not be taken into account by Archipelago.
You can use `yarn run build` to build a package once, or `yarn run dev` to rebuild a package on every change.

## Deploy to production

Follow the guide [here](deploy/README.md).
