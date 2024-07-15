//given a list of data show if the data is present else show no record found
const data = [
  {
    name: "Aniket",
    email: "aniket@gmail.com",
  },
  {
    name: "Raj",
    email: "raj@gmail.com",
  },
];

document.querySelector("button").addEventListener("click", showData);

function showData() {
  const selectInput = document.querySelector("input");
  const inputval = selectInput.value;

  const selectDiv = document.querySelector("div");

  const result = data.find((item) => item.name === inputval);

  if (result) {
    selectDiv.innerText = result.email;
  } else {
    selectDiv.innerText = "No records Found";
  }
}
