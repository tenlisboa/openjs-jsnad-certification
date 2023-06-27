const fs = require("fs");

function readSync() {
  const data = fs.readFileSync("./spotify_weather_data.csv");
  data.toString()
}

function readAsync() {
  console.time("returnOfAsync")
  fs.readFile("./spotify_weather_data.csv", (err, data) => {
    if (err) throw err;
    data.toString()
    console.timeEnd("returnOfAsync")
  });
}

console.time("readFileSync");
readSync()
console.timeEnd("readFileSync");

console.time("readFile");
readAsync()
console.timeEnd("readFile");
