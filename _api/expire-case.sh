#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

source "$DIR/sync-mongo.config"
UPDATE_URL=$BASE_URL/cron/case-expire

curl -H "app-id: $APPID" \
        -H "Content-Type: application/json" \
        -d '{"secret":"'$API_SECRET'"}' \
        -X GET $UPDATE_URL
