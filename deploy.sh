#!/usr/bin/env bash

set -ex
ulimit -u 512

DIR=$(mktemp --directory)
trap "rm -rf $DIR" EXIT

pushd $DIR

git clone https://git.csclub.uwaterloo.ca/www/class-profile-2024 --depth=1
cd class-profile-2024

export NEXT_PUBLIC_BASE_PATH="/classprofile/2024"
npm ci
npm run build

chgrp -R www out
chmod -R g+w out

shopt -s dotglob

rm -rf /srv/classprofile/2024/*
mv out/* /srv/classprofile/2024/

popd