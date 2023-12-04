
let myArr = ["Orangered", "Blue", "Yellow", "Green", "Orange", "Cyan", "DodgerBlue", "Violet", "Navy", "Purple", "YellowGreen", "OrangeRed", "SlateBlue", "Salmon", "Crimson", "HotPink", "Magenta"];

let currIndx = 0;

//using arrow functions
myFunc = () =>
{
    if (currIndx > myArr.length - 1) currIndx = 0; // if the index hits end reset index to 1st colour

    document.getElementById('name').innerHTML = "Colour Name : " + myArr[currIndx];
    
    document.getElementById('name').style.color = "White";

    document.body.style.backgroundColor = myArr[currIndx];

    currIndx++;
}
