# Vitest

Vitest is a test runner. It is built on top of Vite, and provides a beautiful UI to view and interact with your tests.

## Vitest Installation

`pnpm install vitest` will install Vitest and its dependencies.

## Vitest Configuration

Vitest uses the same configuration as Vite. You can create a `vite.config.js` file in the root of your project to configure Vitest.

# Features

## Vitest UI
Powered by Vite, Vitest also has a dev server under the hood when running the tests. This allows Vitest to provide a beautiful UI to view and interact with your tests. The Vitest UI is optional, so you'll need to install it with:

`pnpm vitest --ui` will start a dev server. The UI will automatically reload when you make changes to your tests.

#Vitest Tests

`pnpm test:unit` will run your tests in the terminal.

## Vitest Coverage
https://vitest.dev/guide/coverage.html#coverage-setup

`pnpm test:unit:coverage` When you start the Vitest process, it will prompt you to install the corresponding support package automatically.
It will run your tests and generate a coverage report.

### For c8
`pnpm i -D @vitest/coverage-c8`

### For istanbul
`pnpm i -D @vitest/coverage-istanbul`

