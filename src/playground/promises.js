// resolve or reject can only get 1 argument and can only be resolved and rejected once

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'Milos',
    //   age: '30'
    // });
    reject('Something went wrong!');
  }, 2000);
});

console.log('before');

promise.then((data) => {
  console.log('1', data);
}).catch((error) => {
  console.log('error: ', error);
});

console.log('after');