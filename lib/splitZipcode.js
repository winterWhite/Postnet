

function splitCode(zipcode) {
	let zipcode_arr = [...zipcode];
	let code_length = zipcode.length;

	if (code_length !== 5 && code_length !== 9 && code_length !== 10) {
		return [];
	}

	zipcode_arr = zipcode_arr.filter(code => {
		return !Number.isNaN(+code);
	});

	if (zipcode_arr.length !== 5 && zipcode_arr.length !== 9) {
		return [];
	}

	return zipcode_arr;
};

function splitPost(code_str) {
	let code_str_real = code_str.slice(1, -1);
	let result = [];

	while (code_str_real.length > 5) {
		let code = code_str_real.slice(0,5);
		code_str_real = code_str_real.slice(5);
		result.push(code);
	}

	if (code_str_real.length == 5) {
		result.push(code_str_real);
	}

	if (result.length !== 6 && result.length !== 10) {
		return [];
	}

	return result;
}

module.exports = {
	splitCode,
	splitPost
};