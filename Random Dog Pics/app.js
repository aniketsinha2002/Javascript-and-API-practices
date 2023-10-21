let btn = document.querySelector("button");
let url = "https://dog.ceo/api/breeds/image/random";

async function getImages(){
    try
    {
       let response = await fetch(url);
       let data = await response.json();
       return data.message;
    }
    catch (error)
    {
       return "No Images Found!";
    }
}

btn.addEventListener("click", async() => {
    let result = await getImages();
    
    let p = document.querySelector("#res");
    // p.innerText = result;
    p.setAttribute("src", result);
    // console.log(result);
});
