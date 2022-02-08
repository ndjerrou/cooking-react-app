function makePromise1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: "ma data1"
      });
    }, 1000);
  });
}

function makePromise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: "ma data2"
      });
    }, 2000);
  });
}

function makePromise3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: "ma data3"
      });
    }, 3000);
  });

  //return axios.get(url): axios returns a promise, we return it to the consumer of this fn
}

const promise1 = makePromise1();
const promise2 = makePromise2();
const promise3 = makePromise3();

// console.log(promise1);
// console.log(promise2);
// console.log(promise3);

Promise.all([promise1, promise2, promise3]).then((result) =>
  console.log(result)
);

// transferts

// 6 mekkah - 6 medine

// Validation par transfert / Validation pour tous les transferts - validaton = push
