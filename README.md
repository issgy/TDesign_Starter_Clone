<p style="display:flex; justify-content: center">

</p>
<p align="center">
  <a href="https://tdesign.tencent.com/starter/react/#/dashboard/base" target="_blank">
    <img alt="TDesign Logo" width="200" src="https://tdesign.gtimg.com/starter/brand-logo.svg">
  </a>
</p>

<p align="center">
  <a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/vite.svg" alt="node compatibility"></a>
  <a href="https://github.com/Tencent/tdesign-react/blob/develop/LICENSE">
    <img src="https://img.shields.io/npm/l/tdesign-react.svg?sanitize=true" alt="License">
  </a>
</p>

English | [简体中文](./README-zh_CN.md)

### Introduction

TDesign React Starter is a TDesign-based project developed with `React`, `Vite`. It can be customized theme configuration, and aims to provide project out-of-the-box, configuration-style middle and background projects.

<p>
  <a href="http://tdesign.tencent.com/starter/react/">Live Preview</a>
  ·
  <a href="https://tdesign.tencent.com/starter/docs/react/get-started">Documentation</a>
</p>

<img src="docs/docs-starter.png">

### Features

- Various provided pages for develop
- Complete directory structure for develop
- Code specification configuration
- Support dark mode
- Custom theme colors
- Various space layouts
- Mock data scheme

### Usage

> Initialize project with our CLI tool `tdesign-starter-cli`

```bash
## install tdesign-starter-cli
npm i tdesign-starter-cli@latest -g

## create project
td-starter init
```

### Develop

```bash
## install dependencies
yarn

## set up
yarn dev
```

### Build

```bash
## build
yarn build

## build for test
yarn build:test
```

### Contributing Guide

We welcome contributions to our project. Create your [Issue](https://github.com/tencent/tdesign-react-starter/issues/new/choose) or Submit your [Pull Request](https://github.com/Tencent/tdesign-react-starter/pulls).

#### Pull Request

1. Fork it!
2. Create your branch: `git checkout -b feat/xxxx`
3. Commit: `git commit -a 'feat(project): describe'`
4. Push: `git push origin feat/xxxx`
5. New Pull Request `pull request`

#### Commit Specification

- [Angular Convention](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular)

### Compatibility

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br> IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Edge >=84                                                                                                                                                                                                        | Firefox >=83                                                                                                                                                                                                      | Chrome >=84                                                                                                                                                                                                   | Safari >=14.1                                                                                                                                                                                                 |

### License

The MIT License. Please see [the license file](LICENSE) for more information.
