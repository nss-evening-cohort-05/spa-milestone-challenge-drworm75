var CarLot = (function(addEvents) {
	var userInput = document.getElementById("large-input");
	var selectedCard;

//   // Augment the original object with another method
  addEvents.editText = function(selectedCard) {
		userInput.value = selectedCard.children["0"].childNodes["0"].children["0"].children[3].children["0"].childNodes["0"].textContent;
		userInput.focus();
	// 	if (event.keyCode !== 13) {
	// 		console.log(event);
	// selectedCard.children["0"].childNodes["0"].children["0"].children[3].children["0"].childNodes["0"].textContent = userInput.value;
	// 	} else {
	// 	userInput.blur();
	// 	userInput.value = "";
	//     selectedCard.remove("selected");
	// 	}
	// });
}

  addEvents.activateEvents = function() {
  	var carCard = document.getElementsByClassName("car-card");

	

	for (var i = 0; i < carCard.length; i++) {
		carCard[i].addEventListener("click", function(event) {
			for (var j = 0; j < carCard.length; j++) {
				carCard[j].classList.remove("selected");
			}
			if (event.target.className === "car-card") {
				this.classList.add("selected");
				CarLot.editText(this);
				selectedCard = this;
				console.log(selectedCard);
			}
			else if (event.target.parentElement.className === "car-card") {
				this.classList.add("selected");
				CarLot.editText(this);
				selectedCard = this;
				console.log(selectedCard);
			}
			else if (event.target.parentElement.parentElement.className === "car-card") {
				this.classList.add("selected");
				CarLot.editText(this);
				selectedCard = this;
				console.log(selectedCard);
			}
			else if (event.target.parentElement.parentElement.parentElement.className === "car-card") {
				this.classList.add("selected");
				CarLot.editText(this);
				selectedCard = this;
				console.log(selectedCard);
			}
			else if (event.target.parentElement.parentElement.parentElement.parentElement.className === "car-card") {
				this.classList.add("selected");
				CarLot.editText(this);
				selectedCard = this;
				console.log(selectedCard);
			}
			else if (event.target.parentElement.parentElement.parentElement.parentElement.parentElement.className === "car-card") {
				this.classList.add("selected");
				CarLot.editText(this);
				selectedCard = this;
				console.log(selectedCard);
			}
			else if (event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.className === "car-card") {
				this.classList.add("selected");
				CarLot.editText(this);
				selectedCard = this;
				console.log(selectedCard);
			}
			else if (event.target.parentElement.parentElement.parentElement.parentElement.parentElement.className === "car-card") {
				this.classList.add("selected");
				CarLot.editText(this);
				selectedCard = this;
				console.log(selectedCard);
			}
	})
	}
		userInput.addEventListener("keyup", function() {
			if (event.keyCode !== 13) {
			console.log(event);
			selectedCard.children["0"].childNodes["0"].children["0"].children[3].children["0"].childNodes["0"].textContent = userInput.value;
			} else {
			userInput.blur();
			userInput.value = "";
			console.log("selectedCard")
 		    selectedCard.classList.remove("selected");
			}
			});


};
//   // Return the new, augmented object with the new method on it
  return addEvents;
})(CarLot || {});



