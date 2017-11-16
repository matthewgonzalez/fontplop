import { Font } from './font'
import * as ttf2woff2 from 'ttf2woff2'
import * as fs from 'fs'

export class WOFF2 extends Font {

  get ext () {
    return 'woff2'
  }

  export () {
    const input = fs.readFileSync(this.ttfPath)
    fs.writeFileSync(this.outFile, ttf2woff2(input))
    return this.outFile
  }

}
