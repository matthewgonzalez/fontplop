import * as React from 'react';
import * as Dropzone from 'react-dropzone'

export class App extends React.Component<undefined, undefined> {
  onDrop (accepted, rejected) {
    console.log('accepted: ', accepted)
    console.log('rejected: ', rejected)
  }
  render() {
    const dzStyle = {
      position: 'fixed',
      top: '40px',
      left: '10px',
      right: '10px',
      bottom: '10px',
      borderRadius: '5px',
      borderWidth: '2px',
      borderStyle: 'dashed',
      borderColor: '#444',
      justifyContent: 'center',
      display: 'flex',
      alignItems: 'center'
    }
    const dzActiveStyle = {
      backgroundColor: 'green',
      borderColor: 'white'
    }

    return (
      <Dropzone 
        disableClick
        style={dzStyle}
        activeStyle={dzActiveStyle}
        onDrop={this.onDrop.bind(this)} 
        accept=".ttf, .woff, .eot"
      >
        Drop some ish here
      </Dropzone>
    );
  }
}
