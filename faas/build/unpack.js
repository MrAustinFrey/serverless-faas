"use strict"

const path = require('path')
const ezUnzip = require('extract-zip')

const unpack = () => {
  ezUnzip(
    path.join(__dirname, '../../../master.zip'),
    { dir: path.join(__dirname, '../../../templates') },
    (err) => {
      if (err) console.log(err)
      else console.log('done')
    }
  )
}

//unpack()

module.exports = unpack

