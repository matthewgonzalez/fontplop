import { FontCollection } from '../lib/font-collection'

function processFonts (files: Array<any>) {
  files.forEach(file => {
    new FontCollection(file).export()
  })
}

export default processFonts
