const fs = require('fs');
const child_process = require('child_process');
const packages={
	"dependencies": {
		"@actions/core": "^1.10.1",
		"@actions/github": "^6.0.0",
		"@octokit/rest": "^21.0.1"
	}
}
fs.writeFileSync('package.json', JSON.stringify(packages));
child_process.execSync('npm install',{stdio:[0,1,2]});