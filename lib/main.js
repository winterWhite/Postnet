const splitCode = require('./splitZipCode');
const transCode = require('./transCode');
const getCheck = require('./getCheckCode');

function numberToCode(zipcode){

	let zipcode_arr = splitCode.splitCode(zipcode);
	let check_code = getCheck(zipcode);

	if (!zipcode_arr.length) {
		return '邮编输入不正确';
	}

	zipcode_arr.push(check_code);
	zipcode_arr = zipcode_arr.map(code => {
		let code_str = transCode(code);
		return code_str;
	});

	let result = zipcode_arr.join('');

	result = `|${result}|`;

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
