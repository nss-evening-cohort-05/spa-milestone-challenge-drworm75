var cardContainer = document.getElementById("card-container");

// build cards with car info
function populatePage (inventory) {		
		// create cardBuilder
		var cardBuilder = "";
		cardBuilder += `<div class="row">`
	// Loop over the inventory and populate the page	
	for (var i = 0; i < inventory.length; i++) {
		cardBuilder += `<div class="col-md-4">`
		cardBuilder += `<div class="car-card" id=${i}>`
		cardBuilder += `<div class="table-responsive">`
		cardBuilder += `<table class="table">`
		cardBuilder += `<tr>`
		cardBuilder += `<th colspan="2"><h1>${inventory[i].year} ${inventory[i].make}<br>${inventory[i].model}`
		cardBuilder += `</th></tr>`
		cardBuilder += `<tr>`
		cardBuilder += `<td><h3>Price: $<span class="price">${inventory[i].price}</h3></td>`
		cardBuilder += `</tr>`
		cardBuilder += `<tr>`
		cardBuilder += `<td><img src ="${inventory[i].photo}" class="img-responsive"></td>`
		cardBuilder += `</tr>`
		cardBuilder += `<tr>`
		cardBuilder += `<td><h3>${inventory[i].description}</h3></td>`
		cardBuilder += `</tr>`
		cardBuilder += `</table>`
		cardBuilder += `</div></div></div>`
		//execute this code after every third loop of the inventory array to make 3 cards per row
		if (((i + 1) % 3) === 0) {
			cardBuilder += `</div>`
			//write cards to DOM
			cardContainer.innerHTML += cardBuilder;
			//clear cardBuilder and get ready to make next row of cards
			cardBuilder = "";
			cardBuilder += `<div class="row">`			
		}
	}
  
  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();