# GraphQL Blog Client

This repository is a React Apollo client for a GraphQL blog. It does not contain
the API necessary. It consumes and presents the data from
[`graphql-blog-api`](https://github.com/Skovy/graphql-blog-api).

## Technologies

- [React](https://github.com/facebook/react) - A declarative, efficient, and flexible JavaScript library for building user interfaces.
- [webpack](https://github.com/webpack/webpack) - Module bundler.
- [TSLint](https://github.com/Microsoft/TypeScript) - An extensible linter for the TypeScript language.
- [TypeScript](https://www.typescriptlang.org/) - TypeScript is a superset of JavaScript that compiles to clean JavaScript output.
- [React Apollo](https://github.com/apollographql/react-apollo) - React higher-order component for Apollo Client.
- [styled-components](https://github.com/styled-components/styled-components) - Visual primitives for the component age 💅.
- [React Router](https://github.com/ReactTraining/react-router) - Declarative routing for React.

## Features

- Display a list of recent blog posts

## Setup

- Clone the repository
  - `git clone git@github.com:Skovy/graphql-blog-client.git`
- Change to the GraphQL Blog Client directory
  - `cd graphql-blog-client`
- Install the dependencies
  - `yarn install`
- Start the webpack dev server
  - `yarn start`
- Navigate to you browser
  - `localhost:3000`
  - **Note**: this depends on an external API (eg: [`graphql-blog-api`](https://github.com/Skovy/graphql-blog-api))

## Development

- `yarn lint`
  - Run TSLint
- `yarn lint:fix`
  - Run TSLint and fix the errors

## Next Steps

- [ ] Upgrade Apollo to v2
