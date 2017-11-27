import { FontCollection } from '../font-collection'
import { WOFF2 } from '../woff2'
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
  const svg = new WOFF2(fontPath)
  expect(svg.ext).toBe('woff2')
})

it('should have a human font name', () => {
  expect(fc.fontNameHuman).not.toBeUndefined()
  expect(fc.fontNameHuman).not.toEqual(null)
  fc.cleanup()
})
