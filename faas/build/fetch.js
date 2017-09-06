"use strict"

const fs = require('fs')
const got = require('got')

const unpack = require('./unpack')

const fetch = () => {
  console.log(__dirname)
  got.stream('https://github.com/alexellis/faas-cli/archive/master.zip')
    .on('error', (err) => console.log(err))
    .on('end', () => {
      unpack()
      console.log("All done")
    }).pipe(fs.createWriteStream('master.zip'))
}

//fetch()

module.exports = fetch
