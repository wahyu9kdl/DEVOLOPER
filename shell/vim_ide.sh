#!/usr/bin/env bash
#
# vim_ide.sh
# @author acrazing
# @since 2016-12-01 15:03:44
# @desc vim_ide.sh
#

__intro__="Config vim to be a ide"
__help__="`basename $0`"

. "`dirname $0`/funcs.sh"

git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim

cp "`dirname $0`/.vimrc" "~/"

vim -c :PluginInstall


