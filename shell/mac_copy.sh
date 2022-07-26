#!/usr/bin/env bash
#
# mac_copy.sh
# @author acrazing
# @since 2016-12-06 14:32:02
# @desc mac_copy.sh
#

__intro__="Execute command and copy the command and output to clipboard"
__help__="`basename $0` <cmd> [...args]"

. "`dirname $0`/funcs.sh"

set +e
bash -cx "$*" |& pbcopy
pbpaste
