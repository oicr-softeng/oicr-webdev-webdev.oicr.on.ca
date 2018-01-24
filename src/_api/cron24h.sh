#!/bin/bash

PATH=$PATH:/usr/local/bin

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

source "$DIR/sync-mongo.config"
REPO_PATH=$DIR/../


if webdevff0b3218aaad11e7abc4cec278b6b50a_CRON_GEN_SITEMAP; then
  echo "GEN_SITEMAP......"
  if [ ! -z "webdevff0b3218aaad11e7abc4cec278b6b50a_PRODUCTION_URL" ]
  then
    SITEMAP_OPTIONS=" -s webdevff0b3218aaad11e7abc4cec278b6b50a_PRODUCTION_URL -o ../sitemap.xml"
  else
    SITEMAP_OPTIONS=" -s https://webdevff0b3218aaad11e7abc4cec278b6b50a_JEKYLL_HOST -l -o ../sitemap.xml"
  fi
  node sitemapCron.js $SITEMAP_OPTIONS
fi

if webdevff0b3218aaad11e7abc4cec278b6b50a_CRON_SEND_REPORT; then
  echo "SEND_REPORT......"
fi

if webdevff0b3218aaad11e7abc4cec278b6b50a_CRON_EXPIRE_CASE; then
  echo "EXPIRE_CASE......"
  cd "$REPO_PATH/_api"
  ./expire-case.sh
fi
