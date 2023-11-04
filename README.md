# vscode-ts-template

## Description

This repository serves as a starting point for writing TypeScript applications in VS Code. It includes pre-configured unit testing, linting, and formatting settings optimized for TypeScript development.

Features:

- Pre-configured with jest for unit testing
- ESLint setup for TypeScript linting
- Prettier for code formatting

Use cases:

- Creating an NPM package with strong typing
- JS/TS playground
- Prototyping

## Prerequisites

- Node.js (tested with v20.9.0)

## Running

Run these commands in the root of this project:

- `npm install`
- `npm run build`
- `npm run test`
- `npm run lint`

## Additional Information

If you'd like to commit your dist folder which contains your transpiled JS files,
you can remove `dist` from `.gitignore`
