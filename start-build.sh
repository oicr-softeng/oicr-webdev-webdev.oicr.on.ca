#!/bin/bash
export JEKYLL_VERSION=3.5
set -x
nohup docker run --name=webdevcr-build --add-host webdevcr-api.felix.vm:127.0.0.1 --rm -v $(pwd):/usr/src/app -v $(pwd)/../logs:/var/log -v :/home/jekyll/.ssh jekyll:docker bash -c 'sudo chown -R jekyll.jekyll /usr/src/app
sudo chown -R jekyll.jekyll /var/log
sudo chown -R jekyll.jekyll /home/jekyll/.ssh
sudo sed --regexp-extended --in-place "s/^session\s+required\s+pam_loginuid.so$/session optional pam_loginuid.so/" /etc/pam.d/cron
sudo cron -f
' > ../logs/webdevcr-build.log
