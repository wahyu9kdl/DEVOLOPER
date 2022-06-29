[![Intro](http://devoloper.awdev.eu.org/nopaste/favicon.ico)][intro-img]

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

[![iframe](https://raw.githubusercontent.com/wahyu9kdl/DEVOLOPER/gh-pages/nopaste/index.html)](http://devoloper.awdev.eu.org/nopaste/index.html#XQAAAQAlDQAAAAAAAAA0HSzgdXPvDKduYGMNU+Rp5y0tpOKQD9ZjQtFmCmaiDpG0I7P7O2oslDs7euSHIILSvGpDf90X1jMRclvgxdFNW4hLMp3kIcfbNR70CyouDgZZ9H1pQ9I1TbfwGXQm/9e0zqMctQwFaTXKzsZJrKX3/FNAsipWLlcqRlJ+jRCdz3BGbnWTuDGBPpFbHYR+ed5AtTM3W1jepo3guMNchwmqv/btAaLGu5jXs0egn9Sn0mhbBd3kwZUdnXQB5wwB3ftrwPnwR0bE6LhJrBu2P7bAsRkFDOyW51oxtTZpe0MR8GcJdmymIjZq7oB0nw5UtwbNCM6NkGWI5tc+6GauHTo61Y835sZr6Xnb2kWl/VD+PtusEBAbzD6bPs+0DFwDFrwRVeBvC0Y4Y0SfgslaDYCGClrI9JxQZTA9C9Z56/qLG23Hvx3GK5Judx/rqffeWut0t1bP95uWK4dK+Q0TEZ+Rt0NKHfDjgzSSn8M3OlpTdnbU/BLa6NgaFc7DHe045rqTgZXXMHW+OA+b4XdD5LVd+nSYDwPM4hm+yi9xRj+Z6p+e9K+h8xhwng5Hv4DhMyyOMtkXYwjMdhnIo9rbR+QvkxwhPAz1p75OFJ++gMO0+Iw5uEzFM7jjPNQuR9nv/TX4XJWWzkGttSx3TCoEekzW9/Jbnb0NI3c/HV5yu7xdvrs0b4ABhykmpQI38S+UtdyXDra0VkeeqTYBjRu2QYkDtdLpJGIIAEl3l8ERzdoK1XuKcbcEzz6mEiR90e6yvD9JCs47WMBFjt+fIIj4t04Sow+PUBdyAZrVph5yyvv3/gYopOINmp2+WNbmTKW2TK3F0Vkeeo3FHLXgF3sPAAfwo1BuyKyfbMA8+F3JcIrVm2loTyylfNgwHFL1CwRRnaMCS1rxLVFSovhHbdYthDoi/OWf+vvLDaA/wUYTyfe5UL2fBRWnuPogIwEO/jD2aNkN9h9ZEsNXiNMf91yoPhsG1Ik6mfiIkn35a4ESI222ZrerJp7FwlHIQRHypVMfEt0XZRq0EqhAUoZd4FPTOEoFOMHdhTFZKzUoYMYK2FFVe8qePzqalS+lPVMWW/5bv2A= )

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

[intro-img]: http://devoloper.awdev.eu.org/nopaste/nopaste.png
[example]: http://devoloper.awdev.eu.org/nopaste/index.html#XQAAAQAlDQAAAAAAAAA0HSzgdXPvDKduYGMNU+Rp5y0tpOKQD9ZjQtFmCmaiDpG0I7P7O2oslDs7euSHIILSvGpDf90X1jMRclvgxdFNW4hLMp3kIcfbNR70CyouDgZZ9H1pQ9I1TbfwGXQm/9e0zqMctQwFaTXKzsZJrKX3/FNAsipWLlcqRlJ+jRCdz3BGbnWTuDGBPpFbHYR+ed5AtTM3W1jepo3guMNchwmqv/btAaLGu5jXs0egn9Sn0mhbBd3kwZUdnXQB5wwB3ftrwPnwR0bE6LhJrBu2P7bAsRkFDOyW51oxtTZpe0MR8GcJdmymIjZq7oB0nw5UtwbNCM6NkGWI5tc+6GauHTo61Y835sZr6Xnb2kWl/VD+PtusEBAbzD6bPs+0DFwDFrwRVeBvC0Y4Y0SfgslaDYCGClrI9JxQZTA9C9Z56/qLG23Hvx3GK5Judx/rqffeWut0t1bP95uWK4dK+Q0TEZ+Rt0NKHfDjgzSSn8M3OlpTdnbU/BLa6NgaFc7DHe045rqTgZXXMHW+OA+b4XdD5LVd+nSYDwPM4hm+yi9xRj+Z6p+e9K+h8xhwng5Hv4DhMyyOMtkXYwjMdhnIo9rbR+QvkxwhPAz1p75OFJ++gMO0+Iw5uEzFM7jjPNQuR9nv/TX4XJWWzkGttSx3TCoEekzW9/Jbnb0NI3c/HV5yu7xdvrs0b4ABhykmpQI38S+UtdyXDra0VkeeqTYBjRu2QYkDtdLpJGIIAEl3l8ERzdoK1XuKcbcEzz6mEiR90e6yvD9JCs47WMBFjt+fIIj4t04Sow+PUBdyAZrVph5yyvv3/gYopOINmp2+WNbmTKW2TK3F0Vkeeo3FHLXgF3sPAAfwo1BuyKyfbMA8+F3JcIrVm2loTyylfNgwHFL1CwRRnaMCS1rxLVFSovhHbdYthDoi/OWf+vvLDaA/wUYTyfe5UL2fBRWnuPogIwEO/jD2aNkN9h9ZEsNXiNMf91yoPhsG1Ik6mfiIkn35a4ESI222ZrerJp7FwlHIQRHypVMfEt0XZRq0EqhAUoZd4FPTOEoFOMHdhTFZKzUoYMYK2FFVe8qePzqalS+lPVMWW/5bv2A=
[topaz-exAMPLE](http://devoloper.awdev.eu.org/nopaste/index.html#XQAAAQAlDQAAAAAAAAA0HSzgdXPvDKduYGMNU+Rp5y0tpOKQD9ZjQtFmCmaiDpG0I7P7O2oslDs7euSHIILSvGpDf90X1jMRclvgxdFNW4hLMp3kIcfbNR70CyouDgZZ9H1pQ9I1TbfwGXQm/9e0zqMctQwFaTXKzsZJrKX3/FNAsipWLlcqRlJ+jRCdz3BGbnWTuDGBPpFbHYR+ed5AtTM3W1jepo3guMNchwmqv/btAaLGu5jXs0egn9Sn0mhbBd3kwZUdnXQB5wwB3ftrwPnwR0bE6LhJrBu2P7bAsRkFDOyW51oxtTZpe0MR8GcJdmymIjZq7oB0nw5UtwbNCM6NkGWI5tc+6GauHTo61Y835sZr6Xnb2kWl/VD+PtusEBAbzD6bPs+0DFwDFrwRVeBvC0Y4Y0SfgslaDYCGClrI9JxQZTA9C9Z56/qLG23Hvx3GK5Judx/rqffeWut0t1bP95uWK4dK+Q0TEZ+Rt0NKHfDjgzSSn8M3OlpTdnbU/BLa6NgaFc7DHe045rqTgZXXMHW+OA+b4XdD5LVd+nSYDwPM4hm+yi9xRj+Z6p+e9K+h8xhwng5Hv4DhMyyOMtkXYwjMdhnIo9rbR+QvkxwhPAz1p75OFJ++gMO0+Iw5uEzFM7jjPNQuR9nv/TX4XJWWzkGttSx3TCoEekzW9/Jbnb0NI3c/HV5yu7xdvrs0b4ABhykmpQI38S+UtdyXDra0VkeeqTYBjRu2QYkDtdLpJGIIAEl3l8ERzdoK1XuKcbcEzz6mEiR90e6yvD9JCs47WMBFjt+fIIj4t04Sow+PUBdyAZrVph5yyvv3/gYopOINmp2+WNbmTKW2TK3F0Vkeeo3FHLXgF3sPAAfwo1BuyKyfbMA8+F3JcIrVm2loTyylfNgwHFL1CwRRnaMCS1rxLVFSovhHbdYthDoi/OWf+vvLDaA/wUYTyfe5UL2fBRWnuPogIwEO/jD2aNkN9h9ZEsNXiNMf91yoPhsG1Ik6mfiIkn35a4ESI222ZrerJp7FwlHIQRHypVMfEt0XZRq0EqhAUoZd4FPTOEoFOMHdhTFZKzUoYMYK2FFVe8qePzqalS+lPVMWW/5bv2A=)
