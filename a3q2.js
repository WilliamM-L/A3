var store = [];
var regExp = new RegExp("^[a-z]\\w*$");
function validateVariable(){
    var input = document.getElementById("text");
    var potentialVar =input.value;
    if (regExp.test(potentialVar)){
        input.className = "";
        return true;
    } else{
        input.className = "wrong";
        return false;
    }
}
function addVariable() {
    var toAdd = document.createElement("li");
    var potentialVar = document.getElementById("text").value;
    var text;

    var ul = document.getElementById("ul");
    if (validateVariable() && !contains(potentialVar)){
        store.push(potentialVar);
        text = document.createTextNode(potentialVar);
        toAdd.appendChild(text);
        ul.appendChild(toAdd);
    }
}
function contains(someVar){
    for (item in store) {
        if (store[item] === someVar){
            return true;
        }
    }
    return false;
}