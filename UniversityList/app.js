let btn = document.querySelector("button");
let url = "http://universities.hipolabs.com/search?name=";

async function getUni(country){
    try
    {
       let response = await fetch(url+country);
       let data = await response.json();
        //    console.log(data);
        return data;
    }
    catch (error)
    {
       return "No Universities Found!";
    }
}
 
function show(result) {
    let unordli = document.querySelector("ul");
    // Clear the existing results before displaying the new ones
    unordli.innerHTML = "";
    for (res of result) {
        console.log(res.name);
        let li = document.createElement("li");
        li.innerText = res.name;
        unordli.appendChild(li);
    }
}

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    let result = await getUni(country);
    show(result);
     
    // let p = document.querySelector("#res");
    // p.innerText = result;
    // p.setAttribute("src", result);
    console.log(result);
});
