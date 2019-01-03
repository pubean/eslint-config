# @pubean/eslint-config

> ESLint shareable config for Pubean Inc.

This ESLint config is extended from both [airbnb](https://github.com/airbnb/javascript) and [prettier](https://prettier.io/) styles. It uses [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat) plugin for browser compatibility linter. It provides four extend options for different environment.

## Installation

```bash
# Install with npx
$ npx install-peerdeps --dev @pubean/eslint-config

# Install with yarn
$ yarn add --dev @pubean/eslint-config
$ yarn add --dev babel-eslint eslint prettier eslint-plugin-compat eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-node eslint-plugin-promise eslint-plugin-react eslint-plugin-security
```

_Use npx to install peerdeps automatically or install peerDependencies with npm/yarn manually._

## Usage

After installation, add following contents to your `.eslintrc` or the `eslintConfig` entry of `package.json` file.

### Default

For react project.

```json
{
  "extends": ["@pubean"]
}
```

### ES5 legacy

For old ES5 project.

```json
{
  "extends": ["@pubean/legacy"]
}
```

### ES2015+ Base

For vanilla javascript project with no framework.

```json
{
  "extends": ["@pubean/base"]
}
```

### React

For react project, the same as default config.

```json
{
  "extends": ["@pubean/react"]
}
```

### Wxapp (微信小程序)

For wechat miniProgram project.

```json
{
  "extends": ["@pubean/wxapp"]
}
```

_This environment can't support browser compatibility linter_

### Node

For Node.js project.

```json
{
  "extends": ["@pubean/node"]
}
```

_It recommends a use of [the "engines" field of package.json](https://docs.npmjs.com/files/package.json#engines). The "engines" field is used by `node/no-unsupported-features/*` rules._

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
  "extends": ["@pubean"],
  "settings": {
    "polyfills": ["fetch", "promises"]
  }
}
```

## eslintConfig in package.json

I like moving `.eslintrc` and `.eslintignore` file from project root to `package.json`, this makes my project cleaner. If you want to respect `.gitignore` as `eslintIgnore`, make your eslint script with `--ignore-path .gitignore` is a good idea.

```json
{
  "scripts": {
    "eslint": "eslint src --ext .js --ignore-path .gitignore; exit 0",
    "eslint:fix": "eslint src --ext .js --ignore-path .gitignore --fix; exit 0"
  },
  "eslintConfig": {
    "extends": ["@pubean"],
    "settings": {
      "polyfills": ["fetch", "promises"]
    }
  }
}
```

## Bonus

- Best practices for promises with [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
- Jest testing linter with [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)
- Security linter with [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security)

## Extend

You can override any rules with your own prefs.

## License

MIT
