#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

source "$DIR/sync-mongo.config"
UPDATE_URL=$BASE_URL/cron/case-email

curl -H "app-id: $APPID" \
        -H "Content-Type: application/json" \
        -X GET $UPDATE_URL
