var CarLot = (function(addEvents) {
	var userInput = document.getElementById("large-input");
	var selectedCard;

// Augment the original object with another method
  addEvents.activateEvents = function() {
  	var carCard = document.getElementsByClassName("car-card");
	for (var i = 0; i < carCard.length; i++) {
		carCard[i].addEventListener("click", function(event) {
			for (var j = 0; j < carCard.length; j++) {
				// Resets the border thickness and background color for each car element back to the original values on selection of another card.
				CarLot.resetCards(carCard[j]);
			}
			// Need to find a shorter way to work up through DOM to a specified className
			if (event.target.className === "car-card") {
				CarLot.editText(this, "#4B342B");
				selectedCard = this;
			}
			else if (event.target.parentElement.className === "car-card") {
				CarLot.editText(this, "#4B342B");
				selectedCard = this;
			}
			else if (event.target.parentElement.parentElement.className === "car-card") {
				CarLot.editText(this, "#4B342B");
				selectedCard = this;
			}
			else if (event.target.parentElement.parentElement.parentElement.className === "car-card") {
				CarLot.editText(this, "#4B342B");
				selectedCard = this;
			}
			else if (event.target.parentElement.parentElement.parentElement.parentElement.className === "car-card") {
				CarLot.editText(this, "#4B342B");
				selectedCard = this;
			}
			else if (event.target.parentElement.parentElement.parentElement.parentElement.parentElement.className === "car-card") {
				CarLot.editText(this, "#4B342B");
				selectedCard = this;
			}
			else if (event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.className === "car-card") {
				CarLot.editText(this, "#4B342B");
				selectedCard = this;
			}
			else if (event.target.parentElement.parentElement.parentElement.parentElement.parentElement.className === "car-card") {
				CarLot.editText(this, "#4B342B");
				selectedCard = this;
			}
		})
	}
	// Event listener binding user input in textarea to card description
	userInput.addEventListener("keyup", function() {
		if (event.keyCode !== 13) {
		selectedCard.children["0"].childNodes["0"].children["0"].children[3].children["0"].childNodes["0"].textContent = userInput.value;
		} 
		// Resets the border thickness and background color for each car element back to the original values on enter keypress.
		else {
			CarLot.resetCards(selectedCard)
		}
		});


};
//   // Return the new, augmented object with the new method on it
  return addEvents;
})(CarLot || {});



