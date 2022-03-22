'use strict';
var fs = require('fs');
data = fs.readFileSync('CSV_file.csv');
var array = data.toString().split('\r');
var r = [];
var k = array[0].split(', ');
//console.log('I am at the header' + k)
for (var i = 1; i < array.length - 1; i++) {
	var Object_1 = {};
	var str = array[i];
	var s = '';
	var flag = 0;
	for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
		var ch = str_1[_i];
		if (ch === '"' && flag === 0) {
			flag = 1;
		} else if (ch === '"' && flag == 1) flag = 0;
		if (ch === ', ' && flag === 0) ch = '|';
		if (ch !== '"') s += ch;
	}
	var lexy = s.split('|');
	//console.log('I am raw array data'+lexy)
	for (var T in k) {
		if (lexy[T].includes(', ')) {
			Object_1[k[T]] = lexy[T].split(', ').map(function (item) {
				return item.trim();
			});
		} else Object_1[k[T]] = lexy[T];
	}
	r.push(Object_1);
}
var json = JSON.stringify(r);
fs.writeFileSync('exported.json', json);
