#!/usr/bin/env bash
# Copyright 2018 yangjunbao <yangjunbao@shimo.im>. All rights reserved.
# @since 2018-09-21 17:54:40
[ "1" = "0" ] && . ./_funcs.sh

__FILE__=$(basename $0)
__DIR__=$(dirname $0)
__intro__="Automatically add file to vcs for svn/git"
__help__="$__FILE__ [files]"
__args__="
    __:files::string:0:100:the files try to add
"
OPT_files=()
. "$__DIR__/_funcs.sh" "$@"
set -e

cwd="`pwd`"
for file in "${OPT_files[@]}"
do
    dir=`dirname "$file"`
    name=`basename "$file"`
    cd "$dir"
    set +e
    if svn info 2>/dev/null 1>/dev/null; then
        cmd=svn
    elif git status 2>/dev/null 1>/dev/null; then
        cmd=git
    fi
    set -e
    if [ "$cmd" == "" ]; then
        echo_warn "Cannot find vcs, please check your file is under a vcs directory!"
        cd "$cwd"
        continue
    fi
    if [ "$cmd" == "git" ] && [ "$(git check-ignore "$name")" != "" ]; then
        cd "$cwd"
        echo_warn "This file is ignored by .gitignore file, could not be added to vcs!"
        continue
    fi
    "$cmd" add "$name"
    cd "$cwd"
done
