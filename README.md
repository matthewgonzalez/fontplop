
<p align="center">
  <img alt="fontplop logo" src="https://user-images.githubusercontent.com/659829/31784135-7f48b70a-b4b5-11e7-9849-7626098460d0.png" width=200>
</p>

---

[![Backers on Open Collective](https://opencollective.com/fontplop/backers/badge.svg)](#backers) [![Sponsors on Open Collective](https://opencollective.com/fontplop/sponsors/badge.svg)](#sponsors) [![build status](https://img.shields.io/travis/reactjs/redux/master.svg?style=flat-square)](https://travis-ci.org/matthewgonzalez/fontplop)

FontPlop is an OSX/macOS application which takes `ttf` and `otf` files and outputs a webfont bundle: `woff2`, `woff`, `ttf`/`otf`. It is the simpler, faster, free successor to [FontPrep](http://www.fontprep.com), which is no longer maintained.

### Demo

<img src="https://user-images.githubusercontent.com/659829/31313375-6a23f4f2-ab96-11e7-9dfb-3643df84e824.gif" alt="fontplop demo" height=300>


### Installation

`brew cask install fontplop`


### Testing

Run lint (tslint) and tests (Jest) like so:

```sh
npm run lint
npm run test
```

### Generated CSS (recommended)

_Stolen directly from the Typekit site 💂💰_

```css

@font-face {
    font-family:"My Font";
    src:url("my-font.woff2") format("woff2"),url("my-font.woff") format("woff"),url("my-font.otf") format("opentype");
    font-style:normal;font-weight:400;
}
```

**Why not EOT or SVG?** Well, they're essentially no longer needed and/or dying off. See
[this issue](https://github.com/matthewgonzalez/fontplop/issues/17). If you _really_ need EOT/SVG
fonts, you can download version [1.1.0](https://github.com/matthewgonzalez/fontplop/releases/tag/v1.1.0)
where those formats were last supported.

### Donations

Help us keep FontPlop free and open source by making a donation. Thanks – it helps us continue
to build awesome stuff.

Via OpenCollective: https://opencollective.com/fontplop

Via Bitcoin: `182JQcPACPh3bf6iQE73KB4Dvv5na6zep4`


### Building fontplop.com

fontplop.com is hosted on Github pages. Publish changes like so:

1. Checkout `site` branch, which is a simple `create-react-app` app
2. Make changes
3. `npm run deploy` to publish to github


### Generating Installation Background

To accomodate for retina/non-retina screens, a multipage `TIFF` should be generated from two files.

```$ cd src/assets/build```

```$ tiffutil -catnosizecheck dmg-background.tiff dmg-background@2x.tiff -out dmg-background-combined.tiff```

### Credits

#### Contributors

This project exists thanks to all the people who contribute. 
<a href="graphs/contributors"><img src="https://opencollective.com/fontplop/contributors.svg?width=890&button=false" /></a>


#### Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/fontplop#backer)]

<a href="https://opencollective.com/fontplop#backers" target="_blank"><img src="https://opencollective.com/fontplop/backers.svg?width=890"></a>


#### Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/fontplop#sponsor)]

<a href="https://opencollective.com/fontplop/sponsor/0/website" target="_blank"><img src="https://opencollective.com/fontplop/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/fontplop/sponsor/1/website" target="_blank"><img src="https://opencollective.com/fontplop/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/fontplop/sponsor/2/website" target="_blank"><img src="https://opencollective.com/fontplop/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/fontplop/sponsor/3/website" target="_blank"><img src="https://opencollective.com/fontplop/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/fontplop/sponsor/4/website" target="_blank"><img src="https://opencollective.com/fontplop/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/fontplop/sponsor/5/website" target="_blank"><img src="https://opencollective.com/fontplop/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/fontplop/sponsor/6/website" target="_blank"><img src="https://opencollective.com/fontplop/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/fontplop/sponsor/7/website" target="_blank"><img src="https://opencollective.com/fontplop/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/fontplop/sponsor/8/website" target="_blank"><img src="https://opencollective.com/fontplop/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/fontplop/sponsor/9/website" target="_blank"><img src="https://opencollective.com/fontplop/sponsor/9/avatar.svg"></a>



### License

MIT
