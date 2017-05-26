const fs = require('fs');
const argv = process.argv;
const base64Content = fs.readFileSync(argv[2]);
const binaryBuffer = Buffer.from(base64Content.toString(), 'base64');
const fd = fs.openSync(argv[3], 'w');
fs.writeSync(fd, binaryBuffer, 0, binaryBuffer.length, 0);
fs.closeSync(fd);
console.log('recovered');