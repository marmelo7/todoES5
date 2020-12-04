//es6+
const input = document.querySelector("#input");
const con = document.querySelector("#container");
const add = document.querySelector("#add");

const checked = (e) => {
    const self = e.target;
    const text = self.nextSibling.nextSibling.style;
    
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

const deleted = (e) => {
    e.target.previousSibling.remove();
    e.target.nextSibling.remove();
    e.target.remove();
}

const makeCheck = () => {
    const newCheck = document.createElement("button");
    newCheck.setAttribute("id", "check");
    newCheck.addEventListener("click", checked);
    con.appendChild(newCheck);
}

const makeContent = () => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = input.value;
    input.value = "";
    newDiv.setAttribute("id", "content");
    con.appendChild(newDiv);
}

const makeDelete = () => {
    const newDelete = document.createElement("button");
    newDelete.setAttribute("id", "delete");
    newDelete.addEventListener("click", deleted);
    con.appendChild(newDelete);
}

const makeTodo = () => {
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
