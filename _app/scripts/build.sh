#!/bin/bash

# read -p "Would you like to remove old bundle files before new build? [y or n]`echo $'\n> '`"
# if [[ $REPLY =~ ^[Yy]$ ]]
# then
#     printf 'Removing old bundle files...\n'
#     rm -rf ../assets/dist/js
# fi

ENV="dev"
if [ $# -eq 1 ]
  then
    ENV=$1
fi
printf 'Bundling stylesheets...\n\n'
node --max_old_space_size=8192 node_modules/.bin/webpack --config ./src/core/webpack.styles.config.js
printf '\nBundling javascripts for '$ENV' environment...\n\n'
node --max_old_space_size=8192 node_modules/.bin/webpack --env.$ENV --config ./src/core/webpack.config.js