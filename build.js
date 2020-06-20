const find = require('find')
const fs = require('fs');
const { exec } = require('child_process')

console.log('Building pages...')
exec('npm run build:gh-pages', () => {
  console.log('Renamed \'index.html\' to \'404.html\'!')
  find.file('dist', (files) => {
    const name = 'index.html'
    files.filter(file => file.substring(file.length - name.length, file.length) === name)
      .forEach(file => {
        fs.rename(file, `${file.substring(0, file.length - name.length)}404.html`, () => {})
      })
  })
})