var CarLot = (function () {
  
  return {
  	//Request for JSON info
	loadInventory: function (callback) {
		var inventoryLoader = new XMLHttpRequest();
		inventoryLoader.addEventListener("load", function () {
			// Takes cars from JSON and creates array named inventory
			inventory = JSON.parse(this.responseText).cars;
			//Call to populate page after inventory array is created
			callback(inventory);
		});	
		inventoryLoader.open("GET", "inventory.JSON");
		inventoryLoader.send();
	},
	getInventory: function() {
		return inventory;
	}
  };
})();
