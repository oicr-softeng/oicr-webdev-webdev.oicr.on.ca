#!/bin/bash

PATH=$PATH:/usr/local/bin

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

source "$DIR/sync-mongo.config"
REPO_PATH=$DIR/../

cd $REPO_PATH
expect << EOF
  spawn git pull
  expect "Enter passphrase"
  send "$KEY_PASSPHRASE\r"
  expect eof
EOF
#git pull
#bundle exec jekyll build

cd "$REPO_PATH/_api"
./sync-mongo.sh

