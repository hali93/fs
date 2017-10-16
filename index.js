var fs = require('fs');


fs.readdir('./', 'utf-8', function(err, files) {
	console.log(files);
	var dir = files;
	fs.writeFile('text.txt', dir, function(err) {
	if(err) throw err;
	console.log('Saved!');
	});
});



