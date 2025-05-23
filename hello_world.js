var http = require('http');
var dateTime = require('./modules/myDateTimeModule');
var htmlFrags = require('./modules/htmlFrags');

http.createServer(handleResponse).listen(8080);

function handleResponse(request, response) {
	response.writeHead(200, {'Content-type': 'text/html'});
	response.write(htmlFrags.doctype());
	response.write(htmlFrags.head("Hello world!"));
	response.write(htmlFrags.header1("Hello world!", 'align="center"'));
	response.write(
		htmlFrags.paragraph(
			htmlFrags.header3("At the time of processing the request, the time will be:<br />"
			+ dateTime.myDateTime(), 'align="center"')
		)
	);
	response.end(htmlFrags.end());
}