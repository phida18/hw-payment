var pay = 0;
var bat = 0;
function click1(){
    var price = document.getElementById("price").value; 
    var Productprice = document.getElementById("Productprice").value;
    pay = price * Productprice;
    bat += pay;
    console.log(bat);
    document.getElementById("pay").value = bat;
    console.log(pay);
    price = document.getElementById("price").value = "";
    Productprice = document.getElementById("Productprice").value = "";
}
function click2(){
    var payment = document.getElementById("payment").value;
    var change = payment - bat;
    document.getElementById("change").value = change;
    console.log(change  );
    payment = document.getElementById("payment").value ="";
}
