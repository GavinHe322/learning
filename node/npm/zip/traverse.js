const fs = require('fs')
const path = require('path')
const JSZip = require('jszip')
const zip = new JSZip()

function readDir(zip, dirPath) {
  const files = fs.readdirSync(dirPath)
  files.forEach(fileName => {
    const fillPath = dirPath + '/' + fileName
    const file = fs.statSync(fillPath)
    if (file.isDirectory()) {
      const dirZip = zip.folder(fileName)
      readDir(dirZip, fillPath)
    } else {
      zip.file(fileName, fs.readFileSync(fillPath))
    }
  })
}

function generateZip() {
  const sourceDir = path.join(__dirname, './dist')
  readDir(zip, sourceDir)
  zip.generateAsync({
    type: "nodebuffer",
    compression: "DEFLATE",
    compressionOptions: {
      level: 9
    }
  }).then(content => {
    fs.writeFileSync('traverse.zip', content)
  })
}

generateZip()
