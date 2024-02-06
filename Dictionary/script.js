const word = document.getElementById('word');
const submit = document.getElementById('submit');

const speech1 = document.getElementById('speech');
const defination = document.getElementById('definition');
const example1 = document.getElementById('example');

submit.addEventListener('click', function () {
    let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word.value;

    console.log(url);

    const dictionary = fetch(url);
    dictionary
        .then(data => data.json())
        .then(data2 => {
            console.log(data2)
            const tmp = data2[0].meanings[0];
            const speech = tmp.partOfSpeech;
            const def1 = tmp.definitions[0].definition;
            const example = tmp.definitions[0].example;

            speech1.textContent = speech
            defination.textContent = def1
            // example1.textContent = example
        })
        .catch(error => {
            speech1.textContent = "Nothing Found!"
            defination.textContent = "Nothing Found!"
            // example1.textContent = "Nothing Found!"
        });
});
