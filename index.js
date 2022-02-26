const add_btn = document.getElementById("add_btn");
const close_pop = document.getElementById("cut");
const close_todo = document.getElementById("close_btn");
const pop_show = document.getElementById("pop_show");



let toDoArray = [];

let edittedIndex = null;

function showPopUp() {
    pop_show.style.zIndex = 100;
};
add_btn.addEventListener("click", showPopUp);

function closePopUp() {
    pop_show.style.zIndex = -100;
    edittedIndex = null;
};
close_pop.addEventListener("click", closePopUp);



// function ToDoNone() {
//     document.getElementById("todo_none").style.display = "none";
// };
// close_todo.addEventListener("click", ToDoNone);

function refreshToDoArray() {

    let dynamicHtml = '';
    for (let i = 0; i < toDoArray.length; i++) {
        dynamicHtml += `
        <div class="todo">
            <div class="header">
                <h2 id="heading">
                    <textarea name="" disabled id="addHeading" cols="20" style="width: max
                    -content;" rows="1" placeholder="Heading">${toDoArray[i].heading}</textarea>
                    <button class = "edit" value="${i}">
                        <i onclick="editing(event)" class="fa fa-pencil-square-o " style="padding: 1%;"></i>
                    </button>
                    <button class="closeBtn" value="${i}">
                    <i class="fa fa-close" onclick="deleteItem(event)">
                    </i>
                </button>
                </h2>
            </div>
            <hr style="padding: 1%;">
            <div class="content">
                <p id="todo_text">
                    <textarea name="" disabled id="addWhatTodo" style="width: -webkit-fill-available" cols="30" rows="10" placeholder="Whata ToDo">${toDoArray[i].description}</textarea>

                </p>
            </div>
        </div>
    `;
    }
    document.getElementById("toDoContainer").innerHTML = dynamicHtml;

}

function editing(event) {

    pop_show.style.zIndex = 100;

    const toDoArrayIndex = event.target.parentNode.value;
    edittedIndex = toDoArrayIndex;
    const arrayElement = toDoArray[toDoArrayIndex];
    var head = arrayElement.heading;
    var todo = arrayElement.description;

    document.getElementById("Heading").value = head;
    document.getElementById("what_todo").value = todo;

}

function deleteItem(event) {
    const toDoArrayIndex = event.target.parentNode.value;
    toDoArray.splice(toDoArrayIndex, 1);
    refreshToDoArray();
}


function addHead() {

    // document.getElementById("todo_none").style.display = "block";
    var head = document.getElementById("Heading").value;
    // document.getElementById("addHeading").value = head;
    var todo = document.getElementById("what_todo").value;
    // document.getElementById("addWhatTodo").value = todo;

    //conditions

    if (!head) {
        alert("Enter Heading");
        return;
        // pop_show.style.zIndex = 100;
        // toDoArray.style.display = "none"
    }

    if (!todo) {
        alert("Enter ToDo");
        return;
    }


    let newObj = { heading: head, description: todo };
    if (edittedIndex != null) {
        toDoArray[edittedIndex] = newObj;
        edittedIndex = null;
    } else {
        toDoArray.push(newObj);
    }
    refreshToDoArray();

    document.getElementById("Heading").value = '';
    document.getElementById("what_todo").value = "";

    pop_show.style.zIndex = -100;
};
document.getElementById("add_to").addEventListener("click", addHead);




// var elements = document.getElementsByClassName("closeBtn");
// console.log('class', elements);
// var myFunction = function() {
//     var attribute = this.getAttribute("value");
//     console.log('attribute', attribute);
// };

// for (var i = 0; i < elements.length; i++) {
//     elements[i].addEventListener('click', myFunction, false);
// }
// }

// document.getElementById("edit").addEventListener("click", editing);

// function editing() {

// }