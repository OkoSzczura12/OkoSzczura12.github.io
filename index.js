let euro = 4.90;
let dolar = 5.0352;
let funt = 5.5295;

let przeliczona;
const naZlotyzEuro = () => {
    let euro_value = document.forms["exchange_rate"]["euro_value"].value;
    let euro_result = document.getElementById("euro_result");
    if (euro_value == "") euro_result.innerHTML = "";
    else {
        przeliczona = parseFloat(euro_value) * euro; 
        if (isNaN(przeliczona)) euro_result.innerHTML = "Błędny input!";
        else euro_result.innerHTML = "Kwota(ZŁ): " + przeliczona.toFixed(2) + "ZŁ";
        
    }
}
const zZlotynaEuro = () => {
    let zloty_value = document.forms["exchange_rate"]["zloty_value"].value;
    let zloty_result = document.getElementById("zloty_result");
    if (zloty_value == "") zloty_result.innerHTML = "";
    else {
        przeliczona = parseFloat(zloty_value) / euro; 
        if (isNaN(przeliczona)) zloty_result.innerHTML = "Błędny input!";
        else zloty_result.innerHTML ="Kwota(EURO): " +  przeliczona.toFixed(2) + "€";
        
    }
}
const zZlotynaFunt = () => {
    let zloty_value = document.forms["exchange_rate"]["zloty_value"].value;
    let zloty_result = document.getElementById("zloty_result");
    if (zloty_value == "") zloty_result.innerHTML = "";
    else {
        przeliczona = parseFloat(zloty_value) / funt; 
        if (isNaN(przeliczona)) zloty_result.innerHTML = "Błędny input!";
        else zloty_result.innerHTML ="Kwota(GBP): " +  przeliczona.toFixed(2) + "€";
        
    }
}
const naZlotyzFunt = () => {
    let funt_value = document.forms["exchange_rate"]["funt_value"].value;
    let funt_result = document.getElementById("funt_result");
    if (funt_value == "") funt_result.innerHTML = "";
    else {
        przeliczona = parseFloat(funt_value) * euro; 
        if (isNaN(przeliczona)) funt_result.innerHTML = "Błędny input!";
        else funt_result.innerHTML ="Kwota(ZŁ): " +  przeliczona.toFixed(2) + "ZŁ";
        
    }
}
const zZlotynaDolar = () => {
    let zloty_value = document.forms["exchange_rate"]["zloty_value"].value;
    let zloty_result = document.getElementById("zloty_result");
    if (zloty_value == "") zloty_result.innerHTML = "";
    else {
        przeliczona = parseFloat(zloty_value) / dolar; 
        if (isNaN(przeliczona)) zloty_result.innerHTML = "Błędny input!";
        else zloty_result.innerHTML ="Kwota(USD): " +  przeliczona.toFixed(2) + "$";
        
    }
}
const naZlotyzDolar = () => {
    let dolar_value = document.forms["exchange_rate"]["dolar_value"].value;
    let dolar_result = document.getElementById("dolar_result");
    if (dolar_value == "") dolar_result.innerHTML = "";
    else {
        przeliczona = parseFloat(dolar_value) * dolar; 
        if (isNaN(przeliczona)) dolar_result.innerHTML = "Błędny input!";
        else dolar_result.innerHTML ="Kwota(ZŁ): " +  przeliczona.toFixed(2) + "ZŁ";
    }

}


