#!/bin/bash
export JEKYLL_VERSION=3.5
set -x
docker run --name=webdevff0b3218aaad11e7abc4cec278b6b50a_JEKYLL_CONTAINER -e VIRTUAL_HOST=webdevff0b3218aaad11e7abc4cec278b6b50a_JEKYLL_HOST -e CERT_NAME=webdevff0b3218aaad11e7abc4cec278b6b50a_ENV_DOMAIN --rm -v $(pwd):/usr/src/app -v webdevff0b3218aaad11e7abc4cec278b6b50a_GITHUB_KEY_FOLDER:/home/jekyll/.ssh -P --expose 4000 -ti jekyll:docker bash -c 'sudo chown -R jekyll.jekyll /usr/src/app
sudo cron -f
'
