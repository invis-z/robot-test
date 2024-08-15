var fs = require('fs');
var files = fs.readdirSync('./');
var child_process = require('child_process');
child_process.execSync('npm install',{stdio:[0,1,2]});