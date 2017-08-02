module.exports = function getCheckCode(zipcode) {
	let zipcode_arr = [...zipcode];
	let sum = 0;

	zipcode_arr.map(code => {
		let code_num = +code;

		if (!Number.isNaN(code_num)) {
			sum += code_num;
		}
	});

	return ((10 - sum % 10) % 10).toString(); // 处理特殊情况，当sum为10的整倍数时 ！！！
};