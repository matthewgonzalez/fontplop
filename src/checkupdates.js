'use strict'
const {app, dialog, shell} = require('electron')
const path = require('path')
const version = app.getVersion()
const versionCheck = require('github-version-checker')
const storage = require('electron-json-storage')

const repo = 'matthewgonzalez/fontplop'
const iconPath = 'assets/system-icons/icon_64x64.png'
const updateURL = 'http://fontplop.com/'

function showUpdateMessageBox (update) {
  let message = 'Check it. ' + update.tag_name + ' is hot off the press. You are currently rocking v' + version + '. You might want to go an grab it.'

  // Ask user to update the app
  dialog.showMessageBox({
    type: 'question',
    icon: path.join(__dirname, iconPath),
    buttons: [
      'Take me there. Right now.', 'Remind me.', 'No, thanks. I don\'t want this update.'
    ],
    defaultId: 0,
    cancelId: 1,
    message: 'The new ' + app.getName() + ' is available 😃',
    detail: message
  }, response => {
    if (response === 0) {
      shell.openExternal(updateURL)
    } else if (response === 1) {
      storage.has('ignoreVersion', (error, hasKey) => {
        if (error) throw error
        if (hasKey) storage.remove('ignoreVersion', (error) => {
          if (error) throw error
        })
      })
    } else if (response === 2) {
      storage.set('ignoreVersion', update.tag_name, (error) => {
        if (error) throw error
      })
    }
  })
}

function showNoUpdateMessageBox () {
  let message = `Continue ploppin'.`
  dialog.showMessageBox({
    type: 'info',
    icon: path.join(__dirname, iconPath),
    buttons: [
      '¡Muchisimas gracias!'
    ],
    defaultId: 0,
    message: 'You\'re all up to date.',
    detail: message
  })
}

function startVersionCheck (options) {
  versionCheck(options.versionCheck, function (update) { // callback function
    if (update) {
      showUpdateMessageBox(update)
    } else if (options.forceCheck) {
      showNoUpdateMessageBox()
    }
  })
}

function checkUpdates () {
  const options = Object.assign({
    versionCheck: {
      // repo: 'atom/atom', // for test purposes
      repo,
      currentVersion: version
    },
    forceCheck: false
  }, arguments[0])

  if (options.forceCheck) {
    startVersionCheck(options)
  } else {
    storage.get('ignoreVersion', (error, data) => {
      if (error || typeof data !== 'string') return startVersionCheck(options)

      options.versionCheck.currentVersion = data.replace(/[^0-9$.,]/g, '')

      startVersionCheck(options)
    })
  }
}

module.exports = checkUpdates
