import {
  Font
} from './font'
import * as fs from 'fs'

export class CSS extends Font {

  export () {
    const nameWithoutExt = this.nameWithoutExt
    const fontNameHuman = this.fontNameHuman

    const cssOutput = `
@font-face {
  font-family:"${fontNameHuman}";
  src:url("${nameWithoutExt}.woff2") format("woff2"),url("${nameWithoutExt}.woff") format("woff"),url("${nameWithoutExt}.ttf") format("truetype");
  font-style:normal;font-weight:400;
}
        `
    fs.writeFileSync(this.outFile, cssOutput)
  }

  get ext () {
    return 'css'
  }

}
