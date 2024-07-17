const displayResult = document.querySelector("#result");
const resolveBtn = document.querySelector("#resolve-btn");
const rejectBtn = document.querySelector("#reject-btn");

const p = new Promise((resolve, reject) => {
  //returns an obj when new keyword is placed
  resolveBtn.addEventListener("click", () => {
    resolve("ok");
  });
  rejectBtn.addEventListener("click", () => {
    reject("Not-ok");
  });
});

//.then(), .catch() method itself returns a promise which has then,catch,finally...method
p.then((data) => {
  displayResult.innerHTML = "Promise Resolved!! :" + data;
  console.log("Promise Resolved!! :" + data); // promise resolved : Ok
  return 1;
})
  .catch((data) => {
    displayResult.innerHTML = "Promise Rejected!! :" + data;
    console.log("Promise Rejected!! :" + data);
    return 0;
  })
  .finally(() => {
    console.log("Finally!!"); // finally
  })
  .then((data) => {
    console.log("promise chain :" + data); // promise chain 1 when resolve, promise chain 0 when reject
  });
