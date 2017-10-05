import { Font } from '../font'
import { SVG } from '../svg'
import * as path from 'path'
import * as fs from 'fs'

const fontPath = path.resolve(__dirname, '../../fixtures/foo.ttf')
const font = new Font(fontPath)

it('should create an output path', () => {
  expect(fs.existsSync(font.outputPath)).toBeTruthy()
  font.delete()
})

it('should create an output path', () => {
  expect(font.isTTF).toBeTruthy()
  expect(font.isOTF).not.toBeTruthy()
})

it('should have an extension', () => {
  const svg = new SVG(fontPath)
  expect(svg.ext).toBe('.svg')
})
