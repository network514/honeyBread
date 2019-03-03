const fs = require('fs');

// fs.access(경로, 옵션, 콜백) -> 폴더나 파일에 접근 할 수 있는지를 체크
// F_OK 파일 존재 여부
// R_OK 읽기 권한 여부
// W_OK 쓰기 권한 여부
fs.access('./folder', fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK, (err) => {
    if(err) {
      if(err.code === 'ENOENT') { // 'ENOENT' -> 파일 폴더가 없을 때 에러 코드
        console.log('폴더 없음');
        fs.mkdir('./folder', (err) => { // fs.mkdir(경로, 콜백) -> 이미 폴더가 있다면 에러 발생
            if(err) {
                throw err;
            }
            console.log('폴더 만들기 성공');
            // fs.open(경로, 옵션, 콜백)
            // 옵션 : w - 쓰기, r - 읽기, a - 기존파일에 추가
            fs.open('./folder/file.js', 'w', (err, fd) => { 
                if(err) {
                    throw err;
                }
                console.log('빈 파일 만들기 성공', fd);
                // fs.rename(기존 경로, 새 경로, 콜백)
                fs.rename('./folder/file.js', './folder/newfile.js', (err) => {
                    if(err) {
                        throw err;
                    }
                    console.log('이름 바꾸기 성공');
                });
            });

        });
      } else {
        throw err;
      }
    } else {
        console.log('이미 폴더 있음');
    }
});