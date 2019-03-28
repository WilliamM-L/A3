var dom;
function getElementAmpersandPipe(){
    dom = document.getElementById("field").value;
    addEventListener("blur", convertAmpersandPipe(), false)
}
function convertAmpersandPipe() {
    var toReplace = dom.replace(/&/g, " and "); //Use the regex and global mod so it replaces all occurrences
    toReplace = toReplace.replace(/\|/g, " or "); // in regEx, | is a special character, use backslash
    document.getElementById("result").value = toReplace;
}
window.addEventListener("load",getElementAmpersandPipe, false);