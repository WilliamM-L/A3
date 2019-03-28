function search() {
    var priceRange = document.getElementById("cost").value;
    var downTown = document.getElementById("Downtown").checked;
    if (priceRange == "<50" ||priceRange == "<100" && downTown){
        document.getElementById("advice").style.visibility = 'visible';
    } else {
        document.getElementById("advice").style.visibility = 'hidden';
    }
}
// In the first assignment, the price options are <50$, <100$, etc, hence if either <50 or <100 are selected, the fieldset appears