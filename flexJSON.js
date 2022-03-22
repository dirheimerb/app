var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
(function (factory) {
	if (typeof module === 'object' && typeof module.exports === 'object') {
		var v = factory(require, exports);
		if (v !== undefined) module.exports = v;
	} else if (typeof define === 'function' && define.amd) {
		define(['require', 'exports', 'fs'], factory);
	}
})(function (require, exports) {
	'use strict';
	exports.__esModule = true;
	//import {readFileSync} from "fs";
	var fs_1 = __importDefault(require('fs'));
	function convertCSV() {
		var dataFile = fs_1['default'].readFileSync('exported.json');
		var array = JSON.parse(dataFile);
		var str = '';
		var row = '';
		for (var index in array[0]) {
			//Now convert each value to string and comma-seprated
			row += index + ',';
		}
		row = row.slice(0, -1);
		//append Label row with line break
		str += row + '\r\n';
		for (var i = 0; i < array.length; i++) {
			var line = [];
			for (var index in array[i]) {
				if (line == '') line += '';
				line += ',' + array[i][index];
			}
			str += line + '\r\n';
			var writeFile = fs_1['default'].writeFileSync('exportedts.csv', str);
		}

		console.log(writeFile);
		return str;
	}
	convertCSV();
});
