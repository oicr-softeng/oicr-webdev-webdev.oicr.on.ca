#!/bin/bash
export JEKYLL_VERSION=3.5
set -x
nohup docker run --name=webdevcr-preview -e VIRTUAL_HOST=webdevcr-preview.felix.vm --rm -v $(pwd):/usr/src/app -p :5467 jekyll:docker bash -c 'cd /usr/src/app/_preview; sudo bundle update; ruby index.rb -o 0.0.0.0 -p 5467' > ../logs/webdevcr-preview.log
