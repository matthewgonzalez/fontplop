import { Font } from './font'
import * as childProcess from 'child_process'

export class WOFF extends Font {

  get ext() {
    return '.woff'
  }


  export() {
    childProcess.execSync(`./node_modules/.bin/ttf2woff ${this.ttfPath} ${this.outFile}`)
    return this.outFile
  }

}
