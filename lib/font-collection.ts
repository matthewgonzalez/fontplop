import { Font } from './font'

import OTF from './otf'
import WOFF from './woff'
import WOFF2 from './woff2'
import EOT from './eot'
import SVG from './svg'

import * as path from 'path'
import * as rimraf from 'rimraf'

export class FontCollection extends Font {

  paths: Array<string>

  delete() {
    rimraf.sync(this.outputPath)
  }

  export() {
    const path = this.ttfPath

    this.paths = [
      new WOFF(path).export(),
      // new WOFF2(path).export(output)
      // new OTF(path).export(output),
      // new SVG(path).export(output),
      // new EOT(path).export(output),
    ]

    return this.paths
  }

}
