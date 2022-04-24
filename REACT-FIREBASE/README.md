# Create React App [![Build Status](https://dev.azure.com/facebook/create-react-app/_apis/build/status/facebook.create-react-app?branchName=main)](https://dev.azure.com/facebook/create-react-app/_build/latest?definitionId=1&branchName=main) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/facebook/create-react-app/blob/main/CONTRIBUTING.md)

<img alt="Logo" align="right" src="https://create-react-app.dev/img/logo.svg" width="20%" />

Create React apps with no build configuration.

- [Creating an App](#creating-an-app) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.

Create React App works on macOS, Windows, and Linux.<br>
If something doesn’t work, please [file an issue](https://github.com/facebook/create-react-app/issues/new).<br>
If you have questions or need help, please ask in [GitHub Discussions](https://github.com/facebook/create-react-app/discussions).

## Quick Overview

```sh
npx create-react-app my-app
cd my-app
npm start
```

If you've previously installed `create-react-app` globally via `npm install -g create-react-app`, we recommend you uninstall the package using `npm uninstall -g create-react-app` or `yarn global remove create-react-app` to ensure that npx always uses the latest version.

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>
When you’re ready to deploy to production, create a minified bundle with `npm run build`.

<p align='center'>
<img src='https://cdn.jsdelivr.net/gh/facebook/create-react-app@27b42ac7efa018f2541153ab30d63180f5fa39e0/screencast.svg' width='600' alt='npm start'>
</p>

### Get Started Immediately

You **don’t** need to install or configure tools like webpack or Babel.<br>
They are preconfigured and hidden so that you can focus on the code.

Create a project, and you’re good to go.

## Creating an App

**You’ll need to have Node 14.0.0 or later version on your local development machine** (but it’s not required on the server). We recommend using the latest LTS version. You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

To create a new app, you may choose one of the following methods:

### npx

```sh
npx create-react-app my-app
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) is a package runner tool that comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

### npm

```sh
npm init react-app my-app
```

_`npm init <initializer>` is available in npm 6+_

### Yarn

```sh
yarn create react-app my-app
```

_[`yarn create <starter-kit-package>`](https://yarnpkg.com/lang/en/docs/cli/create/) is available in Yarn 0.25+_

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
    └── setupTests.js
```

No configuration or complicated folder structures, only the files you need to build your app.<br>
Once the installation is done, you can open your project folder:

```sh
cd my-app
```

Inside the newly created project, you can run some built-in commands:

### `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

<p align='center'>
<img src='https://cdn.jsdelivr.net/gh/marionebl/create-react-app@9f6282671c54f0874afd37a72f6689727b562498/screencast-error.svg' width='600' alt='Build errors'>
</p>

### `npm test` or `yarn test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

[Read more about testing.](https://facebook.github.io/create-react-app/docs/running-tests)

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed.

## User Guide

You can find detailed instructions on using Create React App and many tips in [its documentation](https://facebook.github.io/create-react-app/).

## How to Update to New Versions?

Please refer to the [User Guide](https://facebook.github.io/create-react-app/docs/updating-to-new-releases) for this and other information.

## Philosophy

- **One Dependency:** There is only one build dependency. It uses webpack, Babel, ESLint, and other amazing projects, but provides a cohesive curated experience on top of them.

- **No Configuration Required:** You don't need to configure anything. A reasonably good configuration of both development and production builds is handled for you so you can focus on writing code.

- **No Lock-In:** You can “eject” to a custom setup at any time. Run a single command, and all the configuration and build dependencies will be moved directly into your project, so you can pick up right where you left off.

## What’s Included?

Your environment will have everything you need to build a modern single-page React app:

- React, JSX, ES6, TypeScript and Flow syntax support.
- Language extras beyond ES6 like the object spread operator.
- Autoprefixed CSS, so you don’t need `-webkit-` or other prefixes.
- A fast interactive unit test runner with built-in support for coverage reporting.
- A live development server that warns about common mistakes.
- A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.
- An offline-first [service worker](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers) and a [web app manifest](https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/), meeting all the [Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app) criteria. (_Note: Using the service worker is opt-in as of `react-scripts@2.0.0` and higher_)
- Hassle-free updates for the above tools with a single dependency.

Check out [this guide](https://github.com/nitishdayal/cra_closer_look) for an overview of how these tools fit together.

The tradeoff is that **these tools are preconfigured to work in a specific way**. If your project needs more customization, you can ["eject"](https://facebook.github.io/create-react-app/docs/available-scripts#npm-run-eject) and customize it, but then you will need to maintain this configuration.

## Popular Alternatives

Create React App is a great fit for:

- **Learning React** in a comfortable and feature-rich development environment.
- **Starting new single-page React applications.**
- **Creating examples** with React for your libraries and components.

Here are a few common cases where you might want to try something else:

- If you want to **try React** without hundreds of transitive build tool dependencies, consider [using a single HTML file or an online sandbox instead](https://reactjs.org/docs/try-react.html).

- If you need to **integrate React code with a server-side template framework** like Rails, Django or Symfony, or if you’re **not building a single-page app**, consider using [nwb](https://github.com/insin/nwb), or [Neutrino](https://neutrino.js.org/) which are more flexible. For Rails specifically, you can use [Rails Webpacker](https://github.com/rails/webpacker). For Symfony, try [Symfony's webpack Encore](https://symfony.com/doc/current/frontend/encore/reactjs.html).

- If you need to **publish a React component**, [nwb](https://github.com/insin/nwb) can [also do this](https://github.com/insin/nwb#react-components-and-libraries), as well as [Neutrino's react-components preset](https://neutrino.js.org/packages/react-components/).

- If you want to do **server rendering** with React and Node.js, check out [Next.js](https://nextjs.org/) or [Razzle](https://github.com/jaredpalmer/razzle). Create React App is agnostic of the backend, and only produces static HTML/JS/CSS bundles.

- If your website is **mostly static** (for example, a portfolio or a blog), consider using [Gatsby](https://www.gatsbyjs.org/) or [Next.js](https://nextjs.org/). Unlike Create React App, Gatsby pre-renders the website into HTML at build time. Next.js supports both server rendering and pre-rendering.

- Finally, if you need **more customization**, check out [Neutrino](https://neutrino.js.org/) and its [React preset](https://neutrino.js.org/packages/react/).

All of the above tools can work with little to no configuration.

If you prefer configuring the build yourself, [follow this guide](https://reactjs.org/docs/add-react-to-an-existing-app.html).

## React Native

Looking for something similar, but for React Native?<br>
Check out [Expo CLI](https://github.com/expo/expo-cli).

## Contributing

We'd love to have your helping hand on `create-react-app`! See [CONTRIBUTING.md](CONTRIBUTING.md) for more information on what we're looking for and how to get started.

## Supporting Create React App

Create React App is a community maintained project and all contributors are volunteers. If you'd like to support the future development of Create React App then please consider donating to our [Open Collective](https://opencollective.com/create-react-app).

## Credits

This project exists thanks to all the people who [contribute](CONTRIBUTING.md).<br>
<a href="https://github.com/facebook/create-react-app/graphs/contributors"><img src="https://opencollective.com/create-react-app/contributors.svg?width=890&button=false" /></a>

Thanks to [Netlify](https://www.netlify.com/) for hosting our documentation.

## Acknowledgements

We are grateful to the authors of existing related projects for their ideas and collaboration:

- [@wahyu9kdl](https://github.com/wahyu9kdl)
- [@devoloper](https://github.com/wahyu9kdl)
- [@awdev](https://github.com/wahyu9kdl)



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
 
Create React App is open source software [licensed as MIT](https://github.com/facebook/create-react-app/blob/main/LICENSE). The Create React App logo is licensed under a [Creative Commons Attribution 4.0 International license](https://creativecommons.org/licenses/by/4.0/).

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


