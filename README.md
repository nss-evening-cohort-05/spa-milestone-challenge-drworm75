![Title Banner](https://raw.githubusercontent.com/nss-evening-cohort-05/spa-milestone-challenge-drworm75/master/images/used-cars-readme.png)

### Instructions

You operate a used car lot, and need to have an application where you can update the description and availability of each car in your inventory. You are going to using the Bootstrap grid to lay out your HTML structure. 

### Behavior

1. Create an array of cars in the `inventory.json` file with at least three cars.
1. When your page first loads, use an XHR to load the contents of the JSON file, and parse them into a native JavaScript object.
1. Loop over your array of cars and build up an HTML string to build a card for each car. 
1. Use Bootstrap to create rows. Each row should contain 3 columns. Make sure you have a parent element with a class of `container`.
1. Put a standard Bootstrap navbar element at the top of your page.
1. Put a text input field in the navigation bar.
1. Display all properties of the car in the DOM.
1. Each car card element has a CSS class which adds a black border around it.
1. When you click on one of the car elements, change the width of the border to a higher value, and change the background color to any other color of your choosing.
1. On click of the car element, clear the value of the text input in the navbar, and put the cursor in the text input.
1. When you start typing into the navbar's text input, the **description**, and only that property, of the currently selected car should be bound to what you are typing in and match it exactly.

### Technical Requirements

1. Create one global variable (e.g. `CarLot`) and use the IIFE pattern to augment it two times in separate JavaScript files.
1. The first IIFE should add a public function (e.g. `loadInventory`) that loads the `inventory.json` file and stores the inventory in a private variable. It should also expose a public getter to read the array of cars (e.g. `getInventory`).
1. The second IIFE should augment the original one with a function that creates all of the `eventHandlers` that you need for the application. Name the function `activateEvents`.
1. The final IIFE should augment the object with two more functions. One function resets the border thickness and background color for each car element back to the original values. The other function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments.
    1. A car DOM element that was clicked on.
    1. A color name of your choice (see behavior requirement 5 above).
1. Have a complete Readme 


### Final Result:
> Click on a card, and the input field becomes focused, with the current card description in the text box. The text can be manipulated in real time.  Hit the enter key, and the field becomes blank, and the card is deselected.

![Page Screenshot](https://raw.githubusercontent.com/nss-evening-cohort-05/spa-milestone-challenge-drworm75/master/images/cars-screenshot.png)

### Takehome Lesson:

> I wrote so much code to get to the correct ancestor element.  I'd love to find a way to shorten that up. 

> I was able to use "this" correctly in the assignment to indicate a particular element.  It's the first time I've used it without being led to it by instructions, and it felt good to see it work!


### How to run (Node must be installed on your machine):
```
https://github.com/nss-evening-cohort-05/spa-milestone-challenge-drworm75.git
cd nss-evening-cohort-05/spa-milestone-challenge-drworm75.git
npm install http-server -g
http-server -p 8080
```

This will show in your browser at:
`http://localhost:8080`

### Contributors:
[Dwayne Pate](https://github.com/drworm75)