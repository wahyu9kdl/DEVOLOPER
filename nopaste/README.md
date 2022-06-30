# nopaste
[![Intro](http://devoloper.awdev.eu.org/nopaste/favicon.ico)][intro-img]

VIEW IMAGE

![Image View Projets](/nopaste/img/nopaste.jpg)

# What is NoPaste?

[NoPaste](http://devoloper.awdev.eu.org/nopaste/) is an open-source website similar to Pastebin where you can store any piece of code, and generate links for easy sharing

However, what makes NoPaste special is that it works with **no database**, and **no back-end code**. Instead, the data is compressed and **stored entirely in the link** that you share, nowhere else!

---> [Get Started](http://devoloper.awdev.eu.org/nopaste/)

### Because of this design:

-   🗑️ Your data **cannot be deleted** from NoPaste
-   🔞 Your data **cannot be censored**
-   👁️ The server hosting NoPaste (or any clone of it) **cannot read or access** your data
-   ⏳ Your data will be accessible **forever** (as long as you have the link)
-   🔀 You can access your data on **every NoPaste clone**, including [your own](https://github.com/wahyu9kdl/DEVOLOPER/nopaste/wiki/Deploy-your-own-version-of-NoPaste)
-   🔍 Google **will not index** your data, even if your link is public

> **Note:** This project is a copy of [Topaz's paste service][topaz-example], with a reworked design and a few additional features (syntax highlighting, line numbers, line wrapping, embedding...)

## How it works

When you click on "Generate Link", NoPaste compresses the whole text using the
[LZMA algorithm](https://en.wikipedia.org/wiki/Lempel%E2%80%93Ziv%E2%80%93Markov_chain_algorithm), encodes it in
[Base64](https://en.wikipedia.org/wiki/Base64), and puts it in the optional URL fragment, after the first `#` symbol: `nopaste.ml/#<your data goes here>`

When you open a link, NoPaste reads, decodes, and decompresses whatever is after the `#`, and displays the result in the editor.

This process is done entirely **in your browser**, and the web server hosting NoPaste [never has access to the fragment](https://en.wikipedia.org/wiki/Fragment_identifier)

For example, [this is the CSS code used by NoPaste][example]

## Embedded NoPaste snippets

You can include NoPaste code snippets into your own website by clicking the _Embed_ button and using the generated HTML code.

Here is an example of generated code and how it looks (click on the screenshot to see the interactive version)

```html
<iframe width="100%" height="1165" 
frameborder="0" src="http://devoloper.awdev.eu.org/nopaste/index.html#XQAAAQAlDQAAAAAAAAA0HSzgdXPvDKduYGMNU+Rp5y0tpOKQD9ZjQtFmCmaiDpG0I7P7O2oslDs7euSHIILSvGpDf90X1jMRclvgxdFNW4hLMp3kIcfbNR70CyouDgZZ9H1pQ9I1TbfwGXQm/9e0zqMctQwFaTXKzsZJrKX3/FNAsipWLlcqRlJ+jRCdz3BGbnWTuDGBPpFbHYR+ed5AtTM3W1jepo3guMNchwmqv/btAaLGu5jXs0egn9Sn0mhbBd3kwZUdnXQB5wwB3ftrwPnwR0bE6LhJrBu2P7bAsRkFDOyW51oxtTZpe0MR8GcJdmymIjZq7oB0nw5UtwbNCM6NkGWI5tc+6GauHTo61Y835sZr6Xnb2kWl/VD+PtusEBAbzD6bPs+0DFwDFrwRVeBvC0Y4Y0SfgslaDYCGClrI9JxQZTA9C9Z56/qLG23Hvx3GK5Judx/rqffeWut0t1bP95uWK4dK+Q0TEZ+Rt0NKHfDjgzSSn8M3OlpTdnbU/BLa6NgaFc7DHe045rqTgZXXMHW+OA+b4XdD5LVd+nSYDwPM4hm+yi9xRj+Z6p+e9K+h8xhwng5Hv4DhMyyOMtkXYwjMdhnIo9rbR+QvkxwhPAz1p75OFJ++gMO0+Iw5uEzFM7jjPNQuR9nv/TX4XJWWzkGttSx3TCoEekzW9/Jbnb0NI3c/HV5yu7xdvrs0b4ABhykmpQI38S+UtdyXDra0VkeeqTYBjRu2QYkDtdLpJGIIAEl3l8ERzdoK1XuKcbcEzz6mEiR90e6yvD9JCs47WMBFjt+fIIj4t04Sow+PUBdyAZrVph5yyvv3/gYopOINmp2+WNbmTKW2TK3F0Vkeeo3FHLXgF3sPAAfwo1BuyKyfbMA8+F3JcIrVm2loTyylfNgwHFL1CwRRnaMCS1rxLVFSovhHbdYthDoi/OWf+vvLDaA/wUYTyfe5UL2fBRWnuPogIwEO/jD2aNkN9h9ZEsNXiNMf91yoPhsG1Ik6mfiIkn35a4ESI222ZrerJp7FwlHIQRHypVMfEt0XZRq0EqhAUoZd4FPTOEoFOMHdhTFZKzUoYMYK2FFVe8qePzqalS+lPVMWW/5bv2A="></iframe>

```

![Image View Projets](/nopaste/img/awdev-nopaste.jpg)


Feel free to edit the `height` and `width` attributes, so they suit your needs

## Maximum sizes for links

NoPaste is great for sharing code snippets on various platforms.

These are the maximum link lengths on some apps and browsers.

| App     | Max length |
| ------- | ---------- |
| Reddit  | 10,000     |
| Twitter | 4,088      |
| Slack   | 4,000      |
| QR Code | 2,610      |
| Bitly   | 2,048      |

| Browser         | Max length                | Notes                                   |
| --------------- | ------------------------- | --------------------------------------- |
| Google Chrome   | (win) 32,779 (mac) 10,000 | Will not display, but larger links work |
| Firefox         | >64,000                   |                                         |
| Microsoft IE 11 | 4,043                     | Will not show more than 2,083           |
| Microsoft Edge  | 2,083                     | Anything over 2083 will fail            |
| Android         | 8,192                     |                                         |
| Safari          | Lots                      |                                         |

## Generate NoPaste links

NoPaste links can be created easily from your system's command line:

```bash
# Linux
echo -n 'Hello World' | lzma | base64 -w0 | xargs -0 printf "https://devoloper.awdev.eu.org/nopaste/#%s"

# Mac
echo -n 'Hello World' | lzma | base64 | xargs -0 printf "https://devoloper.awdev.eu.org/nopaste/#%s"

# Windows / WSL / Linux
echo -n 'Hello World' | xz --format=lzma | base64 -w0 | printf https://devoloper.awdev.eu.org/nopaste/#%s" "$(cat -)"
```

## Deploy your own version of NoPaste

NoPaste is just a bunch of static files, making it really easy to deploy on any kind of file server.

Read [the wiki](https://github.com/wahyu9kdl/DEVOLOPER/nopaste/wiki/Deploy-your-own-version-of-NoPaste) to see how you can deploy your own version of NoPaste for free using Github Pages
[NoPaste snippet](https://devoloper.awdev.eu.org/nopaste/#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)

[intro-img]: http://devoloper.awdev.eu.org/nopaste/nopaste.png
[example]: http://devoloper.awdev.eu.org/nopaste/index.html#XQAAAQAlDQAAAAAAAAA0HSzgdXPvDKduYGMNU+Rp5y0tpOKQD9ZjQtFmCmaiDpG0I7P7O2oslDs7euSHIILSvGpDf90X1jMRclvgxdFNW4hLMp3kIcfbNR70CyouDgZZ9H1pQ9I1TbfwGXQm/9e0zqMctQwFaTXKzsZJrKX3/FNAsipWLlcqRlJ+jRCdz3BGbnWTuDGBPpFbHYR+ed5AtTM3W1jepo3guMNchwmqv/btAaLGu5jXs0egn9Sn0mhbBd3kwZUdnXQB5wwB3ftrwPnwR0bE6LhJrBu2P7bAsRkFDOyW51oxtTZpe0MR8GcJdmymIjZq7oB0nw5UtwbNCM6NkGWI5tc+6GauHTo61Y835sZr6Xnb2kWl/VD+PtusEBAbzD6bPs+0DFwDFrwRVeBvC0Y4Y0SfgslaDYCGClrI9JxQZTA9C9Z56/qLG23Hvx3GK5Judx/rqffeWut0t1bP95uWK4dK+Q0TEZ+Rt0NKHfDjgzSSn8M3OlpTdnbU/BLa6NgaFc7DHe045rqTgZXXMHW+OA+b4XdD5LVd+nSYDwPM4hm+yi9xRj+Z6p+e9K+h8xhwng5Hv4DhMyyOMtkXYwjMdhnIo9rbR+QvkxwhPAz1p75OFJ++gMO0+Iw5uEzFM7jjPNQuR9nv/TX4XJWWzkGttSx3TCoEekzW9/Jbnb0NI3c/HV5yu7xdvrs0b4ABhykmpQI38S+UtdyXDra0VkeeqTYBjRu2QYkDtdLpJGIIAEl3l8ERzdoK1XuKcbcEzz6mEiR90e6yvD9JCs47WMBFjt+fIIj4t04Sow+PUBdyAZrVph5yyvv3/gYopOINmp2+WNbmTKW2TK3F0Vkeeo3FHLXgF3sPAAfwo1BuyKyfbMA8+F3JcIrVm2loTyylfNgwHFL1CwRRnaMCS1rxLVFSovhHbdYthDoi/OWf+vvLDaA/wUYTyfe5UL2fBRWnuPogIwEO/jD2aNkN9h9ZEsNXiNMf91yoPhsG1Ik6mfiIkn35a4ESI222ZrerJp7FwlHIQRHypVMfEt0XZRq0EqhAUoZd4FPTOEoFOMHdhTFZKzUoYMYK2FFVe8qePzqalS+lPVMWW/5bv2A=
[topaz-exAMPLE](http://devoloper.awdev.eu.org/nopaste/index.html#XQAAAQAlDQAAAAAAAAA0HSzgdXPvDKduYGMNU+Rp5y0tpOKQD9ZjQtFmCmaiDpG0I7P7O2oslDs7euSHIILSvGpDf90X1jMRclvgxdFNW4hLMp3kIcfbNR70CyouDgZZ9H1pQ9I1TbfwGXQm/9e0zqMctQwFaTXKzsZJrKX3/FNAsipWLlcqRlJ+jRCdz3BGbnWTuDGBPpFbHYR+ed5AtTM3W1jepo3guMNchwmqv/btAaLGu5jXs0egn9Sn0mhbBd3kwZUdnXQB5wwB3ftrwPnwR0bE6LhJrBu2P7bAsRkFDOyW51oxtTZpe0MR8GcJdmymIjZq7oB0nw5UtwbNCM6NkGWI5tc+6GauHTo61Y835sZr6Xnb2kWl/VD+PtusEBAbzD6bPs+0DFwDFrwRVeBvC0Y4Y0SfgslaDYCGClrI9JxQZTA9C9Z56/qLG23Hvx3GK5Judx/rqffeWut0t1bP95uWK4dK+Q0TEZ+Rt0NKHfDjgzSSn8M3OlpTdnbU/BLa6NgaFc7DHe045rqTgZXXMHW+OA+b4XdD5LVd+nSYDwPM4hm+yi9xRj+Z6p+e9K+h8xhwng5Hv4DhMyyOMtkXYwjMdhnIo9rbR+QvkxwhPAz1p75OFJ++gMO0+Iw5uEzFM7jjPNQuR9nv/TX4XJWWzkGttSx3TCoEekzW9/Jbnb0NI3c/HV5yu7xdvrs0b4ABhykmpQI38S+UtdyXDra0VkeeqTYBjRu2QYkDtdLpJGIIAEl3l8ERzdoK1XuKcbcEzz6mEiR90e6yvD9JCs47WMBFjt+fIIj4t04Sow+PUBdyAZrVph5yyvv3/gYopOINmp2+WNbmTKW2TK3F0Vkeeo3FHLXgF3sPAAfwo1BuyKyfbMA8+F3JcIrVm2loTyylfNgwHFL1CwRRnaMCS1rxLVFSovhHbdYthDoi/OWf+vvLDaA/wUYTyfe5UL2fBRWnuPogIwEO/jD2aNkN9h9ZEsNXiNMf91yoPhsG1Ik6mfiIkn35a4ESI222ZrerJp7FwlHIQRHypVMfEt0XZRq0EqhAUoZd4FPTOEoFOMHdhTFZKzUoYMYK2FFVe8qePzqalS+lPVMWW/5bv2A=)

# Devoloper Publication

- COURSES [AWDEV LEARN](https://www.awdev.eu.org)
- ID [AWDEV CORPORATION](https://www.awdev.my.id/home.html)
- QR [GENERATOR](https://bit.ly/3NgDUW7)
- PRO [PROFILE](https://wahyu9kdl.github.io/)
- [BUILD CODE](https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fwahyu9kdl)

# SUPPORT

- [SAWERIA](https://saweria.co/AwGroupChannel)
- [TRAKTEER](https://trakteer.id/awfanspage/tip)
- [PATREON](https://patreon.com/Awfanspage)
- [PAYPAL](https://paypal.me/wahyudi9kdl)

