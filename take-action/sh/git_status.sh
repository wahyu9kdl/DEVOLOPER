#!/usr/bin/env bash
# Copyright 2018 yangjunbao <yangjunbao@shimo.im>. All rights reserved.
# @since 2018-09-21 22:19:13
[ "1" = "0" ] && . ./_funcs.sh

__FILE__=$(basename $0)
__DIR__=$(dirname $0)
__intro__="show git changes in subdirectories"
__help__="$__FILE__ [args]"
__args__=""
. "$__DIR__/_funcs.sh" "$@"
set -e


for dir in *; do
    if [ ! -d "$dir/.git" ]; then
        continue
    fi
    cd "$dir"
    if [ $(git status -s | wc -l) -gt 0 ]; then
        echo_warn "$dir: $(git config remote.origin.url) -> $(git rev-parse --abbrev-ref HEAD)"
        git status -s
        echo
    fi
    cd ..
done
