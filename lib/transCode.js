
const bar_code_arr = ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
const bar_map = {};

Object.entries(bar_code_arr).forEach(item => {
	bar_map[item[0]] = item[1];
	bar_map[item[1]] = item[0];
});
// console.log(bar_map);
module.exports = function transCode(code) {
	// switch (code) {
	// 	case '1':
	// 		return ':::||';
	// 	case ':::||':
	// 		return '1';
	// 	case '2':
	// 		return '::|:|';
	// 	case '::|:|':
	// 		return '2';
	// 	case '3':
	// 		return '::||:';
	// 	case '::||:':
	// 		return '3';
	// 	case '4':
	// 		return ':|::|';
	// 	case ':|::|':
	// 		return '4';
	// 	case '5':
	// 		return ':|:|:';
	// 	case ':|:|:':
	// 		return '5';
	// 	case '6':
	// 		return ':||::';
	// 	case ':||::':
	// 		return '6';
	// 	case '7':
	// 		return '|:::|';
	// 	case '|:::|':
	// 		return '7';
	// 	case '8':
	// 		return '|::|:';
	// 	case '|::|:':
	// 		return '8';
	// 	case '9':
	// 		return '|:|::';
	// 	case '|:|::':
	// 		return '9';
	// 	case '0':
	// 		return '||:::';
	// 	case '||:::':
	// 		return '0';
	// }
	return bar_map[code];
};