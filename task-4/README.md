# Task 4: Task Form Inputs Validation

## Description

Implement a form that captures the fields required to create a task.


> #### Tools
> - [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
> - [Bootstrap](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
> - [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
      
    
## Walkthrough

### Step 1: Add a task form

In this step, we'll add a form to create a new task

1. Add a new form inside the `index.html` page with all fields required to create a new task:
* Name
* Description
* AssignedTo 
* DueDate
* Status
2. Create a sample Card Layout that contains the information of your model(post or product)

### Step 2: Add JavaScript to your HTML page

1. Create a JavaScript file named `ModelController.js` and include it into your HTML page.
2. Define a JSON representation of your Product or Posts object and create a list with 10 sample items.
3. Define a data structure variable to store the items.

> #### Useful Resources for this step
> - [Basic Data Structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/use-an-array-to-store-a-collection-of-data)

### Step 3: Implementing your JavaScript DOM interaction functions

1. Implement the function `addItem(item)` -> adds a new card layout to the div element where you display the list of items (product or post)
2. Implement the function `removeItem(itemId)` -> removes the item from the div element and the data structure if the item exists with the given ID
3. Implement the function `clear()` -> removes all items from the div element list and items data structure
4. Commit and push your changes to your project repository.
    
> #### Useful Resources for this step
> - [HTML DOM Methods](https://www.w3schools.com/js/js_htmldom_methods.asp)


> #### Test Your Code!
> Now is a good chance to test your code, open your `items.html` page and verify that the items are loaded.
> Once your `ModelController.js` is loaded you should be able to test your functions using the console.

## Results

We've now create a basic component that allows you to interact with the DOM and add items programmatically to a list.

## Example

Stuck? Check out the provided example in the [example/](example/) folder!
