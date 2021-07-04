var resultdisplay = $("#result");




function numberfunctio(number) {
    var preasentvalue = resultdisplay.val();
    resultdisplay.val(preasentvalue + number);
}


function clearfunction() {
    resultdisplay.val('')
}

function calculet() {
    var value = resultdisplay.val()
    var result = eval(value)
    resultdisplay.val(result)

}
function delletelestnumber() {
    var value2 = resultdisplay.val();
    if (resultdisplay != "") {
        resultdisplay.val(value2.slice(0, - 1));
    }
}
