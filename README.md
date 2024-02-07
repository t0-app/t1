# Template 1 - t1 App

From https://github.com/lucasrocali/t1

# Install

`git clone https://github.com/lucasrocali/t1 && yarn`

# Usage

| script                       | description                                                   |
| ---------------------------- | ------------------------------------------------------------- |
| `yarn web`                   | for running on browser                                        |
| `yarn ios`                   | for running on iOS simulator                                  |
| `yarn android`               | for running on Android simulator                              |
| `yarn ts:check`              | for checking typescript                                       |
| `yarn lint`                  | for checking lint                                             |
| `yarn lint:fix`              | for checking and fix lint                                     |
| `yarn test`                  | for testing                                                   |
| `yarn test:debug`            | for testing with logs                                         |
| `yarn test:final`            | for running on Android simulator                              |
| `yarn ci:check`              | group of lint, ts and test (used on precommit)                |
| `yarn sb:load`               | when a new component or screen is added it loads to storybook |
| `base-comp:new CompName`     | for creating a new component with name `CompName`             |
| `base-screen:new ScreenName` | for creating a new screen with name `ScreenName`              |

# Creating a new branch

`git checkout -b Feature/ROC-33`

`\_sitemap`
`\_storybook`

# Creating a new component

`yarn base-comp:new LocationCell`
`yarn sb:load`

# Creating a new screen

`yarn base-screen:new Locations`
`yarn sb:load`

# Aditional

Install Prettier - Code format extenstion on VS Code

# Docs

https://docs.expo.dev/
https://docs.expo.dev/router/introduction/

## Template project (-1)

Folder structure:

- [x] `/app`
- [x] `/components`
- [x] `/data`
- [x] `/config`

Packages:

- [x] expo@49
- [x] expo-router@2
- [x] cross plataform
  - [x] ios
  - [x] android
  - [x] web
- [x] typescript@5
- [x] metro
- [x] lint
- [x] prettier
- [x] styled-components
- [x] jest
- [x] storybook
- [x] hygen
- [x] react-query
- [x] i18n

:bulb: `main` branch keeps the chore structure for @rocali/t1-app, on other branchs we add custom integrations like `with-auth`, `with-firebase`, `with-tailwind`, etc

:thinking: We could then rebase branchs from main and update the chore structure
