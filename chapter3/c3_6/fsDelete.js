const fs = require('fs');

// fs.readdir(경로, 콜백)
fs.readdir('./folder', (err,dir) => {
    if(err) {
        throw err;
    }
    console.log('폴더 내용 확인', dir);
    // fs.unlink(경로, 콜백)
    fs.unlink('./folder/newFile.js', (err) => {
        if(err) {
            throw err;
        }
        console.log('파일 삭제 성공');
        fs.rmdir('./folder', (err) => {
            if(err) {
                throw err;
            }
            console.log('폴더 삭제 성공');
        });
    });
});