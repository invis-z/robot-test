var child_process = require('child_process');
child_process.execSync('ls -lAR',{stdio:[0,1,2]});