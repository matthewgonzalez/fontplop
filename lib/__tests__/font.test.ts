import { Font } from '../font'
import * as path from 'path'
import * as fs from 'fs'
import * as rimraf from 'rimraf'

it('should create an output path', () => {
  const fontPath = path.resolve(__dirname, '../../fixtures/foo.ttf')
  const font = new Font(fontPath)
  expect(fs.existsSync(font.outputPath))
  rimraf.sync(font.outputPath)
})
