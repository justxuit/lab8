var shoppingList = [];

/*
ADD ITEM FORM BEGIN
*/

//print user input
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

	var addedItem = document.createElement("div");
	addedItem.innerHTML = userItem;
	document.getElementById("groceryList").appendChild(addedItem);

  var addedPrice = document.createElement("div");
  addedPrice.innerHTML = "$" + userPrice.toFixed(2);
  document.getElementById("groceryPrice").appendChild(addedPrice);
//print user input END


//total
  var total = 0;

  shoppingList.forEach(function(itemDetails){
    total += itemDetails.price;
  });

	document.getElementById("totalBox").innerHTML = "Your total is: $" + total.toFixed(2);
	};
};
