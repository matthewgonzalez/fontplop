import * as path from 'path'
import * as childProcess from 'child_process'
import * as replaceExt from 'replace-ext'

import * as fs from 'fs'
import * as rimraf from 'rimraf'

export class Font {

  private pathToTTF: string
  filePath: string
  ext: string

  constructor(filePath: string) {
    this.filePath = filePath
    this.createOutputPath()
  }

  createOutputPath() {
    if (!fs.existsSync(this.outputPath)) {
      fs.mkdirSync(this.outputPath)
    }
  }

  get outFile() {
    return `${this.outputPath}/${this.nameWithoutExt}${this.ext}`
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

    // childProcess.execSync(`./node_modules/.bin/otf2ttf ${this.filePath} ${this.outputPath}/${this.nameWithoutExt}.ttf`)
    this.pathToTTF = replaceExt(this.filePath, '.ttf')
    return this.pathToTTF
  }

  delete() {
    rimraf.sync(this.outputPath)
  }

}
