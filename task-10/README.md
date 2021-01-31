# Task 10: Test TaskManager

## Description

In our final task, we'll test our `TaskManager` class using Mocha.

## Walkthrough

### Step 1: Add Mocha to the project

> #### Useful Resources for this step
> - [Mocha - Getting Started](https://mochajs.org/#getting-started)

In this step, we'll add Mocha to our project.

1. Install Mocha as development dependency for your project:
    ```Javascript
      npm install --save-dev mocha
    ```
2. Create a new test directory and a test.js file to add your tests:
  - `mkdir test`
  - `code test/test.js `
3. Change the `package.json` scripts to represent our Mocha script:
```Javascript
"scripts": {
    "test": "mocha"
  },
 ```

### Step 2: Testing TaskManager Methods

> #### Useful Resources for this step
> - [Mocha - Getting Started](https://mochajs.org/#getting-started)

In this step, we'll test some of the methods that exist in our `TaskManager` class. These can all be completed with the Mocha testing framework, so no need to deal with Chai just yet!

1. Use what you have learnt on testing to unit test the following methods on the `TaskManager` class:
  - `addTask`
  - `deleteTask`
  - `getTaskById`
2. Add a test case that tests how the `TaskManager` is initialized, ie: the `constructor` is called when a `new TaskManager()` is initialized.

> #### Test Your Code!
> Now is a good chance to test your code:

> 1. Run your tests with `npm test`.

>  **Expected Result**
>  You should see the tests all pass, green! 

### Step 3: Testing TaskManager Methods - CHALLENGE (OPTIONAL)

> #### Useful Resources for this step
> - [Running Mocha in the Browser](https://mochajs.org/#running-mocha-in-the-browser)
> - [Chai](https://www.chaijs.com/)
> - [Chai Spies](https://www.chaijs.com/plugins/chai-spies/)
> - [jsdom](https://github.com/jsdom/jsdom)


In this step, we'll test the remaining methods on our `TaskManager` class. These are much more tricky than the previous methods. Take advantage of the packages out there for testing and mocha!

- `npm i -D chai`
- `npm i -D chai-spies`
- `npm i -D jsdom`

Chai is an *Assertion Library* so check out the documents on why we use it, mainly it makes it easier to read! But in this case we need a bit more than mocha currently offers! Such as spies and mocks. 

Make sure to adjust any examples you reference to fit your code.

Set up a [jsdom](https://github.com/jsdom/jsdom) environment so we can test our output. Nodejs doesn't really *create* a website for us to test, we have to simulate having a website there! It's a bit tricky so take your time to read over the documentation and check out the examples! 


1. Use what you have learnt on testing to unit test the following methods on the `TaskManager` class:
  - `render`
  - `save`
  - `load`

## Results

Run your test and make sure they all passed!

## Example

Stuck? Check out the provided example in the [/example](https://github.com/aar9nk/final-project-JWD4/tree/main/task-10/example) folder. This is using the chai assertion library, so it may be slightly different to the mocha assertions! Although the logic is still the same. 

## Assessment

This will be assessed as part of [Sprint 3](https://docs.google.com/spreadsheets/d/1X-LhsK5TaDvQZl-YS6XFxemVx3UhHdAY-vRcdR-rt9Q/edit#gid=1124211828) 
