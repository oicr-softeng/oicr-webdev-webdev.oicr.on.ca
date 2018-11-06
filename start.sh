#!/bin/bash
export JEKYLL_VERSION=3.5
set -x
docker run --name=webdevff0b3218aaad11e7abc4cec278b6b50a_JEKYLL_CONTAINER -e VIRTUAL_HOST=webdevff0b3218aaad11e7abc4cec278b6b50a_JEKYLL_HOST -e CERT_NAME=webdevff0b3218aaad11e7abc4cec278b6b50a_ENV_DOMAIN --rm --link webdevff0b3218aaad11e7abc4cec278b6b50a_API_CONTAINER:webdevff0b3218aaad11e7abc4cec278b6b50a_API_HOST -v $(pwd):/usr/src/app -P --expose 4000 -ti jekyll:docker bash -c 'cd /usr/src/app; sudo bundle update; jekyll serve -d _site --watch --host=0.0.0.0 --port webdevff0b3218aaad11e7abc4cec278b6b50a_JEKYLL_PORT'
