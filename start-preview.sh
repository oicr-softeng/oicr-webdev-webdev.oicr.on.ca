#!/bin/bash
export JEKYLL_VERSION=3.5
set -x
docker run --name=webdevff0b3218aaad11e7abc4cec278b6b50a_PREVIEW_CONTAINER -e VIRTUAL_HOST=webdevff0b3218aaad11e7abc4cec278b6b50a_PREVIEW_HOST --rm -v $(pwd):/usr/src/app -p webdevff0b3218aaad11e7abc4cec278b6b50a_PREVIEW_PORT:webdevff0b3218aaad11e7abc4cec278b6b50a_PREVIEW_PORT -ti jekyll:docker bash -c 'cd /usr/src/app/_preview; sudo bundle update; ruby index.rb -o 0.0.0.0 -p webdevff0b3218aaad11e7abc4cec278b6b50a_PREVIEW_PORT'
