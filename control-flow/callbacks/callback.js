const { readFile } = require('fs');
const files = Array.from(Array(3)).fill(__filename);
const data = [];
const print = (err, content) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(content.toString());
}

let count = files.length;
let index = 0;

const read = (file) => {
  readFile(file, (err, content) => {
    index+=1;
    if (err) print(err);
    else data.push(content);
    if (index < count) read(files[index]);
    else print(null, Buffer.concat(data));
  })
}

read(files[index]);