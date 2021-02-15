# @automata / eslint-config

**ESlint** configurations.

## Usage with JavaScript
JavaScript configuration use **babel-eslint** parser.

Install dependencies
```
npm i -D babel-eslint @automata/eslint-config
```

```
yarn add -D babel-eslint @automata/eslint-config
```

Extends configuration in `.eslintrc` file:
```json
{
  "parser": "babel-eslint",
  "extends": "@automata"
}
```

## Usage with TypeScript
TypeScript configuration use **@typescript-eslint** parser.

Install dependencies
```
npm i -D @typescript-eslint/parser @automata/eslint-config
```
```
yarn add -D @typescript-eslint/parser @automata/eslint-config
```

Extends configuration in `.eslintrc` file:
```json
{
  "parser": "@typescript-eslint/parser",
  "extends": "@automata/eslint-config/typescript"
}
```

## Plugins

List of all used plugins:
 - **`eslint-plugin-import`**
 - **`eslint-plugin-node`**
 - **`eslint-plugin-react`**
 - **`eslint-plugin-react-hooks`**
 - **`eslint-plugin-jsdoc`**
 - **`@typescript-eslint/eslint-plugin`** (TypeScript only)
