var form;
function calculateTotal() {
    form = document.getElementById("frm");
    var lily = parseInt(document.getElementById("lily").value);
    var rose = parseInt(document.getElementById("rose").value);
    var scalla = parseInt(document.getElementById("scalla").value);
    var orchid = parseInt(document.getElementById("orchid").value);
    var daisy = parseInt(document.getElementById("daisy").value);
    var delivery = document.getElementsByName("delivery");
    var deliveryCost=0;
    if (delivery[0].checked){
        deliveryCost = 2;
    } else if (delivery[1].checked){
        deliveryCost = 6;
    }

    //Checking if all the inputs have a number in it
    if (deliveryCost!==0){
        if (isNaN(lily)||isNaN(rose)||isNaN(scalla)||isNaN(orchid)||isNaN(daisy)){
            alert("Some input fields were left empty!");
        } else {
            var total = lily*7.5 + rose*5.5 + scalla*4 + orchid*8 + daisy*7 + deliveryCost;
            toInsert("Red Roses (units = " + rose + "): $" + rose*5.5);
            toInsert("Yellow Lilly (units = " + lily + "): $" + lily*7.5);
            toInsert("White Mini Calla (units = " + scalla + "): $" + scalla*4);
            toInsert("Pink Orchid (units = " + orchid + "): $" + orchid*8);
            toInsert("Orange Daisy (units = " + daisy + "): $" + daisy*7);
            toInsert("Delivery: $" + deliveryCost);
            form.innerHTML += "<br/>";
            toInsert("Final Total: $" + total);
        }
    } else {
        alert("You must choose a delivery method!");
    }
}

function toInsert(s) {
    let text = document.createTextNode(s);
    let toInsert = document.createElement("strong");
    toInsert.appendChild(text);
    form.appendChild(toInsert);
    form.innerHTML += "<br/>";

}