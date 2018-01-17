#!/bin/bash

PATH=$PATH:/usr/local/bin

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

source "$DIR/sync-mongo.config"
REPO_PATH=$DIR/../


if webdevff0b3218aaad11e7abc4cec278b6b50a_CRON_GEN_SITEMAP; then
  echo "GEN_SITEMAP......"
fi

if webdevff0b3218aaad11e7abc4cec278b6b50a_CRON_SEND_REPORT; then
  echo "SEND_REPORT......"
fi

if webdevff0b3218aaad11e7abc4cec278b6b50a_CRON_EXPIRE_CASE; then
  echo "EXPIRE_CASE......"
  cd "$REPO_PATH/_api"
  ./expire-case.sh
fi
