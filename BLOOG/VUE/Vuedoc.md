# Vuedoc Markdown Documentation Generator

Generate a Markdown Documentation for a Vue file

[![npm](https://img.shields.io/npm/v/@vuedoc/md.svg)](https://www.npmjs.com/package/@vuedoc/md) [![Build status](https://gitlab.com/vuedoc/md/badges/master/pipeline.svg)](https://gitlab.com/vuedoc/md/pipelines) [![Test coverage](https://gitlab.com/vuedoc/md/badges/master/coverage.svg)](https://gitlab.com/vuedoc/md/-/jobs)

## Table of Contents

- [Install](#install)
- [Features](#features)
- [Command line usage](#command-line-usage)
- [Command line options](#command-line-options)
- [Programmatic Usage](#programmatic-usage)
- [Documentation Syntax](#documentation-syntax)
- [Specific Tags for Props](#specific-tags-for-props)
- [Examples](#examples)
  * [Generate a documentation for an SFC component](#generate-a-documentation-for-an-sfc-component)
  * [Generate a MDN-like documentation for a method](#generate-a-mdn-like-documentation-for-a-method)
- [Related projects](#related-projects)
- [Contribute](#contribute)
- [Versioning](#versioning)
- [License](#license)

## Install

```sh
# using in your project
npm install --save @vuedoc/parser @vuedoc/md

# using in command line
npm install --global @vuedoc/parser @vuedoc/md
```

## Features

- Generate documentation for component props
- Generate documentation for component data
- Generate documentation for computed properties with their dependencies
- Generate documentation for component events
- Generate documentation for component slots
- Generate documentation for component methods
- Support of JSDoc, Class Component, Vue Property Decorator, TypeDoc
- Support of `@description`, `@desc` and `@example`

Prop Types support

## Command line usage

```sh
# display the vuedoc.md version
vuedoc.md --version

# this print documentation in the standard output
vuedoc.md components/textarea.vue

# generate a Markdown documentation in a file docs/textarea.md
vuedoc.md components/textarea.vue --output docs/

# generate a Markdown documentation all components
vuedoc.md components/*.vue --output docs/

# update the API section of README.md with generated documentation
vuedoc.md components/textarea.vue --section "API" --output README.md

# combine generated documentations of all components into one
vuedoc.md --join components/*.vue --output README.md

# using pipe
cat components/textarea.vue | vuedoc.md

# using a configuration file
vuedoc.md --config vuedoc.config.js components/*.vue

# using the configuration file vuedoc.config.js
vuedoc.md -c components/*.vue
```

Bellow an output sample of [test/fixtures/textarea.example.vue](test/fixtures/textarea.example.vue):

````md
# MyTextarea

**Author:** Arya Stark

The custom HTML `<textarea>` component.

- **license** - MIT

## Slots

| Name      | Description                             |
| --------- | --------------------------------------- |
| `label`   | Use this slot to set the label          |
| `default` | Use this slot to set the textarea value |

## Props

| Name            | Type            | Description                                                                                                                                                  | Default                      |
| --------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- |
| `v-model`       | `String`        | Use this directive to create two-way data bindings with the component. It automatically picks the correct way to update the element based on the input type. |                              |
| `id` *required* | `String`        | Defines a unique identifier (ID) which must be unique in the whole document.                                                                                 |                              |
| `disabled`      | `Boolean`       | This Boolean property indicates that the user cannot interact with the control.                                                                              | `false`                      |
| `theme`         | `TextareaTheme` | Define a custom theme for the component.                                                                                                                     | `new DefaultTextareaTheme()` |

## Events

| Name    | Description                                                                                                                                                                                                                                                                                                                                       |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `input` | Fired when the value is changed.<br/>**Arguments**<br/><ul><li>**`value: string`** — The updated value</li></ul>                                                                                                                                                                                                                                  |
| `keyup` | Fired when a key is released.<br/>**Arguments**<br/><ul><li>**`event: KeyboardEvent`** — Object describes a user interaction with the keyboard</li><li>**`event.code: DOMString`** — The code value of the physical key represented by the event</li><li>**`event.key: DOMString`** — The key value of the key represented by the event</li></ul> |

## Methods

### Textarea.replace()

The `replace()` method returns a new string with some or all matches of a
`pattern` replaced by a `replacement`. The `pattern` can be a string or a
RegExp, and the `replacement` can be a string or a function to be called for
each match. If `pattern` is a string, only the first occurrence will be
replaced.

The original string is left unchanged.

**Example**

```js
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
const regex = /dog/gi;

console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"
```

**Syntax**

```typescript
const newStr = str.replace(pattern|substr, newSubstr|callback)
```

**Parameters**

- **`str: unknow`**

- **`newSubstr: String`**<br/>
  The String that replaces the substring specified by the specified regexp or
  substr parameter. A number of special replacement patterns are supported; see
  the "Specifying a string as a parameter" section below.

- **`pattern: RegExp`**<br/>
  A RegExp object or literal. The match or matches are replaced with newSubstr
  or the value returned by the specified function.

- **`substr: String`**<br/>
  A String that is to be replaced by newSubstr. It is treated as a literal
  string and is not interpreted as a regular expression. Only the first
  occurrence will be replaced.

- **`callback: Function`**<br/>
  A function to be invoked to create the new substring to be used to replace the
  matches to the given regexp or substr. The arguments supplied to this function
  are described in the "Specifying a function as a parameter" section below.

**Return value**

A new string, with some or all matches of a pattern replaced by a replacement.
````

## Command line options

```sh
-j, --join                    # Combine generated documentation for multiple component files into only one
-c, --config <filename>       # Use this config file (if argument is used but value is unspecified, defaults to vuedoc.config.js)
-l, --level <integer>         # Set the title level. An integer between 1 and 6
-w, --wordwrap <integer>      # The width of the text before wrapping to a new line. Set to `false` to disable word wrapping. Default is `80`
-o, --output <file or dir>    # The output directory. If absent, the STDOUT will be used
-s, --section <section name>  # Inject the generated documentation to a section. Works with `--output file`
--ignore-name                 # Ignore the component name on parsing
--ignore-description          # Ignore the component description on parsing
--ignore-keywords             # Ignore the component keywords on parsing
--ignore-slots                # Ignore the component slots on parsing
--ignore-props                # Ignore the component props on parsing
--ignore-computed             # Ignore the component computed properties on parsing
--ignore-data                 # Ignore the component data on parsing
--ignore-methods              # Ignore the component methods on parsing
--ignore-events               # Ignore the component events on parsing
```

**Overwrite Vuedoc Parser configuration using `vuedoc.config.js`**

```js
// vuedoc.config.js
const Vuedoc = require('@vuedoc/md')
const TypePugLoader = require('@vuedoc/parser/loader/pug')

module.exports = {
  output: 'docs/',
  parsing: {
    features: ['name', 'description', 'keywords', 'slots', 'model', 'props', 'events', 'methods'],
    loaders: [
      Vuedoc.Parser.Loader.extend('pug', TypePugLoader)
    ]
  }
}
```

And then:

```sh
vuedoc.md --config vuedoc.config.js components/*.vue
# or
vuedoc.md -c components/*.vue
```

See [Vuedoc Parser documentation](https://gitlab.com/vuedoc/parser#options)
for parsing options.

## Programmatic Usage

**Options**

| Name        | Type                    | Description                                                                                                                                                     |
|-------------|-------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `level`     | Integer                 | Set the title level. An integer between 1 and 6                                                                                                                 |
| `output`    | String                  | The output of the documentation. Can be a directory or a Markdown file. If absent, the STDOUT will be used                                                      |
| `section`   | String                  | Inject the generated documentation to a section. Works with `options.output` as Markdown file output                                                            |
| `parsing`   | Object                  | Overwrite the default [Vuedoc Parser configuration](https://gitlab.com/vuedoc/parser#options)                                                                   |
| `join`      | Boolean                 | Combine generated documentation for multiple component files into only one                                                                                      |
| `filenames` | String[]                | List of component filenames to parse and render. If `options.join === true`, `options.filenames` will parsing will be joined and rendered as a single component |
| `wordwrap`  | Integer                 | The width of the text before wrapping to a new line. Set to `0` to disable word wrapping. Default is `80`                                                       |
| `labels`    | Record<I18nKey, String> | I18n labels for translation. See [`@vuedoc/md/lib/I18n`](lib/I18n.js)                                                                                           |

**Usage**

```js
const vuedoc = require('@vuedoc/md')
const options = {
  join: true,
  filenames: [
    'components/input.mixin.vue',
    'components/checkbox.vue',
  ]
}

vuedoc.md(options)
  .then((document) => console.log(document))
  .catch((err) => console.error(err))
```

**Overwrite the default Vuedoc Parser configuration**

```js
const Vuedoc = require('@vuedoc/md')
const TypePugLoader = require('@vuedoc/parser/loader/pug')

const options = {
  filenames: [
    'test/fixtures/checkbox.vue',
  ],
  parsing: {
    features: ['name', 'description', 'keywords', 'slots', 'model', 'props', 'events', 'methods'],
    loaders: [
      Vuedoc.Parser.Loader.extend('pug', TypePugLoader)
    ]
  }
}

Vuedoc.md(options)
  .then((document) => console.log(document))
  .catch((err) => console.error(err))
```

See [Vuedoc Parser documentation](https://gitlab.com/vuedoc/parser#options)
for parsing options.

## Documentation Syntax

For the complete documentation syntax, please follow this link:

- Vuedoc Syntax: https://gitlab.com/vuedoc/parser#syntax

**Example**

```js
export default {
  name: 'CheckboxInput',
  props: {
    /**
     * The input format callback
     * @public
     */
    format: Function
  },
  methods: {
    /**
     * This will be ignored on parsing and rendering
     * @private
     */
    validate() {},
    /**
     * This will be ignored on parsing and rendering
     * @protected
     */
    commit() {}
  }
}
```

## Specific Tags for Props

You can assign a reference to a type using `@typeref {url}`

**Example**

```js
export default {
  props: {
    /**
     * UI Schema Descriptor to use for rendering.
     *
     * @typeref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
     */
    descriptor: {
      type: Object
    }
  }
}
```

This will render:

````md
| Name         | Type                                                                                                 | Description                                 |
| -------------| ---------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `descriptor` | [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)  | UI Schema Descriptor to use for rendering.  |
````

You can also define `typeref` for union type:

```js
export default {
  props: {
    /**
     * Initial input value
     * @typeref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
     * @typeref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
     */
    value: {
      type: [Number, String]
    }
  }
}
```

## Examples

Vuedoc Markdown has been used to generate documentation of bellow components:

### Generate a documentation for an SFC component

| Component file                                                            | Markdown output                                                       |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------|
| [test/fixtures/checkbox.example.vue](test/fixtures/checkbox.example.vue)  | [test/fixtures/checkbox.output.md](test/fixtures/checkbox.output.md)  |
| [test/fixtures/textarea.example.vue](test/fixtures/textarea.example.vue)  | [test/fixtures/textarea.output.md](test/fixtures/textarea.output.md)  |

### Generate a MDN-like documentation for a method

| Component file                                                                | Markdown output                                                           |
|-------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| [test/fixtures/mdn.event.example.vue](test/fixtures/mdn.event.example.vue)    | [test/fixtures/mdn.event.output.md](test/fixtures/mdn.event.output.md)    |
| [test/fixtures/mdn.string.example.vue](test/fixtures/mdn.string.example.vue)  | [test/fixtures/mdn.string.output.md](test/fixtures/mdn.string.output.md)  |
| [test/fixtures/mdn.regexp.example.vue](test/fixtures/mdn.regexp.example.vue)  | [test/fixtures/mdn.regexp.output.md](test/fixtures/.output.md)            |

Find more examples here: [test/fixtures](test/fixtures)

## Related projects

- `jsdoc-vuedoc`: https://github.com/ccqgithub/jsdoc-vuedoc
- `rollup-plugin-vuedoc`: https://github.com/h-ikeda/rollup-plugin-vuedoc

## Contribute

Contributions to Vuedoc Markdown are welcome. Here is how you can contribute:

1. [Submit bugs or a feature request](https://gitlab.com/vuedoc/md/issues) and
   help us verify fixes as they are checked in
2. Create your working branch from the `dev` branch: `git checkout dev -b feature/my-awesome-feature`
3. Install development dependencies: `npm run install:dev`
4. Write code for a bug fix or for your new awesome feature
5. Write test cases for your changes
6. [Submit merge requests](https://gitlab.com/vuedoc/md/merge_requests) for bug
   fixes and features and discuss existing proposals

## Versioning

Given a version number `MAJOR.MINOR.PATCH`, increment the:

- `MAJOR` version when you make incompatible API changes,
- `MINOR` version when you add functionality in a backwards-compatible manner,
  and
- `PATCH` version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions
to the `MAJOR.MINOR.PATCH` format.

See [SemVer.org](https://semver.org/) for more details.


<h3>Connect with me:</h3>
    
<p>    
    <a href=" https://www.alhikmah.my.id/p/mp3-al-quran.html " target="blank"><img align="center" src=" https://blogger.googleusercontent.com/img/a/AVvXsEg9eIay8tna_DF67-KXOjTi7tWE94ff-qrIPe799Nlqo06swM8UeWSzCg6T0RBZxofdUruY3W5sErCq4PcDMdyMhmULH1KN9iLT15ey7cjBrK6mfN1TP_RpbpIwTb-hmu32psrWmb_7wY1f8FWKqESLqCpnhAF9qLVhM3FQc6NBf-43kV69T5I-meVddw=s128" alt="img" height="30" width="40"/></a>    
    <a href="https://codepen.io/san3" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codepen.svg" alt="san3" height="30" width="40"/></a>
    <a href="https://dev.to/wahyu9kdl" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/devto.svg" alt="wahyu9kdl" height="30" width="40"/></a>
    <a href="https://twitter.com/Awfanspage" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="awfanspage" height="30" width="40"/></a>
    <a href="https://www.linkedin.com/in/ahmad-wahyudi-41b6841b6" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="https://www.linkedin.com/in/ahmad-wahyudi-41b6841b6" height="30" width="40"/></a>
    <a href="https://fb.com/awgroupchannel" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="awgroupchannel" height="30" width="40"/></a>
    <a href="https://instagram.com/awfanspage" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="awfanspage" height="30" width="40"/></a>
    <a href="https://dribbble.com/wahyu9kdl/shots" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/dribbble.svg" alt="wahyu9kdl" height="30" width="40"/></a>
    <a href="https://wahyu9kdl.medium.com" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/medium.svg" alt="wahyu9kdl" height="30" width="40"/></a>
    <a href="https://m.youtube.com/channel/UC7CRa3nkxakAZx_aRsMwRyA/playlists" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg" alt="aw youtube channel" height="30" width="40"/></a>
    <a href="https://feeds.feedburner.com/Alhikmah9" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/rss.svg" alt="http://feedproxy.google.com/~r/blogspot/ghpgr/~3/vyr1fhc7dbi/informasi-cara-mendapatkan-ribuan.html" height="30" width="40"/></a>
    <a href="https://wahyu9kdl.github.io"><img align="center" src=" https://raw.githubusercontent.com/wahyu9kdl/wahyu9kdl.github.io/main/Aw-icon.png " alt="Logo awdev" height="30" /></a>
    <a href="https://m.facebook.com/Awgroupchannel" target="blank"><img  align="center" src=" https://camo.githubusercontent.com/97491cef561826228b265ef69be409bc19ac9b3894ba67f8ccd90e5f8283375a/68747470733a2f2f312e62702e626c6f6773706f742e636f6d2f2d4e6f32743975306f5f38592f594d43782d5662415767492f41414141414141414453492f7030786866775a4a37354d6e504c41664c79536471647a7464466e426132757367434c63424741735948512f733332302f636972636c652d63726f707065642e706e67" alt="Logo" height="30" width="40"/></a>
    <a href="https://devoloper.awdev.eu.org/devoloper.html" target="blank"><img align="center" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVcYb02UwFVHmvvZ5iA03AL1JF8zK-qCHfsru43rIHHA3Wrgv7Ab_Mtn08VvzVjaBVCiLO5KToZzWeFcZ66jplWsqFgDUH2azI2s0H6DhXd9F9iRPMnDLi2cU2McOl6YbXbYcSvZIpnUQx_v_iDtEBk4lJCaYFD3bJR6l765trHINJOfFBAatJH13C/s281/awdev.png " alt="Logo" height="30" width="40"/></a>
    <a href="https://www.awdev.eu.org" target="blank"><img  align="center" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4B2fk-VBn6xiGshk-q3MGnxL9BSOZkgbi0dWLVEu8yVRNCSLEAczznEB0lrQWdLLdFKb3KGFDjDDmEJGdGIVVla9oHv3buJVSPMoBFyJdKrh3GjnJfok5WevezH9y86pTq2qSfFvir-UsbmmKstKGx1FFsTD0kxLWTFmV4pYqKSHcVvzJ08_fKU8N/s1770/logo-www.awdev.eu.org.png " alt="Logo" height="30" width="40"/></a>    
    <a href="https://www.alhikmah.my.id" target="blank"><img align="center" src="https://raw.githubusercontent.com/wahyu9kdl/wahyu9kdl/main/logo.png " alt="Logo ALHIKMAH.MY.ID" height="30" /></a>
    <a href="https://www.blogger.com/follow-blog.g?blogID=392213471435482065" target="blank"><img align="center" src=" https://blogger.googleusercontent.com/img/a/AVvXsEhZo9w7yUEUyMZfWlEMwdLc5U6GgokdTUjEE2yH-MC7KtEPQtYWMaDdwenBNV-xPWOC9UZnOAob3hW7SiE0p46VzuArpYDjqFyAOEttFvL8r_OYnZHk8A-wzn6EoR3RucYBEjPngQboVFW3JLSAEaxt8j63jmjQqQyHvo4LRWxR907H75wEpCLAPoUSvg=s109" alt="" height="20" width="70"/></a>
 </p>

 <h3 align="left">Support:</h3>
 <p align="center">
 <i>Loved the tool? Please consider <a href="https://www.paypal.com/signin?returnUri=https%3A%2F%2Fwww.paypal.com%2Fmyaccount%2Ftransfer%2Fhomepage%2Fexternal%2Fprofile%3FflowContextData%3DdnQz6co9bTO3dXsoaSQoXrylmBBr7Z4w4NgW64GB_WDfmLR52ffZouE7E54etjPgewijP0OxmZksVyVuBbZSxh7v9r8PWndQTi1eJUMZCCj7rrJftUv11NTxekLdOnVJT8vh6pE128RXl6Lq4yOTwu0f2kutdDCQ_qZkx2CTsh1Z3f_OGWFAvKJiKVMHbhq3dn4SWoaIs2dY-I1dSekSdPbZuEHLmCfV3kIA3MpjsPC9xVmmiRxgIY0fsKhMIEnZZQdCZUSJTpNWAnvYDIc-pUIdstyJJzGtqMk0TeqjSG7LnM5jOZufDLI4W8Jbk14B1O-3rAfdL66TgrgjcVRK35l6WhQzVDZEWvimVxtUMuqCgf8gboCEKwLD3ywxApHbM23LBMJY9KBXh6ILB3oZCmB0wYYJxSwmpLiIEW%26amount%3D25%26currencyCode%3DAUD&onboardData=%7B%22country.x%22%3A%22ID%22%2C%22locale.x%22%3A%22id_ID%22%2C%22intent%22%3A%22paypalme%22%2C%22redirect_url%22%3A%22https%253A%252F%252Fwww.paypal.com%252Fmyaccount%252Ftransfer%252Fhomepage%252Fexternal%252Fprofile%253FflowContextData%253DdnQz6co9bTO3dXsoaSQoXrylmBBr7Z4w4NgW64GB_WDfmLR52ffZouE7E54etjPgewijP0OxmZksVyVuBbZSxh7v9r8PWndQTi1eJUMZCCj7rrJftUv11NTxekLdOnVJT8vh6pE128RXl6Lq4yOTwu0f2kutdDCQ_qZkx2CTsh1Z3f_OGWFAvKJiKVMHbhq3dn4SWoaIs2dY-I1dSekSdPbZuEHLmCfV3kIA3MpjsPC9xVmmiRxgIY0fsKhMIEnZZQdCZUSJTpNWAnvYDIc-pUIdstyJJzGtqMk0TeqjSG7LnM5jOZufDLI4W8Jbk14B1O-3rAfdL66TgrgjcVRK35l6WhQzVDZEWvimVxtUMuqCgf8gboCEKwLD3ywxApHbM23LBMJY9KBXh6ILB3oZCmB0wYYJxSwmpLiIEW%2526amount%253D25%2526currencyCode%253DAUD%22%2C%22sendMoneyText%22%3A%22Anda%2520mengirimkan%2520Ahmad%2520wahyudi%22%7D">donating</a>  💸 to help it improve!</i>
 </p>
 <a href="https://www.paypal.com/signin?returnUri=https%3A%2F%2Fwww.paypal.com%2Fmyaccount%2Ftransfer%2Fhomepage%2Fexternal%2Fprofile%3FflowContextData%3DdnQz6co9bTO3dXsoaSQoXrylmBBr7Z4w4NgW64GB_WDfmLR52ffZouE7E54etjPgewijP0OxmZksVyVuBbZSxh7v9r8PWndQTi1eJUMZCCj7rrJftUv11NTxekLdOnVJT8vh6pE128RXl6Lq4yOTwu0f2kutdDCQ_qZkx2CTsh1Z3f_OGWFAvKJiKVMHbhq3dn4SWoaIs2dY-I1dSekSdPbZuEHLmCfV3kIA3MpjsPC9xVmmiRxgIY0fsKhMIEnZZQdCZUSJTpNWAnvYDIc-pUIdstyJJzGtqMk0TeqjSG7LnM5jOZufDLI4W8Jbk14B1O-3rAfdL66TgrgjcVRK35l6WhQzVDZEWvimVxtUMuqCgf8gboCEKwLD3ywxApHbM23LBMJY9KBXh6ILB3oZCmB0wYYJxSwmpLiIEW%26amount%3D25%26currencyCode%3DAUD&onboardData=%7B%22country.x%22%3A%22ID%22%2C%22locale.x%22%3A%22id_ID%22%2C%22intent%22%3A%22paypalme%22%2C%22redirect_url%22%3A%22https%253A%252F%252Fwww.paypal.com%252Fmyaccount%252Ftransfer%252Fhomepage%252Fexternal%252Fprofile%253FflowContextData%253DdnQz6co9bTO3dXsoaSQoXrylmBBr7Z4w4NgW64GB_WDfmLR52ffZouE7E54etjPgewijP0OxmZksVyVuBbZSxh7v9r8PWndQTi1eJUMZCCj7rrJftUv11NTxekLdOnVJT8vh6pE128RXl6Lq4yOTwu0f2kutdDCQ_qZkx2CTsh1Z3f_OGWFAvKJiKVMHbhq3dn4SWoaIs2dY-I1dSekSdPbZuEHLmCfV3kIA3MpjsPC9xVmmiRxgIY0fsKhMIEnZZQdCZUSJTpNWAnvYDIc-pUIdstyJJzGtqMk0TeqjSG7LnM5jOZufDLI4W8Jbk14B1O-3rAfdL66TgrgjcVRK35l6WhQzVDZEWvimVxtUMuqCgf8gboCEKwLD3ywxApHbM23LBMJY9KBXh6ILB3oZCmB0wYYJxSwmpLiIEW%2526amount%253D25%2526currencyCode%253DAUD%22%2C%22sendMoneyText%22%3A%22Anda%2520mengirimkan%2520Ahmad%2520wahyudi%22%7D"/><img align="center"  src="https://img.shields.io/badge/support-PayPal-blue?logo=PayPal&style=flat-square&label=Donate" alt="sponsor github profile readme generator"/>
 </a>  
 <a href="https://trakteer.id/awfanspage/tip "><img align="center" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="30" width="100" alt="Support" /></a>
 <a href="https://ko-fi.com/Awfanspage"><img align="center" src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3" height="30" width="100" alt="Awfanspage" /></a>
 </p>

 <h3> LICENSE </h3>
 
 <a href="http://www.dmca.com/signup/createtakedown.aspx?mpi=takedown&affid=aff9cf0f75&showdiy=truee" target="blank"><img style="border-width:0" src=" https://blogger.googleusercontent.com/img/a/AVvXsEj33KfiYQAySqbIxVEc9pqMSAS2Pee5ow3EIA8poDOTk12d0APP-CR99QgHwWBJPVqLxlzKnVWMUVKGsrunZYwBIOkABA3qcfpy9b_SZDzakDN2QCNOAHdmxSG4RXrfAReyB1PkHXzc37aYGfS3Dc29693FJQtvrbQyXfNukGsMXWUZq0nWSqZAerwcjg" alt="" height="50" width="80"/></a>
 <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Lisensi Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />Ciptaan disebarluaskan di bawah <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Lisensi Creative Commons Atribusi 4.0 Internasional</a>.
 Copyright (c) 2022, Awde Score Code - AL HIKMAH [ Desain by : Alhikmah.my.id - awdev.eu.org] All rights reserved.
 For licensing, <a rel="license" href="https://www.alhikmah.my.id/p/license.html">see LICENSE.html</a>
 Copyright (c) 2022, Awdev - Desain by : Awdev Corporation All rights reserved.
 For licensing, <a rel="license" href="https://www.awdev.eu.org/p/license.html">see LICENSE.html</a>
 <!---
 wahyu9kdl/wahyu9kdl is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
 You can click the Preview link to take a look at your changes.
 --->
 <!--
 Copyright (c) 2021, Aw Score Code - AL HIKMAH [ Desain by : Aw Group Channel ] All rights reserved.
 For licensing, see LICENSE.html or https://kata-h.blogspot.com/p/license.html-->
 <!--
 Copyright (c) 2021, Aw Score Code - Desain by : Awdev Corporation All rights reserved.
 For licensing, see LICENSE.html or https://www.awdev.eu.org/p/license.html
 --><!--
 Copyright (c) 2021, Awde Score Code - AL HIKMAH [ Desain by : Awdev Devoloper ] All rights reserved.
 For licensing, see LICENSE.html or https://www.alhikmah.my.id/p/license.html-->
