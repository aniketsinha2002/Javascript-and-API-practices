const mysubmit = document.getElementById('submitButton');
const jokeContainer = document.getElementById('joke');

const url = "https://official-joke-api.appspot.com/jokes/random";

mysubmit.addEventListener('click', function () {
    
    const facts = fetch(url);
    facts
    .then(data => {
        return data.json();
    })
    .then(data1 => {
        jokeContainer.textContent = data1.setup
        console.log(data1); // result of objs in an array
    })
})
    


