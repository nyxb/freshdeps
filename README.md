[![cover][cover-src]][cover-href]
[![npm version][npm-version-src]][npm-version-href] 
[![npm downloads][npm-downloads-src]][npm-downloads-href] 
[![bundle][bundle-src]][bundle-href] 
[![License][license-src]][license-href]

> 🌱 A modern cli tool that keeps your deps fresh

<pre align="center">npx <b>freshdeps</b></pre>

<p align="center">or recursively for <b>monorepos</b></p>

<pre align="center">npx freshdeps <b>-r</b></pre>

## 🌟 Features

- Built-in support for monorepos
- No installation required — `npx freshdeps`
- Safe by default — updates in the version range you are allowed

## 🔧 Usage

By default, `freshdeps` will only bump versions in the ranges you specified in `package.json` *(which is safe and the default behavior of `npm install`)*

To ignore the ranges, explicitly set the maximum allowed version change.

For example `freshdeps major` will check all changes and bump to the latest stable changes including majors (breaking changes), or `freshdeps minor` that bump to latest minor changes within the same major version.

### 📦 Monorepo

`freshdeps` has the built-in first-class monorepo support. Simply adding `-r` will scan the subdirectories that contain `package.json` and update them together. It will handle local private packages automatically.

## ⚙️ Configures

See `freshdeps --help` for more details

### 🧩 Filters

You can filter out packages you want to check for upgrades by `--include` or `--exclude`; they accept string and regex, separated by commas (,).

```bash
freshdeps --include lodash,webpack
freshdeps --include /react/ --exclude react-dom # regex is also supported
```

### 📄 Config file

You can either use `fresh.config.{js,ts,json}` or the `fresh` key in the `package.json` file to configure the same options available in the command.

```ts
import { DefineConfig } from 'freshdeps'

export default DefineConfig({
  // ignore packages from bumping
  exclude: [
    'webpack'
  ],
  // fetch latest package info from registry without cache
  force: true,
  // write to package.json
  write: true,
  // run `npm install` or `yarn install` right after bumping
  install: true,
  // override with different bumping mode for each package
  packageMode: {
    'typescript': 'major',
  }
})
```

## 📜 License

[MIT](./LICENSE) - Made with 💞

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/freshdeps?style=flat&colorA=18181B&colorB=14F195
[npm-version-href]: https://npmjs.com/package/freshdeps
[npm-downloads-src]: https://img.shields.io/npm/dm/freshdeps?style=flat&colorA=18181B&colorB=14F195
[npm-downloads-href]: https://npmjs.com/package/freshdeps
[bundle-src]: https://img.shields.io/bundlephobia/minzip/freshdeps?style=flat&colorA=18181B&colorB=14F195
[bundle-href]: https://bundlephobia.com/result?p=freshdeps
[license-src]: https://img.shields.io/github/license/nyxblabs/freshdeps.svg?style=flat&colorA=18181B&colorB=14F195
[license-href]: https://github.com/nyxblabs/freshdeps/blob/main/LICENSE

<!-- Cover -->
[cover-src]: https://raw.githubusercontent.com/nyxblabs/freshdeps/main/.github/assets/cover-github-freshdeps.png
[cover-href]: https://💻nyxb.ws
