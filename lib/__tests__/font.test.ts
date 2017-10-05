import { FontCollection } from '../font-collection'
import { SVG } from '../svg'
import * as path from 'path'
import * as fs from 'fs'

const fontPath = path.resolve(__dirname, '../../fixtures/foo.ttf')
const fc = new FontCollection(fontPath)

it('should create an output path', () => {
  expect(fs.existsSync(fc.outputPath)).toBeTruthy()
  fc.cleanup()
})

it('should create an output path', () => {
  expect(fc.isTTF).toBeTruthy()
  expect(fc.isOTF).not.toBeTruthy()
})

it('should have an extension', () => {
  const svg = new SVG(fontPath)
  expect(svg.ext).toBe('svg')
})
