# eslint-config-nake-app

> Naked eslint shareable config for react app

This ESLint config is extended from both [airbnb](https://github.com/airbnb/javascript) and [prettier](https://prettier.io/) styles. It uses [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat) plugin for browser compatibility linter. It provides four extend options for different environment.

## Installation

```bash
# Install with npm
$ npm i -D eslint-config-nake-app

# Install with yarn
$ yarn add --dev eslint-config-nake-app
```

## Usage

After installation, add following contents to your `.eslintrc` or the `eslintConfig` entry of `package.json` file.

### Default

For react project.

```json
{
  "extends": ["nake-app"]
}
```

### ES5 legacy

For old ES5 project.

```json
{
  "extends": ["nake-app/legacy"]
}
```

### ES2015+ Base

For vanilla javascript project with no framework.

```json
{
  "extends": ["nake-app/base"]
}
```

### React

```json
{
  "extends": ["nake-app/react"]
}
```

### Wxapp (微信小程序)

For wechat miniProgram project.

```json
{
  "extends": ["nake-app/wxapp"]
}
```

_This environment can't support browser compatibility linter_

## Browser compatibility linter

First, add browsers that we support in your `package.json` or config file that [browserslist](https://github.com/browserslist/browserslist) supports.

```json
{
  "browserslist": [
    "defaults",
    "> 0.5%",
    "last 2 versions",
    "Firefox ESR",
    "not ie <= 9",
    "not op_mini all"
  ]
}
```

Second, ESLint will linter your code with predefined browserslist automatically. It will shot an error message to tell you which feature have not be well supported by these browsers (e.g. [fetch](https://caniuse.com/#feat=fetch) and [promises](https://caniuse.com/#feat=promises)):

Finally, after install these polyfills, we should add them to whitelist to prevent ESLint shotting error message again.

```bash
yarn add whatwg-fetch es6-promise
```

```json
{
  "extends": ["nake-app"],
  "settings": {
    "polyfills": ["fetch", "promises"]
  }
}
```

## Extend

You can override any rules with your own prefs.

## License

MIT
