# How to install baseline

1. ```touch package.json``` and copy the following config.
```
{
  "name": "static-cms-baseline",
  "version": "1.0.0",
  "description": "",
  "author": "Koji Miyauchi",
  "license": "MIT",
  "scripts": {
    "init": "./node_modules/.bin/webdev-base-init",
    "update": "./node_modules/.bin/webdev-base-update"
  },
  "dependencies": {
    "static-cms-baseline": "git+ssh://git@bitbucket.oicr.on.ca/~kmiyauchi/webdev_static-cms-baseline.git"
  }
}
```

2. ```npm install``` to install static-cms-baseline
3. ```npm run init``` to initialize baseline.