# TS Lib Template

### [pnpm](https://pnpm.io/)

A fast and efficient package manager. Packages are linked from a single, global store.

## [tsup](https://github.com/egoist/tsup): 

> The simplest and fastest way to bundle your TypeScript libraries

### [vitest](https://vitest.dev/)

A testing framework. Uses [Vite](https://vitejs.dev/) for building your code, so look through the Vite docs if you need to add plugins.

### [dprint](https://dprint.dev/)

A pluggable and configurable code formatting platform written in Rust. Faster alternative to Prettier.

### [ESLint](https://eslint.org/) and [TypeScript ESLint](https://typescript-eslint.io/)

Linter that helps you find problems in your code.

### [npm-run-all](https://github.com/mysticatea/npm-run-all)

Run dprint, TypeScript, and ESLint checks in parallel.

### [Github Actions](https://github.com/features/actions)

Run all your checks on each commit.

### pre-commit hook

Uses [husky](https://typicode.github.io/husky/#/) to register a pre-commit hook and [nano-staged](https://github.com/usmanyunusov/nano-staged) (lint-staged alternative) to run commands only on changed files.

Ensure all files are formatted before they are committed and run linters on changed files.

### [Renovate](https://www.whitesourcesoftware.com/free-developer-tools/renovate/)

Automatically opens PRs to update dependencies. Automerges patch and minor updates, but not major updates or any `typescript` updates. Also pins all `devDependencies`) to use exact versions (**no** `^` before version signifying that the latest patch version can be matched, only the version specified can be used).


## Usage

