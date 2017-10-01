import { Component } from 'react'
import * as Dropzone from 'react-dropzone'

class FontDropzone extends Component<undefined, undefined> {
  onDrop(acceptedFiles, rejectedFiles) {
    // do stuff with files...
  }
  render() {
    return (
        <div>test</div>
    )
  }
}

export default FontDropzone