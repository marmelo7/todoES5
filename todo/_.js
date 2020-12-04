const input = document.querySelector("#input");
const con = document.querySelector("#container");
const add = document.querySelector("#add");
const checkIcon = document.querySelector("#check")
const deleteIcon = document.querySelector("#delete")

function makeCheck(){
    const newCheck = document.createElement("button");
    newCheck.setAttribute("id", "check");
    con.appendChild(newCheck);
}

function makeList(){
    const newDiv = document.createElement("div");
    newDiv.innerHTML = input.value;
    input.value = "";
    newDiv.setAttribute("id", "list");
    con.appendChild(newDiv);
}

function makeDelete(){
    const newDelete = document.createElement("button");
    newDelete.setAttribute("id", "delete");
    con.appendChild(newDelete);
}

function makeTodo (){
    makeCheck();
    makeDelete();
    makeList();
}

input.addEventListener("keydown", function(e){
    if (input.value !== "" && e.keyCode == 13){
        makeTodo();
    }
});

add.addEventListener("click", function(){
    if (input.value !== ""){
        makeTodo();
    }
});

checkIcon.addEventListener("click", function(){

})