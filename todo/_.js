var input = document.querySelector("#input");
var con = document.querySelector("#container");
var add = document.querySelector("#add");

function checked(e){
    var self = e.target;
    var text = self.nextSibling.nextSibling.style;

    if(self.style.background == "white"){
        self.style.background = "turquoise"; 
        text.color = "lightgray";
        text.textDecoration = "line-through";
        return;
    } else if (self.style.background = "turquoise"){
        self.style.background = "white"; 
        text.color = "black";
        text.textDecoration = "none";
        return;
    }
}

function deleted(e){
    e.target.previousSibling.remove();
    e.target.nextSibling.remove();
    e.target.remove();
}

function makeCheck(){
    var newCheck = document.createElement("button");
    newCheck.setAttribute("id", "check");
    newCheck.addEventListener("click", checked);
    con.appendChild(newCheck);
}

function makeContent(){
    var newDiv = document.createElement("div");
    newDiv.innerHTML = input.value;
    input.value = "";
    newDiv.setAttribute("id", "content");
    con.appendChild(newDiv);
}

function makeDelete(){
    var newDelete = document.createElement("button");
    newDelete.setAttribute("id", "delete");
    newDelete.addEventListener("click", deleted);
    con.appendChild(newDelete);
}

function makeTodo (){
    makeCheck();
    makeDelete();
    makeContent();
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
