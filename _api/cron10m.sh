#!/bin/bash

PATH=$PATH:/usr/local/bin

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

source "$DIR/sync-mongo.config"
REPO_PATH=$DIR/../


if webdevff0b3218aaad11e7abc4cec278b6b50a_CRON_GIT_PULL; then
  cd $REPO_PATH
  git pull
fi

if webdevff0b3218aaad11e7abc4cec278b6b50a_CRON_JEKYLL_BUILD; then
  cd $REPO_PATH
  bundle exec jekyll build
fi

if webdevff0b3218aaad11e7abc4cec278b6b50a_CRON_SYNC_MONGO; then
  cd "$REPO_PATH/_api"
  ./sync-mongo.sh
fi
