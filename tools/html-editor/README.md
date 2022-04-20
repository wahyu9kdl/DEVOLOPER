## About

A small and lighting fast in-browser HTML editor with syntax highlighting and instant preview for code you type. It is a great tool for HTML prototyping since you do not have to save the file everytime you want to make the changes. On top of that it's only single HTML file and works offline too.

You can think this app as a diet version of CodePen.io or JsFiddle but you can run it locally. It has two main windows -- left is used for code editor and the right one is used for HTML preview. For syntax highlighting it uses an awesome CodeMirror library.

HTML Editor support following features.

- Open file from local disk
- Save file to local disk
- Syntax highlighting
- Word Wrap
- Instant preview window
- Keyboard shortcuts
- Responsive design for mobile
- Works offline

Demo are available at [https://devoloper.awdev.eu.org/html-editor/](https://devoloper.awdev.eu.org/html-editor/)

![Demo HTML Editor](https://s3.amazonaws.com/rioastamal-assets/html-editor/html-editor-demo.gif)

## Run

To run the HTML editor just open file `src/index.html` using your favorite web browser and you're ready to go.

## Build

The build process will generate single HTML file of the editor. It may useful if you want to host or upload the editor to your own server. The build script only uses Bash so it should be easy to run.

```
$ bash build.sh
Build file build/index.html complete.
```

You can try to open file `build/index.html` using web browser.

## Changelog

### v1.3

* Add option to manually trigger preview

### v1.2

* Hide or show for code editor window
* Prompt a file name on SaveAs feature
* Confirm to user before closing or reloading the page
* Add meta tags to the page
* Add keyboard shortcuts

### v1.1

* Bug fixes: Undefined function name removeObjectURL() on saveAsFile() function.

### v1.0

* Initial release of HTML Editor

## Author

This application is written by Awdev Devoloper \<cs@awdev.eu.org>

<span>HTML Editor v{{APP_VERSION}}</span>
        <span>Made with &#x2665; by <a href="https://devoloper.awdev.eu.org/">Awdev Devoloper</a></span>
    <h3 align="left">Connect with me:</h3>
    <p align="left">
    <a href="https://codepen.io/san3" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codepen.svg" alt="san3" height="30" width="40" /></a>
    <a href="https://dev.to/wahyu9kdl" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/devto.svg" alt="wahyu9kdl" height="30" width="40" /></a>
    <a href="https://twitter.com/Awfanspage" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="awfanspage" height="30" width="40" /></a>
    <a href="https://www.linkedin.com/in/ahmad-wahyudi-41b6841b6" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="https://www.linkedin.com/in/ahmad-wahyudi-41b6841b6" height="30" width="40" /></a>
    <a href="https://fb.com/awgroupchannel" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="awgroupchannel" height="30" width="40" /></a>
    <a href="https://instagram.com/awfanspage" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="awfanspage" height="30" width="40" /></a>
    <a href="https://dribbble.com/wahyu9kdl/shots" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/dribbble.svg" alt="wahyu9kdl" height="30" width="40" /></a>
    <a href="https://wahyu9kdl.medium.com" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/medium.svg" alt="wahyu9kdl" height="30" width="40" /></a>
    <a href="https://m.youtube.com/channel/UC7CRa3nkxakAZx_aRsMwRyA/playlists" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg" alt="aw youtube channel" height="30" width="40" /></a>
    <a href="http://feeds.feedburner.com/Alhikmah9" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/rss.svg" alt="http://feedproxy.google.com/~r/blogspot/ghpgr/~3/vyr1fhc7dbi/informasi-cara-mendapatkan-ribuan.html" height="30" width="40" /></a>
    <a href="https://m.facebook.com/Awgroupchannel "><img  align="center" src=" https://camo.githubusercontent.com/97491cef561826228b265ef69be409bc19ac9b3894ba67f8ccd90e5f8283375a/68747470733a2f2f312e62702e626c6f6773706f742e636f6d2f2d4e6f32743975306f5f38592f594d43782d5662415767492f41414141414141414453492f7030786866775a4a37354d6e504c41664c79536471647a7464466e426132757367434c63424741735948512f733332302f636972636c652d63726f707065642e706e67 " alt="Logo" height="30" width="40"  /></a>
    <a href="https://devoloper.awdev.eu.org/devoloper.html "><img  align="center" src=" https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVcYb02UwFVHmvvZ5iA03AL1JF8zK-qCHfsru43rIHHA3Wrgv7Ab_Mtn08VvzVjaBVCiLO5KToZzWeFcZ66jplWsqFgDUH2azI2s0H6DhXd9F9iRPMnDLi2cU2McOl6YbXbYcSvZIpnUQx_v_iDtEBk4lJCaYFD3bJR6l765trHINJOfFBAatJH13C/s281/awdev.png " alt="Logo" height="30" width="40"  /></a>
    <a href="https://www.awdev.eu.org"><img  align="center" src=" https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4B2fk-VBn6xiGshk-q3MGnxL9BSOZkgbi0dWLVEu8yVRNCSLEAczznEB0lrQWdLLdFKb3KGFDjDDmEJGdGIVVla9oHv3buJVSPMoBFyJdKrh3GjnJfok5WevezH9y86pTq2qSfFvir-UsbmmKstKGx1FFsTD0kxLWTFmV4pYqKSHcVvzJ08_fKU8N/s1770/logo-www.awdev.eu.org.png " alt="Logo" height="30" width="40"  /></a>    
    <a href="https://www.alhikmah.my.id"><img align="center" src="https://raw.githubusercontent.com/wahyu9kdl/wahyu9kdl/main/logo.png " alt="Logo ALHIKMAH.MY.ID" height="30" /></a>
    
    
    </div>
    
## License

This application is open source licensed under [MIT license](http://opensource.org/licenses/MIT).