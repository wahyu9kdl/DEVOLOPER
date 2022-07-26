#!/usr/bin/env bash
#
# git_user.sh
# @author acrazing
# @since 2016-12-01 12:07:19
# @desc git_user.sh
#

__intro__="Set local user and email for git"
__help__="`basename $0` <id>
        use cached name/email pair
    `basename $0` <user.name> <user.email>
        use new name email pair to set
    `basename $0` <id> <user.name> <user.email>
        add a cached id pair
    `basename $0` --list
        get cached pair
    
    This is use for set git config of 'user.name' and 'user.email'
    If you own multiple identity, this is useful!
"

. "`dirname $0`/funcs.sh"

cache_name="$HOME/.cache_git_user"

list() {
    if [ ! -f $cache_name ] || [ $(cat $cache_name | wc -c) -lt 2 ]; then
        warn "No cached pair"
    fi
    if [ -t 1 ]; then
        cat $cache_name | awk -F"|" "{printf \"\033[33m%-10s\033[0m%-20s%-40s\n\", \$1,\$2,\$3}"
    else
        cat $cache_name | awk -F"|" "{printf \"%-10s%-20s%-40s\n\", \$1,\$2,\$3}"
    fi
}


add() {
    echo "$1|$2|$3" >> $cache_name
}

update() {
    sed -i '' -E "s/^$1\|.+/$1|$2|$3/"
}

use() {
    git config --unset-all user.name
    git config --unset-all user.email
    git config --add user.name "$1"
    git config --add user.email "$2"
}

get() {
    cat $cache_name | grep -E "^$1\\|" | awk -F"|" '{print $2,$3}'
}

has() {
    if [ -f $cache_name ]; then
        cat $cache_name | grep -E "^$1\\|"
    fi
}

if [ $# -eq 1 ]; then
    if [ "$1" != "--list" ]; then
        if [ "$(has "$1")" == "" ]; then
            error "Cannot find specified id"
        fi
        use $(get $1)
    else
        list
    fi
    exit 0
fi

if [ $# -eq 2 ]; then
    use "$1" "$2"
    exit 0
fi

if [ $# -eq 3 ]; then
    if [ "$(has "$1")" != "" ]; then
        update "$@"
    else
        add "$@"
    fi
    exit 0
fi

help
