# Cartridge Copy Assets[![Build Status](https://travis-ci.org/cartridge/cartridge-copy-assets.svg?branch=master)](https://travis-ci.org/cartridge/cartridge-copy-assets)

> [Copy Assets](https://github.com/cartridge/cartridge-copy-assets) expansion pack for  [Cartridge](https://github.com/cartridge/cartridge)


To use this module, you will need [cartridge-cli](https://github.com/cartridge/cartridge-cli) installed and have a cartridge project setup.

```sh
npm install cartridge-copy-assets --save-dev
```

## Tasks

This module adds the following to a project:

* `gulp copy-assets` - This will run all of the copy tasks.
* `gulp copy-assets:build` - Copies your public folder to you build folder.
* `gulp copy-assets:fonts` - Copies your fonts over to your public folder.
* `gulp copy-assets:media` - Copies your media over to your public folder.


## Config

Once installed, the config file `task.copy-assets.js` is created and stored in the `_config` directory in the root of your cartridge project.

### How to add new copy tasks
To add a new copy task all you have to do is open `task.copy-assets.js` and then add a new key to the taskConfig object. For example:

```
var taskConfig = {
		newCopyTask: {
			src: 'path/to/src',
			dest: 'path/to/dest'
		}
};
```

This will create the task for you as long as your `src` & `dest` directories are correct.

* * *

## Development
### Commit message standards [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
Try and adhere as closely as possible to the [Angular commit messages guidelines](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines).

[Commitizen](https://github.com/commitizen/cz-cli) is a command line tool which can help with this:
```sh
npm install -g commitizen
```
Now, simply use `git cz` instead of `git commit` when committing.
