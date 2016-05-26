# Cartridge Copy Assets[![Build Status](https://travis-ci.org/cartridge/cartridge-copy-assets.svg?branch=master)](https://travis-ci.org/cartridge/cartridge-copy-assets)

> [Copy Assets](https://github.com/cartridge/cartridge-copy-assets) expansion pack for  [Cartridge](https://github.com/cartridge/cartridge)


To use this module, you will need [cartridge-cli](https://github.com/cartridge/cartridge-cli) installed and have a cartridge project setup.

```sh
npm install cartridge-copy-assets --save-dev
```

## Task Config

Copy tasks are defined in the `task.copy-assets.js` config file. Each key of the `taskConfig` object makes a new gulp task.

The only predefined task, `copy-assets`, runs all copy tasks at once.

### How to add new copy tasks
To add a new copy task all you have to do is open `task.copy-assets.js` and then add a new key to the `taskConfig` object. For example:

```
var taskConfig = {
		fonts: {
			src: 'path/to/src',
			dest: 'path/to/dest'
		}
};
```

This will create the copy task `fonts` for you as long as your `src` & `dest` directories are correct.

Running `gulp copy-assets:fonts` will copy the contents of the path `fonts.src` to the path `fonts.dest`

* * *

## Development
### Commit message standards [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
Try and adhere as closely as possible to the [Angular commit messages guidelines](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines).

[Commitizen](https://github.com/commitizen/cz-cli) is a command line tool which can help with this:
```sh
npm install -g commitizen
```
Now, simply use `git cz` instead of `git commit` when committing.
