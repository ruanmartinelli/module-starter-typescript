# module-starter-typescript

[![Node.js version][node-version]][node-version]
[![Jest][jest]][jest]
[![GNU Make][make]][make]

> Starter project for building Node.js modules with TypeScript

## Getting started

1. Clone the repository:

```bash
git clone https://github.com/ruanmartinelli/module-starter-typescript.git <name>
```

2. Edit `name`, `repository` and `author` fields on [package.json](./package.json).

3. Install dependencies:

```bash
yarn install
```

4. Add your library code on `src/` and tests on `/test`.

## Scripts

All scripts are defined on the `Makefile`.

- Compile TypeScript files:

```bash
make build
```

- Lint files:

```bash
make lint
```

- Run tests:

```bash
make test
```

- Show coverage report:

```bash
make coverage
```

- Remove auto-generated folders:

```bash
make clean
```

## License

MIT © [Ruan Martinelli](https://github.com/ruanmartinelli)

<!-- Badges -->

[node-version]: https://img.shields.io/badge/Node.js->=6-brightgreen.svg
[jest]: https://img.shields.io/badge/tested_with-jest-99424f.svg
[make]: https://img.shields.io/badge/Built%20with-GNU%20Make-brightgreen.svg
