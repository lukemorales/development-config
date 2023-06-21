# Prettier config

## 📦 Install

This Prettier config is available as a package on NPM, install with your favorite package manager:

```dircolors
npm install @lukemorales/prettier-config
```

## ⚡ Quick start
Add the following code to your `package.json`:

```json
"prettier": "@lukemorales/prettier-config"
```

You can alternatively create a `.prettierrc` file in the root of your project's directory. Your `.prettierrc` file should look like this:

```json
"@lukemorales/prettier-config"
```

Add scripts to your `package.json` to format and fix:

```json
"scripts": {
  "format": "prettier --check .",
  "format:fix": "prettier --write ."
},
```

## 📝 Formatting configurations

This package exposes different formatting configurations:

### Default

Contains opinionated formatting rules.

```json
"prettier": "@lukemorales/prettier-config"
```

### TailwindCSS

Extends the default configuration and adds the `tailwindcss` plugin.

```json
"prettier": "@lukemorales/prettier-config/with-tailwind"
```
> If you're using this configuration, make sure to install the `prettier-plugin-tailwindcss` peerDependency
