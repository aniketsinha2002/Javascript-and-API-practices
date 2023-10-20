let btn = document.querySelector("button");
let ul = document.querySelector("ol");
let input = document.querySelector("input");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = input.value;


    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    
    item.appendChild(delBtn);
    ul.appendChild(item);
    // console.log(input.value); 
    input.value = "";
});

ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON"){
        event.target.parentElement.remove();
    }
})
// let DelBtns = document.querySelectorAll(".delete");

// for (delBtn of DelBtns){
//     delBtn.addEventListener("click", function () {
//         let par = this.parentElement;
//         par.remove();
//     });
// }