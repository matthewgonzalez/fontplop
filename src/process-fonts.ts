import { dialog } from 'electron'

function processFonts (filePath) {
  console.log('processFonts function')
  dialog.showMessageBox({ 
    message: "You dragged a file over the icon! :-) \n" + filePath,
    buttons: ["OK"] 
  })
}

export default processFonts