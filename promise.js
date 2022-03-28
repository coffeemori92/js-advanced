// 실행 했지만 결과값을 나중에 쓸 수 있다.
setTimeout(() => {
  console.log('a');
}, 1000);

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 1000);
});

promise.then(() => {
  console.log('a');
});
