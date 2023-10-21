let btn = document.querySelector("button");
let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

async function getFacts(){
    try
    {
       let response = await fetch(url);
       let data = await response.json();
       console.log(data.joke);
       return data.joke;
    }
    catch (error)
    {
       console.error(error);
       return "No facts Found!";
    }
}

btn.addEventListener("click", async() => {
    let result = await getFacts();
    let p = document.querySelector("#res");
    p.innerText = result;
});
