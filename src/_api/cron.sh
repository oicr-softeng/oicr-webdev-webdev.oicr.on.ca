#!/bin/bash

PATH=$PATH:/usr/local/bin

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

source "$DIR/sync-mongo.config"
REPO_PATH=$DIR/../

cd $REPO_PATH
git pull
#bundle exec jekyll build
#FJDKSLFJSDLFDJFDL

cd "$REPO_PATH/_api"
./sync-mongo.sh

