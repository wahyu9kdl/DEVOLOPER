<h3 align="center">Take Action</h3>
<p align="center">This is an action to assign yourself to an issue for a repo you are not a contributor to.<p>

## Usage

This GitHub Action lets a prospective contributor assign themselves to an issue, and optionally leaves a comment on the issue.


## Setup

This GitHub Action requires a GITHUB_TOKEN and can be optionally configured with a message to the prospective contributor.
  
```yaml
# .github/workflows/take.yml 
name: Assign issue to contributor
on: 
  issue_comment:

jobs:
  assign:
    name: Take an issue
    runs-on: ubuntu-latest
    steps:
    - name: take the issue
      uses: bdougie/take-action@main
      env:
        GITHUB_TOKEN: ${{ github.token }}
      with:
        message: Thanks for taking this issue! Let us know if you have any questions!
```
## LICENSE 

<!---
wahyu9kdl/wahyu9kdl is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
---><a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Lisensi Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />Ciptaan disebarluaskan di bawah <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Lisensi Creative Commons Atribusi 4.0 Internasional</a>.
Copyright (c) 2021, Aw Score Code - AL HIKMAH [ Desain by : Aw Group Channel ] All rights reserved.
For licensing, <a rel="license" href="https://www.alhikmah.my.id/p/license.html">see LICENSE.html</a>

Copyright (c) 2021, Aw Score Code - Desain by : Aw Group Channel All rights reserved.
For licensing, <a rel="license" href="https://www.awgroupchannel.my.id/p/license.html">see LICENSE.html</a>
<!--
Copyright (c) 2021, Aw Score Code - AL HIKMAH [ Desain by : Aw Group Channel ] All rights reserved.
For licensing, see LICENSE.html or https://kata-h.blogspot.com/p/license.html-->
<!--
Copyright (c) 2021, Aw Score Code - Desain by : Aw Group Channel All rights reserved.
For licensing, see LICENSE.html or https://www.awgroupchannel.my.id/p/license.html
-->
