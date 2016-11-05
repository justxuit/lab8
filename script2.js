(function (){
//////manual page refresh
clearButton.onclick =  resetPage;

function resetPage(){
	window.location.reload();
};


//////global
var shoppingList = [];

//////print user input on click
submitButton.onclick = addToList;

function addToList() {
	var userItem = document.getElementById("newItem").value;
	var userPrice = parseFloat(document.getElementById("newPrice").value);

	if (isNaN(userPrice)) {
		alert("Please enter a valid number for price.");
	}
  else {
    shoppingList.push(
		{name: userItem,
		price: userPrice});

//print grocery items
	var addedItem = document.createElement("div");
	addedItem.innerHTML = userItem;
	document.getElementById("groceryList").appendChild(addedItem);

//print grocery prices
  var addedPrice = document.createElement("div");
  addedPrice.innerHTML = "$" + userPrice.toFixed(2);
  document.getElementById("groceryPrice").appendChild(addedPrice);
//////print user input END


//////total
//calculate total
	var total = 0;

  shoppingList.forEach(function(itemDetails){
    total += itemDetails.price;
  });

//print total
	document.getElementById("totalBox").innerHTML = "Your total is: $" + total.toFixed(2);
	};
};
//////total END

}());
