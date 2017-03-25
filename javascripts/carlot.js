console.log("Lots of cars")
var CarLot = (function () {
  var inventory = [];

  return {
	loadInventory: function (callback) {
		var inventoryLoader = new XMLHttpRequest();
		inventoryLoader.addEventListener("load", function () {
			inventory = JSON.parse(this.responseText).cars;
			populatePage(inventory);
			console.log(inventory);
		});	
		inventoryLoader.open("GET", "inventory.JSON");
		inventoryLoader.send();
}
  };

})();
