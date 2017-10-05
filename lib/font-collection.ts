import { Font } from './font'
import { TTF } from './ttf'
import { WOFF } from './woff'
import { WOFF2 } from './woff2'
import { EOT } from './eot'
import { SVG } from './svg'

import * as rimraf from 'rimraf'

export class FontCollection extends Font {

  paths: Array<string>

  export() {
    const path = this.ttfPath

    this.paths = [
      new TTF(path).export(),
      new WOFF(path).export(),
      new WOFF2(path).export(),
      new SVG(path).export(),
      new EOT(path).export(),
    ]

    this.cleanupOrphans()
    return this.paths
  },

  cleanup() {
    rimraf.sync(this.outputPath)
  }

}
