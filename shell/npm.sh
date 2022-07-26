#!/usr/bin/env bash
# Copyright 2018 acrazing <joking.young@gmail.com>. All rights reserved.
# @since 2018-06-07 22:51:32

__intro__="use npmjs.org as registry temporary"
__help__="npm.sh cmd ...args"

. "$(dirname $0)/funcs.sh"

set -x
set +e

npm config set registry https://registry.npmjs.org/

"$@"

code=$?

npm config set registry https://registry.npm.taobao.org/

exit $code

