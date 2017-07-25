# How to install baseline

1. Create your project directory.
2. ```cd``` into the directory and ```vi package.json``` 
3. ```vi package.json``` and copy the following config.
```
{
  "name": "static-cms-baseline",
  "version": "1.0.0",
  "description": "",
  "author": "Koji Miyauchi",
  "license": "MIT",
  "scripts": {
    "init": "./node_modules/.bin/webdev-baseline-init",
    "update": "./node_modules/.bin/webdev-baseline-update"
  },
  "dependencies": {
    "static-cms-baseline": "git+ssh://git@bitbucket.oicr.on.ca/~kmiyauchi/webdev_static-cms-baseline.git"
  }
}
```
4. ```npm install```
5. ```npm run init```