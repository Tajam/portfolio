const find = require('find')
const fs = require('fs');
const { exec } = require('child_process')

console.log('Building pages...')
exec('npm run build:gh-pages', () => {
  console.log('Renamed \'index.html\' to \'404.html\'!')
  const path = 'dist'
  find.file(path, (files) => {
    const name = 'index.html'
    const first = true
    files.filter(file => file.substring(file.length - name.length, file.length) === name)
      .forEach(file => {
        if (first) {
          fs.rename(file, `${file.substring(0, file.length - name.length)}404.html`, () => {})
          first = false
        } else {
          fs.delete(file)
        }
      })
  })
})