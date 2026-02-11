# Setup guide

## Prerequisites

The project was built using the following Node and NPM versions:

```
Node: v24.9.0
NPM: v11.6.0
```

Supported versions are listed in the `package.json` as well.

## Installation

1. Clone the repository

```bash
git clone git@github.com:melaniietong/csaas.git
```

2. Position yourself at the project root

```bash
cd csaas
```

3. Install dependencies

```bash
npm i
```

## Making a pull request

1. Fork the repo.
2. Clone that repo to your computer.
3. Add the original repo as your upstream.

```bash
git remote add upstream git@github.com:canadian-software/web.git
```

4. Create a branch, make your changes, and then commit.
5. Push to your fork.
6. Open a pull request with your changes and make sure in the description to link it to the relevant issue.

## Helpful commands

To run the app locally with hot-reload:

```bash
npm run dev
```

To compile and minify:

```bash
npm run build
```

To lint (make sure this is done before commits):

```bash
npm run lint
```

To format (make sure this is done before commits):

```bash
npm run format
```
