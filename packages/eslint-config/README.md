# eslint-config-lukemorales

## 📦 Install

This ESLint config is available as a package on NPM, install with your favorite package manager:

```dircolors
npm install eslint-config-lukemorales
```

## ⚡ Quick start
Add the following code to your `package.json`:

```json
"eslintConfig": {
   "extends": [
      "lukemorales"
   ]
},
```

You can alternatively create a `.eslintrc` file in the root of your project's directory. Your `.eslintrc` file should look like this:

```json
{
  "extends": [
    "lukemorales"
  ]
}
```

Add scripts to your `package.json` to lint and fix:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
},
```

## 📝 Linting styles

This package exposes different linting rules:

### Default

Contains opinionated javascript, typescript, importing rules and disables conflicting rules with `prettier` for use with the formatter.

```json
{
  "extends": [
    "lukemorales"
  ]
}
```

### React

Contains opinionated React linting rules.

```json
{
  "extends": [
    "lukemorales/react"
  ]
}
```

### Next

Contains opinionated NextJS linting rules.

```json
{
  "extends": [
    "lukemorales/next"
  ]
}
```

### Jest

Contains opinionated Jest linting rules for better testing.

```json
{
  "extends": [
    "lukemorales/jest"
  ]
}
```

### OSS

Contains the `default` linting rules with some slight modifications better suited for OSS development

```json
{
  "extends": [
    "lukemorales/oss"
  ]
}
