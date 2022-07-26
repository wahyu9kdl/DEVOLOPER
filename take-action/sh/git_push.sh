#!/usr/bin/env bash
# Copyright 2018 yangjunbao <yangjunbao@shimo.im>. All rights reserved.
# @since 2018-09-21 18:26:52
[ "1" = "0" ] && . ./_funcs.sh

__FILE__=$(basename $0)
__DIR__=$(dirname $0)
__intro__="commit changes to work tree and push it remote and change version for package.json"
__help__="$__FILE__ [args]"
__args__="
    v:version:none:string:1:1:the version to update to [patch,major,major,none]
    R:remote:origin:string:1:1:the remote name
    T:trunk:release:string:1:1:the trunk branch
    __:message::string:0:1:the commit message
"
OPT_trunk="release"
OPT_remote="origin"
OPT_version="none"
OPT_message=""
. "$__DIR__/_funcs.sh" "$@"
set -e

branch="$(git branch --show-current)"

git add .
git ci -m "$OPT_message"
git pull -r "$OPT_remote" "$branch"
git push --tags "$OPT_remote" "$branch"
