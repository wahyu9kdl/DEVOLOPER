#!/usr/bin/env bash
# Copyright 2018 yangjunbao <yangjunbao@shimo.im>. All rights reserved.
# @since 2018-09-21 22:21:09
[ "1" = "0" ] && . ./_funcs.sh

__FILE__=$(basename $0)
__DIR__=$(dirname $0)
__intro__="kill processes by name"
__help__="$__FILE__ [args]"
__args__="
    S:signal:KILL:string:1:1:the signal to send
    __:matcher::string:0:1:the process to match, ignore case, regexp
"
. "$__DIR__/_funcs.sh" "$@"
set -e


ps aux | grep -iE "$1" | awk '{print $2}' | xargs kill -KILL
