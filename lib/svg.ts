import { Font } from './font'
import * as ttf2svg from 'ttf2svg'
import * as fs from 'fs'

export class SVG extends Font {

  get ext() {
    return '.svg'
  }

  export() {
    const input = fs.readFileSync(this.ttfPath)
    fs.writeFileSync(this.outFile, ttf2svg(input))
    return this.outFile
  }

}
