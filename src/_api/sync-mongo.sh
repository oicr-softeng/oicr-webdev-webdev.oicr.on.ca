#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
REPO_PATH=$DIR/../

source "$DIR/sync-mongo.config"
COMMIT_BASE=$(cat "$DIR/sync-mongo.commit")
UPDATE_URL=$BASE_URL/command/cron-synch

if [ "$COMMIT_BASE" = 0 ]; then
    COMMIT_HEAD=$(cd $REPO_PATH; git rev-list --max-parents=0 HEAD)

    FILE_LIST=$(git show --pretty="" --name-status $COMMIT_HEAD)
else
    COMMIT_COUNT=$(cd $REPO_PATH; git rev-list $COMMIT_BASE..HEAD | wc -l)
    echo $COMMIT_COUNT
    if [ "$COMMIT_COUNT" -gt 100000 ]; then
        COMMIT_HEAD=$(cd $REPO_PATH; git rev-list $COMMIT_BASE..HEAD | tac | sed -n '100000p')
    else
        COMMIT_HEAD=$(cd $REPO_PATH; git rev-list --max-count=1 HEAD)
    fi

    echo $COMMIT_HEAD
    if [ "$COMMIT_BASE" = "$COMMIT_HEAD" ]; then
        echo "No Update Needed!"
    else
        FILE_LIST=$(git diff --name-status $COMMIT_BASE $COMMIT_HEAD)
    fi
fi


#echo $FILE_LIST
while read -r line; do
    echo "... $line ..."
    if [[ -n "${line// }" ]]; then
        read -r STATUS NAME <<< "$line"

        if [[ $NAME =~ ^_app\/.+$ ]]; then
            continue
        fi

        if [[ $NAME =~ \.(css|js|svg|png|jpg|jpeg|gif|ttf|scss|tpl|inc)$ ]]; then
            continue
        fi

        #Get file commit id and date
        if [[ "$STATUS" = "D" ]]; then
            COMMIT_INFO="0 0"
        else
            COMMIT_INFO=$(cd $REPO_PATH; git log -n 1 --pretty=format:"%H %ct" "$NAME")
        fi
        ID_TIMESTAMP=($COMMIT_INFO)
        ID=${ID_TIMESTAMP[0]}
        TIMESTAMP=${ID_TIMESTAMP[1]}

        curl -H "app-id: $APPID" \
             -H "Content-Type: application/json" \
             -d '{"secret":"'$API_SECRET'", "item":"'"$NAME"'", "ref":"'$ID'", "status":"'$STATUS'", "timestamp":"'$TIMESTAMP'"}' \
             -X PUT $UPDATE_URL
        sleep 2
    fi
done <<< "$FILE_LIST"


#Update sync-mongo.commit
echo $COMMIT_HEAD > "$DIR/sync-mongo.commit"
