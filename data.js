const fs = require('fs')

var portsString = fs.readFileSync('data.json');
var ports = JSON.parse(portsString);

module.exports.ports = ports
