#!/usr/bin/env bash
# Copyright 2018 yangjunbao <yangjunbao@shimo.im>. All rights reserved.
# @since 2018-09-21 17:49:18
[ "1" = "0" ] && . ./_funcs.sh

__FILE__=$(basename $0)
__DIR__=$(dirname $0)
__intro__="Set git short alias"
__help__="$__FILE__ [args]
    This only need to run once, after do it, you
    can use \`git config --list --global | grep alias.\`
    to get all alias

    Currently, this command will set follow alias:

    st:   shortcut for status
    alog: shortcut to print commit history in online, hide merge commit
    mlog: shortcut to print commit history in online, show merge commit
    ci:   shortcut for commit
    co:   shortcut for checkout
    b:    shortcut for branch
"
__args__=""
. "$__DIR__/_funcs.sh" "$@"
set -e

git config --global alias.st status
git config --global alias.alog "log --graph --decorate --date=format:'%m-%d %H:%M' --pretty=format:'%ad %C(cyan)%h%C(reset) %s %C(yellow)%an<%ae>%Creset%C(auto)' --no-merges"
git config --global alias.mlog "log --graph --decorate --date=format:'%m-%d %H:%M' --pretty=format:'%ad %C(cyan)%h%C(reset) %s %C(yellow)%an<%ae>%Creset%C(auto)'"
git config --global alias.ci commit
git config --global alias.co checkout
git config --global alias.b branch
git config --global alias.cb "rev-parse --abbrev-ref HEAD"

pw "Alias set result as follow:"
git config --global --list | grep alias.
