/* myDateTimeModule.js
   An example module that returns an ISO-formatted date and time
   
   Exports: myDateTime()*/

exports.myDateTime = function() {
	return new Date().toISOString();
};