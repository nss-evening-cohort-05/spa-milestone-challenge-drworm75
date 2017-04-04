var CarLot = (function(cardSetters,colorChange) {
	var userInput = document.getElementById("large-input");
  	
	cardSetters.editText = function(selectedCard, colorChange) {
		console.log(window.String());
		selectedCard.classList.add("selected");
		selectedCard.style.backgroundColor = colorChange;
		userInput.value = selectedCard.children["0"].childNodes["0"].children["0"].children[3].children["0"].childNodes["0"].textContent;
		userInput.focus();				
	};

	cardSetters.resetCards = function(selectedCard) {
		selectedCard.removeAttribute("style");
		userInput.blur();
		userInput.value = "";
	    selectedCard.classList.remove("selected");
	};
	
  return cardSetters;
})(CarLot || {});