" author acrazing

let mapleader=";"


filetype plugin indent on
nmap LB 0
nmap LE $


vnoremap <Leader>y "+y
nmap <Leader>p "+p
nmap <Leader>x :x<CR>
nmap <Leader>q :q<CR>
nmap <Leader>w :w<CR>
nmap <Leader>WQ :wa<CR>:q<CR>
nmap <Leader>Q :qa!<CR>


nnoremap nw <C-W><C-W>
nnoremap <Leader>l <C-W>l
nnoremap <Leader>h <C-W>h
nnoremap <Leader>k <C-W>k
nnoremap <Leader>j <C-W>j
nmap <Leader>t :TagbarToggle<CR>
nmap <Leader>d :NERDTreeToggle<CR>

autocmd BufWritePost $MYVIMRC source $MYVIMRC


syntax on


set incsearch
set ignorecase
set nocompatible
set wildmenu
set ruler
set number
set hlsearch
set autoindent
set laststatus=2
set expandtab
set tabstop=4
set shiftwidth=4
set softtabstop=4
set foldmethod=syntax
set nofoldenable

" Use Vim settings, rather than Vi settings (much better!).
" This must be first, because it changes other options as a side effect.
set nocompatible

" allow backspacing over everything in insert mode
set backspace=indent,eol,start

set history=50		" keep 50 lines of command line history
set showcmd		" display incomplete commands


" vundle 环境设置
set rtp+=~/.vim/bundle/Vundle.vim
" vundle 管理的插件列表必须位于 vundle#begin() 和 vundle#end() 之间
call vundle#begin()
Plugin 'VundleVim/Vundle.vim'
Plugin 'scrooloose/nerdtree'
Plugin 'majutsushi/tagbar'
Plugin 'Valloric/YouCompleteMe'
Plugin 'powerline/powerline'
Plugin 'vim-scripts/Conque-Shell'
Plugin 'Quramy/tsuquyomi'
Plugin 'leafgarland/typescript-vim'
Plugin 'Shougo/vimproc.vim'
Plugin 'isRuslan/vim-es6'
" 插件列表结束
call vundle#end()

python from powerline.vim import setup as powerline_setup
python powerline_setup()
python del powerline_setup

let g:ycm_show_diagnostics_ui=0

let g:typescript_indent_disable = 1

autocmd BufNewFile,BufRead *.ts,*.tsx setlocal filetype=typescript


