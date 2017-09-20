#!/bin/bash
export JEKYLL_VERSION=3.5
set -x
docker run --name=cr -e VIRTUAL_HOST=cr.joseph.vm --rm -v $(pwd):/usr/src/app -P --expose 4000 -ti jekyll:docker bash -c 'cd /usr/src/app; sudo bundle update; jekyll serve -d _site --watch --host=0.0.0.0 --port 4000'
