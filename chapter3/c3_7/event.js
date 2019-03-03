const EventEmitter = require('events');

const myEvent = new EventEmitter();
// addListener - on과 동일한 기능
myEvent.addListener('event1', () => {
    console.log('이벤트 1');
});
// on - 이벤트 이름과 이벤트 발생 시의 콜백을 연결해줌. 
// 이벤트 리스닝 : 연결하는 동작
myEvent.on('event2', () => {
    console.log('이벤트 2');
});
myEvent.on('event2', () => {
    console.log('이벤트 2 추가');
});
console.log('이벤트 호출 전');
// emit - 이벤트를 호출하는 메서드
myEvent.emit('event1');
myEvent.emit('event2');
// once - 한번만 실행되는 이벤트
myEvent.once('event3', () => {
    console.log('이벤트 3');
});
myEvent.emit('event3');
myEvent.emit('event3');
myEvent.on('event4', () => {
    console.log('이벤트 4');
});
// removeAllListeners - 이벤트에 연결된 모든 이벤트 리스너 제거
myEvent.removeAllListeners('event4');
myEvent.emit('event4');

const listener = () => {
    console.log('이벤트 5');
};
myEvent.on('event5', listener);
// removeListener - 이벤트에 연결된 리스너를 하나씩 제거
myEvent.removeListener('event5', listener);
myEvent.emit('event5');
// listenerCount - 연결된 이벤트 개수
console.log(myEvent.listenerCount('event2'));

// off(이벤트, 콜백) : removeListener와 동일한 기능