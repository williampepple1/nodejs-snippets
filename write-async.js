//Writing a File Asynchronously using nodejs
var fs =  require('fs');
var content= "this is the content in the file";
fs.writeFile('content.txt', content , (err) => {
	if (err) 
		throw err;
	console.log('It\'s saved!');
});
				