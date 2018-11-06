#!/bin/bash
export JEKYLL_VERSION=3.5
set -x
nohup docker run --name=webdevff0b3218aaad11e7abc4cec278b6b50a_BUILD_CONTAINER --rm -v $(pwd)/../logs:/var/log -v $(pwd):/usr/src/app -v webdevff0b3218aaad11e7abc4cec278b6b50a_GITHUB_KEY_FOLDER:/home/jekyll/.ssh jekyll:docker bash -c 'sudo chown -R jekyll.jekyll /usr/src/app
sudo chown -R jekyll.jekyll /var/log
sudo cron -f
' > ../logs/webdevff0b3218aaad11e7abc4cec278b6b50a_BUILD_CONTAINER.log
