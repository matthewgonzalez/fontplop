import { Font } from './font'
import { TTF } from './ttf'
import { WOFF } from './woff'
import { WOFF2 } from './woff2'

import * as rimraf from 'rimraf'

export class FontCollection extends Font {

  paths: Array<string>

  export () {
    const path = this.ttfPath

    if (this.isOTF) {
      this.createOrphanTTF()
      this.copySelf()
    }

    new TTF(path).export()
    new WOFF(path).export()
    new WOFF2(path).export()

    this.cleanupOrphansIfNecessary()
  }

  cleanup () {
    rimraf.sync(this.outputPath)
  }

}
