#!/usr/bin/env bash
# Copyright 2018 yangjunbao <yangjunbao@shimo.im>. All rights reserved.
# @since 2018-11-01 22:26:32
[ "1" = "0" ] && . ./_funcs.sh

__FILE__=$(basename $0)
__DIR__=$(dirname $0)
__intro__="__PLEASE_PUT_YOUR_DESCRIPTION_TO_HERE__"
__help__="$__FILE__ <from> <to>"
__args__="
  __:dir_pair::string:1:2:target paths
"
OPT_dir_pair=( )
. "$__DIR__/_funcs.sh" "$@"
set -e

from="${OPT_dir_pair[0]}"
to="${OPT_dir_pair[1]}"

if [ "$to" = "" ]; then
  show_usage "target directory is empty"
fi

rm -rf "$to"

ln -sf "$(realpath "$from")" "$(realpath "$to")"
