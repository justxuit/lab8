//initial values
var item1={
  name: "apple",
  price: 1.49,
};

var item2={
  name: "pineapple",
  price: 4.99,
};

var item3={
  name: "pen",
  price: 5.99
};
//initial values END


var shoppingList=[item1, item2, item3];

var total=0;


//printed items
var listDiv = document.getElementById("groceryList");

shoppingList.forEach(function(itemDetails){
  var printedList = document.createElement("div");
  printedList.setAttribute("id", "items");
  printedList.innerHTML = itemDetails.name;
  listDiv.appendChild(printedList);
});
//printed items END


//printed prices
var priceDiv = document.getElementById("groceryPrice");

shoppingList.forEach(function(itemDetails){
  var printedList = document.createElement("div");
  printedList.setAttribute("id", "prices");
  printedList.innerHTML = "$" +itemDetails.price.toFixed(2);
  priceDiv.appendChild(printedList);
});
//printed prices END


//calculate total
shoppingList.givePrice = function(){
  var total = 0;
  shoppingList.forEach(function(totalSum){
    total += totalSum.price;
  });
  return total.toFixed(2);
};
//calculate total END


//print total
var totalDiv = document.getElementById("totalBox");

var printedTotal = document.createElement('div');
printedTotal.setAttribute("id", "total");

printedTotal.innerHTML = "Your total is: $" +shoppingList.givePrice();

totalDiv.appendChild(printedTotal);
//print total END


/*
//ADD TO LIST
function (addToList){

};

var plusButton = document.getElementById("submitButton");

plusButton.onclick = addToList();
*/
