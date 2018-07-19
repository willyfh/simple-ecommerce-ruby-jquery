var baseApiUrl = 'http://localhost:5000';

/** convert to money format (USD) */
var formatMoney = function (number) {
	return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

/** return true if using IE Browser */
var isIE = function(){
	var userAgent = window.navigator.userAgent;
	var oldIE = userAgent.indexOf('MSIE ');
	var newIE = userAgent.indexOf('Trident/');
	return (oldIE > -1 || newIE > -1);
}