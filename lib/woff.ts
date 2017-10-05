import { Font } from './font'
import * as childProcess from 'child_process'

export default class WOFF extends Font {

  export() {
    childProcess.execSync(`./node_modules/.bin/ttf2woff ${this.ttfPath} ${this.outputPath}`)
    return '';
  }

}
