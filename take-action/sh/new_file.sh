#!/usr/bin/env bash
#
# init_file_js.sh
# @author acrazing
# @since 2016-02-23 18:09:02
# @desc
#

[ "1" = "0" ] && . ./_funcs.sh

__intro__="Create c style files"
__help__="\$0 [args] [files...]
For example:
    \$0 src/index.tsx src/index.c src/index.cc
    will create three files under src directory, and add c style file
    comment to the file, and try to add it to vcs(git/svn)
    if the filename endswith .tsx, will auto add import react line"
__args__="
    x:script:false:bool:1:1:add execute privilege to the file
    __:filename::string:1:100:the filename list
"

OPT_script=""
OPT_filename=()
. "`dirname $0`/_funcs.sh" "$@"
set -e

function go_package() {
    for file in ./*.go; do
        name=$(grep -o -E '^package .+$' "$file" | awk -F ' ' '{print $2}')
        if [ "$name" != "" ]; then
            echo "$name"
            return
        fi
    done
    echo $(basename $(realpath .))
}

function go_full_package() {
    echo "$(realpath --relative-to="$GOPATH/src" .)"
}

pwd=$PWD
debug "files ${OPT_filename[@]}"
for i in ${OPT_filename[@]}
do
    mkdir -p $(dirname "$i")
    touch "$i"
    dir=$(dirname $(realpath "$i"))
    name=$(basename "$i")
    cd "$dir"
    X="$OPT_script"
    copy="Copyright $(date "+%Y") $(git_user) <$(git_email)>. All rights reserved."
    case "$name" in
        *.go)
            content="// $copy\n// Since $now\npackage $(go_package)"
            ;;
        *.proto)
            content="// $copy
// Since $now
syntax = \"proto3\";
package $(go_package);

import \"github.com/gogo/protobuf/gogoproto/gogo.proto\";

option (gogoproto.goproto_getters_all) = false;
option go_package = \"$(go_full_package)\";"
            ;;
        *.py)
            content="#!/usr/bin/env python3\n# -*- coding: utf-8 -*-\n# $copy\n# @since $now"
            X="1"
            ;;
        *.sh)
            content="#!/usr/bin/env bash\n# $copy\n# @since $now"
            X="1"
            if [ -f ./_funcs.sh ]; then
                content="$content
[ \"1\" = \"0\" ] && . ./_funcs.sh

__FILE__=\$(basename \$0)
__DIR__=\$(dirname \$0)
__intro__=\"__PLEASE_PUT_YOUR_DESCRIPTION_TO_HERE__\"
__help__=\"\$__FILE__ [args]\"
__args__=\"\"
. \"\$__DIR__/_funcs.sh\" \"\$@\"
set -e
"
            fi
            ;;
        *.md)
            content="#"
            ;;
        *.json)
            content="{}"
            ;;
        *.html)
            content="<!doctype html>
<html>
<head>
  <meta charset=\"utf-8\">
  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,shrink-to-fit=no\">
  <title></title>
</head>
<body>
</body>
</html>"
            ;;
        *)
            content="/*!\n * $copy\n * @since $now\n */"
            ;;
    esac
    case "$name" in
        *.tsx)
            content="$content\n\nimport * as React from 'react'"
            ;;
    esac
    echo -e "$content" > "$name"
    try_add_file.sh "$name"
    if [ "$X" == "1" ]; then
        chmod +x "$name"
    fi
    cd "$pwd"
done
