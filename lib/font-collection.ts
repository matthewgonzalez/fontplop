import { Font } from './font'

import { WOFF } from './woff'
import { WOFF2 } from './woff2'
import { EOT } from './eot'
import { SVG } from './svg'

export class FontCollection extends Font {

  paths: Array<string>

  export() {
    const path = this.ttfPath

    this.paths = [
      new WOFF(path).export(),
      new WOFF2(path).export(),
      new SVG(path).export(),
      new EOT(path).export(),
    ]

    return this.paths
  }

}
