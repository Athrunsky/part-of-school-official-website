// JavaScript Document
function isEmail(str) {
	var reg = /^[\w-]+(.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
	return reg.test(str);
}
