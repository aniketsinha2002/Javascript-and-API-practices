let div = document.querySelector("#faq-container");

const fetchData = async () => {
  const data = await fetch("./data.json");
  const res = await data.json();

  //RENDER DATA
  res.forEach((element, idx) => {
    const question = " ⧨ " + element.question;
    const answer = element.answer;

    const questionDiv = document.createElement("div");
    const answerDiv = document.createElement("div");

    questionDiv.innerHTML = question;
    questionDiv.classList.add("question-div");

    answerDiv.innerHTML = answer;
    answerDiv.classList.add("answer-div");

    const qnaDiv = document.createElement("div");
    qnaDiv.appendChild(questionDiv);
    qnaDiv.appendChild(answerDiv);
    qnaDiv.classList.add("qna-div");

    // ADDING event listener to toggle answer visibility
    if (idx === 0) {
      answerDiv.style.display = "flex";
    }

    questionDiv.addEventListener("click", () => {
      if (answerDiv.style.display === "none") {
        answerDiv.style.display = "flex";
        answerDiv.style.maxHeight = answerDiv.scrollHeight + "px";
      } else {
        answerDiv.style.display = "none";
        answerDiv.style.maxHeight = "0";
      }
    });

    div.appendChild(qnaDiv);
    // console.log(question, answer);
  });
};

fetchData();
