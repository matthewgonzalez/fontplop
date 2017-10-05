import * as path from 'path'
import * as childProcess from 'child_process'
import * as replaceExt from 'replace-ext'
import * as FontEditorCore from 'fonteditor-core'

import * as fs from 'fs'
import * as rimraf from 'rimraf'

export class Font {

  private pathToTTF: string
  filePath: string

  constructor(filePath: string) {
    this.filePath = filePath
    this.createOutputPath()
  }

  createOutputPath() {
    if (!fs.existsSync(this.outputPath)) {
      fs.mkdirSync(this.outputPath)
    }
  }

  export() {
    const inBuffer = fs.readFileSync(this.ttfPath)
    const font = FontEditorCore.Font.create(inBuffer, {
      type: 'ttf'
    })

    const outBuffer = font.write({
      type: this.ext,
      hinting: true
    })

    fs.writeFileSync(this.outFile, outBuffer)
  }

  get ext() {
    return 'ttf'
  }

  get outFile() {
    return `${this.outputPath}/${this.nameWithoutExt}.${this.ext}`
  }

  get outputPath() {
    const output = path.resolve(this.dir, `${this.nameWithoutExt}-export`)
    return output
  }

  get dir() {
    return path.dirname(this.filePath)
  }

  get basename() {
    return path.basename(this.filePath)
  }

  get nameWithoutExt() {
    return path.parse(this.basename).name
  }

  get isTTF() {
    return path.parse(this.filePath).ext === '.ttf'
  }

  get isOTF() {
    return path.parse(this.filePath).ext === '.otf'
  }

  get ttfPath() {
    if (this.isTTF) {
      return this.filePath
    }

    const inBuffer = fs.readFileSync(this.filePath)
    const font = FontEditorCore.Font.create(inBuffer, {
      type: 'otf'
    })

    const outBuffer = font.write({
      type: this.ext,
      hinting: true
    })

    this.pathToTTF = replaceExt(this.filePath, '.ttf')
    fs.writeFileSync(this.pathToTTF, outBuffer)
    return this.pathToTTF
  }

  cleanupOrphans() {
    rimraf.sync(this.pathToTTF)
  }

}
