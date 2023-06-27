const fs = require("fs");

// When you use a sync operation right before a non-blocking
// operation, the next operation will start executing before
// the previous one is finished. This is called "dangerous"
fs.readFile("./spotify_weather_data.csv", (err, data) => {
  if (err) throw err;
  console.log(data.toString())
});
fs.unlinkSync("./spotify_weather_data.csv");

// Depending on your machine you might not get an error, but if the readFile
// dalays long enough, the file will be deleted before it can be read.


/*
* Safe approach

fs.readFile("./spotify_weather_data.csv", (rferr, data) => {
  if (rferr) throw rferr;
  console.log(data.toString())
  fs.unlink("./spotify_weather_data.csv", (unerr) => {
    if (unerr) throw unerr;
  });
});

*/
