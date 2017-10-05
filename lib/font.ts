import * as path from 'path'
import * as childProcess from 'child_process'
import * as replaceExt from 'replace-ext'
import * as fs from 'fs'

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

  get outputPath() {
    const dir = path.dirname(this.filePath)
    const basename = path.basename(this.filePath)
    const nameWithoutExt = path.parse(basename).name

    return path.resolve(dir, `${nameWithoutExt}-export`)
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

    childProcess.execSync(`./node_modules/.bin/otf2ttf ${this.filePath} ${this.outputPath}`)
    this.pathToTTF = replaceExt(this.filePath, '.ttf')
    return this.pathToTTF
  }

}
