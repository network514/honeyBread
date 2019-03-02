const util = require('util');
const crypto = require('crypto');

const dontUseMe = util.deprecate((x,y) => { // 함수가 deprecate되었음을 알려줌
    console.log(x + y);
}, 'dontUserMe 함수는 deprecated 되었으니 더 이상 사용하지 마세요!');
dontUseMe(1,2);

const randomBytesPromise = util.promisify(crypto.randomBytes); // 콜백 패턴을 프로미스 패턴으로 바꿔줌.
randomBytesPromise(64)
    .then((buf) => {
        console.log(buf.toString('base64'));
    })
    .catch((error) => {
        console.error(error);
    });