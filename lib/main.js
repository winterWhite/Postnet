const splitCode = require('./splitZipCode');
const transCode = require('./transCode');
const getCheck = require('./getCheckCode');

function numberToCode(zipcode){

	let zipcode_arr = splitCode.splitCode(zipcode);

	if (!zipcode_arr.length) {
		return '邮编输入不正确';
	}

	let result = '';
	result += '|';

	zipcode_arr.map(code => {
		let code_str = transCode(code);

		result += code_str;
	});

	let check_code = getCheck(zipcode);
	let check_code_str = transCode(check_code);

	result += check_code_str;

	result += '|';

	return result;
}

function codeToNumber(postnet) {
	let zipcode_arr = splitCode.splitPost(postnet);

	if (!zipcode_arr.length) {
		return '条码输入不正确';
	}

	let result = '';

	zipcode_arr.map(code => {
		let code_num = transCode(code);

		result += code_num;
	});

	result = result.slice(0, -1);

	
	if (result.length == 9) {
		result = result.slice(0,5) + '-' + result.slice(5);
	}

	return result;
}

module.exports = function main(code) {
	let result;
	
	if (code.indexOf('|') > -1) {
		result = codeToNumber(code);
	} else {
		result = numberToCode(code);
	}

	return result;
}
