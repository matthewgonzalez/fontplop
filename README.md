
<p align="center">
  <img alt="fontplop logo" src="https://user-images.githubusercontent.com/659829/31784135-7f48b70a-b4b5-11e7-9849-7626098460d0.png" width=200>
</p>

FontPlop is an OSX/macOS application which takes `ttf` and `otf` files and outputs a webfont bundle: `woff2`, `woff`, `tff`, `svg`, and `eot`. It is the simpler, faster, free successor to [FontPrep](http://www.fontprep.com), which is no longer maintained.

[![build status](https://img.shields.io/travis/reactjs/redux/master.svg?style=flat-square)](https://travis-ci.org/matthewgonzalez/fontplop)

### Demo

<img src="https://user-images.githubusercontent.com/659829/31313375-6a23f4f2-ab96-11e7-9dfb-3643df84e824.gif" alt="fontplop demo" height=300>

## Testing

Run lint (tslint) and tests (Jest) like so:

```sh
npm run lint
npm run test
```

### Donations

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

### License

MIT
