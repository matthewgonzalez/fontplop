import { dialog } from 'electron'
import { FontCollection } from '../lib/font-collection'

function processFonts(files: Array<any>) {
  // dialog.showMessageBox({
  //   message: 'You dragged a file over the icon! :-) \n' + files.join('\n'),
  //   buttons: ['OK']
  // })

  files.forEach(file => {
    new FontCollection(file).export()
  })
}

export default processFonts
