# Utils commands for developer

This is a project hold on some useful shell/python scripts for developer

## Install

```bash
git clone https://github.com/acrazing/scripts.git

sh ./scripts/install.sh
```

## Index

- [funcs.sh](#funcssh) - util functions
- [git_alias.sh](#git_aliassh) - Set git short alias
- [git_diff_files.sh](#git_diff_filessh) - Get changed and exists files for git
- [git_push.sh](#git_pushsh) - commit changes to work tree and push it to 'origin' remote and change version for package.json
- [git_user.sh](#git_usersh) - Set local user and email for git
- [help.sh](#helpsh) - Get all installed commands on your machine
- [install.sh](#installsh) - Install scripts to your machine
- [mac_copy.sh](#mac_copysh) - Execute command and copy the command and output to clipboard
- [new_file.sh](#new_filesh) - Create c style files
- [npm.sh](#npmsh) - use npmjs.org as registry temporary
- [readme.sh](#readmesh) - [Internal] generate readme for the project
- [stop.sh](#stopsh) - kill a process use SIGKILL
- [try_add_file.sh](#try_add_filesh) - Automaticly add file to vcs for svn/git
- [vim_ide.sh](#vim_idesh) - Config vim to be a ide

## Commands


### funcs.sh

util functions [source](./funcs.sh)

```bash
funcs.sh:
    util functions

Usage:
    util functions for other shell commands
```

[top](#index)

### git_alias.sh

Set git short alias [source](./git_alias.sh)

```bash
git_alias.sh:
    Set git short alias

Usage:
    git_alias.sh
    This only need to run once, after do it, you
    can use `git config --list --global | grep alias.`
    to get all alias

    Currently, this command will set follow alias:

    st:   shortcut for status
    alog: shortcut to print commit history in online, hide merge commit
    mlog: shortcut to print commit history in online, show merge commit
    ci:   shortcut for commit
    co:   shortcut for checkout
    b:    shortcut for branch
    
```

[top](#index)

### git_diff_files.sh

Get changed and exists files for git [source](./git_diff_files.sh)

```bash
git_diff_files.sh:
    Get changed and exists files for git

Usage:
    git_diff_files.sh [filter]
    If filter is set, will use this to filter file list
    The filter format is regex
```

[top](#index)

### git_push.sh

commit changes to work tree and push it to 'origin' remote and change version for package.json [source](./git_push.sh)

```bash
git_push.sh:
    commit changes to work tree and push it to 'origin' remote and change version for package.json

Usage:
    git_push.sh [version=none] <message>
    versions:
        none: do nothing
        patch: 1.1.1 => 1.1.2
        minor: 1.1.1 => 1.2.0
        major: 1.1.1 => 2.0.0
    If the first input param is not one of the upon enum, will
    treat as message, and version will be default value

    If the branch is new, will set upstream to origin/branch

    If no branch, will set as master
    
    If version is not none, will update version, and add
    version tag, and push it to remote
```

[top](#index)

### git_user.sh

Set local user and email for git [source](./git_user.sh)

```bash
git_user.sh:
    Set local user and email for git

Usage:
    git_user.sh <id>
        use cached name/email pair
    git_user.sh <user.name> <user.email>
        use new name email pair to set
    git_user.sh <id> <user.name> <user.email>
        add a cached id pair
    git_user.sh --list
        get cached pair
    
    This is use for set git config of 'user.name' and 'user.email'
    If you own multiple identity, this is useful!
```

[top](#index)

### help.sh

Get all installed commands on your machine [source](./help.sh)

```bash
help.sh:
    Get all installed commands on your machine

Usage:
    help.sh
```

[top](#index)

### install.sh

Install scripts to your machine [source](./install.sh)

```bash
install.sh:
    Install scripts to your machine

Usage:
    install.sh
```

[top](#index)

### mac_copy.sh

Execute command and copy the command and output to clipboard [source](./mac_copy.sh)

```bash
mac_copy.sh:
    Execute command and copy the command and output to clipboard

Usage:
    mac_copy.sh <cmd> [...args]
```

[top](#index)

### new_file.sh

Create c style files [source](./new_file.sh)

```bash
new_file.sh:
    Create c style files

Usage:
    new_file.sh <...filename>
    For example:
        new_file.sh src/index.tsx src/index.c src/index.cc
        will create three files under src directory, and add c style file
        comment to the file, and try to add it to vcs(git/svn)
        if the filename endswith .tsx, will auto add import react line
```

[top](#index)

### npm.sh

use npmjs.org as registry temporary [source](./npm.sh)

```bash
npm.sh:
    use npmjs.org as registry temporary

Usage:
    npm.sh cmd ...args
```

[top](#index)

### readme.sh

[Internal] generate readme for the project [source](./readme.sh)

```bash
readme.sh:
    [Internal] generate readme for the project

Usage:
    readme.sh
```

[top](#index)

### stop.sh

kill a process use SIGKILL [source](./stop.sh)

```bash
stop.sh:
    kill a process use SIGKILL

Usage:
    stop.sh regex
```

[top](#index)

### try_add_file.sh

Automaticly add file to vcs for svn/git [source](./try_add_file.sh)

```bash
try_add_file.sh:
    Automaticly add file to vcs for svn/git

Usage:
    try_add_file.sh <...files>
```

[top](#index)

### vim_ide.sh

Config vim to be a ide [source](./vim_ide.sh)

```bash
vim_ide.sh:
    Config vim to be a ide

Usage:
    vim_ide.sh
```

[top](#index)

## License

[MIT](./LICENSE)

## Sponsor this project

[patreon.com/Awfanspage](https://patreon.com/Awfanspage)
[https://paypal.me/wahyudi9kdl](https://paypal.me/wahyudi9kdl)
[https://trakteer.id/awfanspage/tip](https://trakteer.id/awfanspage/tip)
[https://saweria.co/AwGroupChannel](https://saweria.co/AwGroupChannel)