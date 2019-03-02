const url = require('url');
const querystring = require('querystring');

const parseUrl = url.parse('https://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
const query = querystring.parse(parseUrl.query);
console.log('querystring.parse():', query); // query 부분을 자바스크립트 객체로 분해함
console.log('querystring.stringify():', querystring.stringify(query)); // 분해된 query 객체를 문자열로 다시 조립함