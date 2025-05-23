/* htmlFrags.js
   Holds HTML fragments for easy reuse
   
   Exports:
   doctype() - Doctype and HTML tag
   head(title?) - Head tags and title, opening body tag
   end() - Closing body and HTML tags
*/

exports.doctype = () => {
	return '<!DOCTYPE html>\n<html>\n';
}

exports.head = (title = "No title for old men") => {
	return `<head>\n\
	<meta name="generator" content="NPP/NodeJS" />\n\
	<title>${title}</title>\n\
</head>\n\
<body>\n`;
}

exports.end = () => {
	return '</body>\n</html>';
}

exports.header1 = (text="", attribs="") => {
	return "<h1" +
	(attribs === '' ? '' : (' ' + attribs) )
	+ `>${text}</h1>\n`;
}

exports.header2 = (text="", attribs="") => {
	return "<h2" +
	(attribs === '' ? '' : (' ' + attribs) )
	+ `>${text}</h2>\n`;
}

exports.header3 = (text="", attribs="") => {
	return "<h3" +
	(attribs === '' ? '' : (' ' + attribs) )
	+ `>${text}</h3>\n`;
}

exports.paragraph = (text="", attribs="") => {
	return "<p" +
	(attribs === '' ? '' : (' ' + attribs) )
	+ `>\n\t${text}</p>\n`;
}