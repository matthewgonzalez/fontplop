# <a href='http://www.fontplop.com'><img src='https://user-images.githubusercontent.com/659829/31313351-ab630a58-ab95-11e7-94d7-87347ee3bdb1.jpg' height='100'></a>

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

[![Flattr this git repo](http://api.flattr.com/button/flattr-badge-large.png)](https://flattr.com/submit/auto?user_id=YOUR_FLATTR_USERNAME&url=YOUR_HTTP_GITHUB_REPO_URL&title=YOUR_GH_PROJECT_TITLE&language=GH_PROJECT_PROG_LANGUAGE&tags=github&category=software)


### Building fontplop.com

fontplop.com is hosted on Github pages. Publish changes like so:

1. Checkout `site` branch, which is a simple `create-react-app` app
2. Make changes
3. `npm run deploy` to publish to github

### License

MIT
