#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

source "$DIR/sync-mongo.config"
UPDATE_URL=$BASE_URL/command/solr-delete

curl -H "app-id: $APPID" \
        -H "Content-Type: application/json" \
        -d '{"secret":"'$API_SECRET'"}' \
        -X POST $UPDATE_URL
