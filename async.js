async function a() {
  const a = await 1; // await -> then
  console.log('a', a);
  console.log('hmm');
  await null;
  const b = await Promise.resolve(1);
  console.log('b', b);
}

Promise.resolve(1)
  .then(a => {
    console.log('a', a);
    console.log('hmm');
    return null;
  })
  .then(() => {
    return Promise.resolve(1);
  })
  .then(b => {
    console.log('b', b);
  });
