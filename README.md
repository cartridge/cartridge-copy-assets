# Cartridge Copy Assets[![Build Status](https://travis-ci.org/cartridge/cartridge-copy-assets.svg?branch=master)](https://travis-ci.org/cartridge/cartridge-copy-assets)

> [Copy Assets](https://github.com/cartridge/cartridge-copy-assets) expansion pack for  [Cartridge](https://github.com/cartridge/cartridge)


To use this module, you will need [cartridge-cli](https://github.com/cartridge/cartridge-cli) installed and have a cartridge project setup.

```shell
npm install cartridge-copy-assets --save-dev
```

## Tasks

This module adds the following to a project:

* copy-assets - This will run all of the copy tasks.
* copy-assets:build - Copies your public folder to you build folder.
* copy-assets:fonts - Copies your fonts over to your public folder.
* copy-assets:media - Copies your media over to your public folder.


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

This will create the task for you as long as your src & dest directories are correct.
