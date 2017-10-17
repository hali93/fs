var fs = require('fs');


fs.readdir('./', 'utf-8', function(err, files) {
	console.log(files);
	var list = '';
	for(var i = 0; i < files.length; i++) {
		list += files[i] + '\r\n';
	}

	fs.writeFile('text.txt', list, function(err) {
	if(err) throw err;
	console.log('Saved!');
	});
});



