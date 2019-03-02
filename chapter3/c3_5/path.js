const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep); // 경로의 구분자. Window는 \, POSIX는 /
console.log('path.delimiter:', path.delimiter); // 환경변수의 구분자. Window 는 ;, POSIX 는 :
console.log('--------------------------');
console.log('path.dirname():', path.dirname(string)); // 파일이 위치한 폴더 경로
console.log('path.extname():', path.extname(string)); // 파일의 확장자
console.log('path.basename():', path.basename(string)); // 파일의 이름(확장자 포함)
console.log('path.basename():', path.basename(string, path.extname(string))); // 파일의 이름만(두번째 인자에 확장자를 넣었기 때문)
console.log('--------------------------');
console.log('path.parse()', path.parse(string)); // 파일의 경로를 roo, dir, base, ext, name 으로 분리
console.log('path.format()', path.format({ // path.parse() 객체 파일의 경로로 합침
    dir: 'Users\network514',
    name: 'path',
    ext: 'js',
}));
console.log('path.normalize():', path.normalize('/Users\/network514////')); // /나 \를 실수로 여러 번 사용했거나 혼용했을 때 정상적인 경로로 변환해줌.
console.log('--------------------------');
console.log('path.isAbsolute():', path.isAbsolute('/')); // 파일의 경로가 절대 경로인지 상대경로인지 true나 false로 알려줌
console.log('path.isAbsolute():', path.isAbsolute('/Users'));
console.log('--------------------------');
console.log('path.relative():', path.relative('/Users/network514/Documents/work/nodeJs/honeyBread/chapter3/c3_6', '/')); // 경로를 두 개 넣으면 첫 번째 경로에서 두번째 경로로 가는 방법을 알려줌
console.log('path.join():', path.join(__dirname, '..', 'users', '.', '/network514')); // 여러 인자를 하나의 경로로 합침. 상대경로(..), 현위치(.) 알아서 처리해줌.
console.log('path.resolve():', path.resolve(__dirname, '..', 'users', '.', '/network514')); // path.join()과 비슷하지만 차이 있음.
console.log('--------------------------');
console.log('path.join():', path.join('/a', '/b', 'c'));
console.log('path.resolve():', path.join('/a', '/b', 'c'));