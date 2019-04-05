# Example Node.js Express server project with TypeScript sources

This project contains a basic configuration for a Node.js Express server,
configured to run from TypeScript sources.

## Setup

Create `.env` file containing:

```ini
DEBUG=server*
```

## Running

- `yarn start`: runs in development mode
- `yarn build`: builds js files under `lib`
- `yarn prod`: runs from built js files
- `yarn test`: runs tests
- `yarn lint`: runs linter

## Notes

- `ts-node` does not load type definitions in the same way as `tsc` does.
  You need to specify `--files` option for `ts-node` to find `.d.ts`
  type definitions, for example.
  See [this Stack Overflow question](https://stackoverflow.com/questions/51610583/ts-node-ignores-d-ts-files-while-tsc-successfully-compiles-the-project).
