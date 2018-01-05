#!/bin/bash
export JEKYLL_VERSION=3.5
set -x
docker run --name=webdevff0b3218aaad11e7abc4cec278b6b50a_JEKYLL_CONTAINER -e VIRTUAL_HOST=webdevff0b3218aaad11e7abc4cec278b6b50a_JEKYLL_HOST -e CERT_NAME=webdevff0b3218aaad11e7abc4cec278b6b50a_ENV_DOMAIN --rm -v $(pwd):/usr/src/app -v /home/jekyll/.ssh:/home/jekyll/.ssh -P --expose 4000 -ti jekyll:docker bash -c 'cd /usr/src/app
sudo apt-get -y install cron
sudo apt-get -y install expect
sudo service cron start
printf "*/10 * * * * jekyll /usr/src/app/_api/cron.sh >> /var/log/sync.log 2>&1\n\n" | sudo tee /etc/cron.d/sync
sudo bundle update
sudo jekyll serve -d _site --watch --host=0.0.0.0 --port webdevff0b3218aaad11e7abc4cec278b6b50a_JEKYLL_PORT
'
