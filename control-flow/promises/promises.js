const { readFile }= require('fs');

const readProm = (file) => {
  return new Promise((resolve, reject) => {
    readFile(file, (err, content) => {
      if (err) reject(err);
      else resolve(content);
    })
  })
}

readProm(__filename)
  .then((content) => {
    console.log(content.toString());
  })
  .catch((err) => {
    console.error(err);
  })