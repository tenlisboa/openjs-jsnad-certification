const fs = require('fs');
const path = require('path');

const currentPath = path.join(__dirname, '.env');

fs.readFile(currentPath, 'utf8', (err, data) => {
  if (err) throw err;

  const envFileString = data.toString().trim();

  const envFileObject = parseEnvFile(envFileString);

  console.log(envFileObject);

  process.env = { ...process.env, ...envFileObject };
});

function parseEnvFile(envFileString) {
  const envFileLines = envFileString.split('\n');
  const envFileObject = {};
  envFileLines.forEach(line => {
    const [key, value] = line.split('=');
    envFileObject[key] = value;
  });
  return envFileObject;
}
