import { dialog } from 'electron'

function processFonts(files: Array<any>) {
  dialog.showMessageBox({
    message: "You dragged a file over the icon! :-) \n" + files.join("\n"),
    buttons: ["OK"]
  })
}

export default processFonts
