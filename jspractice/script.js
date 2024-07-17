//PROMISE ALL POLYFILL

//ONE PROMISE FAILED -> ALL FAILED
function importAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`subscribe to ${username}`);
    }, 1000);
  });
}

function likevideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the ${video} video`);
    }, 1000);
  });
}

function sharevideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`NOT Share the ${video} video`);
    }, 1000);
  });
}

Promise.myAllPromise = function (promisesArr) {
  return new Promise((resolve, reject) => {
    const res = [];
    if (!promisesArr.length) {
      resolve(res);
      return;
    }

    let length = promisesArr.length;

    promisesArr.forEach((ele, idx) => {
      Promise.resolve(ele).then((result) => {
        res[idx] = result;
        length--;

        if (length === 0) {
          resolve(res);
        }
      }, reject);
    });
  });
};
Promise.myAllPromise([
  importAction("Aniket"),
  likevideo("www.yt.com/aniket"),
  sharevideo("learn js from Aniket"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((data) => {
    console.log("failed : " + data);
  });
