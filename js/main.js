let prise = Number(prompt("Введите цену"))
let cash = Number(prompt("Введите количество денег"))
// alert(prise + "_________" + cash)

if (cash == prise) {
    alert("Покупка совершена");
} else {
    if (cash > prise) {
        alert("Покупка совершена. Сдача " + (cash - prise) + " р.");
    } else {
        alert("Для покупки не хватает " + (prise - cash) + " р");
    }
}