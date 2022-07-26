#!/usr/bin/env bash
# Copyright 2018 yangjunbao <yangjunbao@shimo.im>. All rights reserved.
# @since 2018-09-21 18:02:06
[ "1" = "0" ] && . ./_funcs.sh

__FILE__=$(basename $0)
__DIR__=$(dirname $0)
__intro__="Get changed and exists files for git"
__help__="$__FILE__ [args]"
__args__="
    F:filter::string:1:1:the filter arguments for grep
"
OPT_filter=""
. "$__DIR__/_funcs.sh" "$@"
set -e

files="$(git st -s | grep -E '^[^D]{3}' | sed -E 's/^.{3}(.* -> )?//')"

if [ "$OPT_filter" != "" ]; then
    echo_lines "$files" | grep "$OPT_filter"
else
    echo_lines "$files"
fi
