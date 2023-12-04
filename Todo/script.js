let inpValue = document.getElementById('inp');
let listContainer = document.getElementById('list_container');

Myadd = () => {

    if (inpValue.value.trim() === '') {
        alert('Please enter a task!');
        return;
    }

     // Create a container for the item
    let itemContainer = document.createElement('div');

    //add this div to classlist to style in css
    itemContainer.classList.add('item-container');

    //this will create a new paragraph element with the input user value
    let newP = document.createElement('p');
    newP.textContent = inpValue.value;

    //creating a button with a button name Delete Me
    let delBtn = document.createElement('button');
    delBtn.textContent = 'Delete Me';

    //add this button to classlist to style in css
    delBtn.classList.add('delete-btn');


    delBtn.onclick = () => {
        //Remove that paragraph when the button is clicked
        listContainer.removeChild(itemContainer);
    }
     
    itemContainer.appendChild(newP);
    itemContainer.appendChild(delBtn);

    listContainer.appendChild(itemContainer);

    inpValue.value = ' ';
}
