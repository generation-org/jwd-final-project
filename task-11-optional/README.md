# Task 11: React and Beyond

## Description

After a long journey through the course you now have the chance to learn on your own and decide which paths to take! This task is here to help you jump into a new technology and realise it's not so different after all. There won't be as much guidance in this step so try it out with your friends and peers, learn as a community and help each other grow! This is just a quick example and I imagine that you will be able to create much nicer apps than I do, now is your chance to refactor and create something more unique.

## Prerequisites and Useful Resources

- [React Codecademy Course](https://www.codecademy.com/learn/react-101)
- [React Website](https://reactjs.org/)
- [MDN's React](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
- [Scrimba's React Course](https://scrimba.com/learn/learnreact) 

## Walkthrough

### Step 1: Installing React

1. `npx create-react-app task-app`
2. Clean up the files and folders, figure out what you need to keep or change. 
3. Install Bootstrap with npm 
4. Link Bootstrap in your `index.js` using `import 'bootstrap/dist/css/bootstrap.min.css';`


### Step 2: Bringing across your old code

1. Add in your old `taskManager.js` and import into `app.js`
2. Declare taskManager again just like you did in the old `index.js`
3. Paste your HTML into the return statement of the `app.js` 
4. Rewrite the `class` and `for` statements to use JSX *Hint* `className` `htmlFor`
5. Now is a great chance to brush up the differences between JSX and JS 

### Step 3: Changing our eventHandler's 

1. Create a `handleSubmit` function, for now it can be blank.

```
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('hi');
  }
```  
2. Add a `submit` eventHandler for the form in the JSX return statement. This should call the `handleSubmit` function.

3. Import `useState` from `'react'`
4. Now is a great time to read up on the useState hook! Go ahead and declare all the variables that we will get from the user input, but, using the useState hook. 
  `const [validateName, setValidateName] = useState("");`
   You can copy and paste the names from your old `index.js` file if it makes it easier for the validation. 
5. Target the correct data we want to send to our state, and create your eventListeners directly in JSX `onChange={(element) => setValidateName(element.target.value)}`
6. It might be useful to set the `value=` of the input to be the variable we declared above. This way it can be easily changed!  `value={validateName}`

#### Test Your Code!
> Now is a good chance to test your code, follow the steps below:
> 1. Use `npm start` to run the React App.
> 2. `console.log()` the results of the `handleSubmit` function. 
> **Expected Result**
> It should log the input you type into the field once you click submit


### Step 4: Validate the inputs

1. Change your class validations, I used another separate hook to make it easier to see what's happening. Have a look at the [example/](example/) folder if you need guidance.  
2. Only display the invalid case if the input is invalid! 
3. Write a separate `clearFormFields` function that will set the state back to default (and thus clear the form).
4. Copy across the code which will add a task once the validation is complete. 


### Step 5: Render the tasks

1. Are you wondering why React is any different to JS? Now is a great chance to research that! Create a hook for the tasks, so we can set the task list in the state. That way if the state changes anything associated with the state will update.
2. The `createTaskHtml` and `render()` functions are no longer needed, instead react does it for us, so let's .map() our taskmanager.tasks straight into our `<ul> </ul>`
```
<ul className="list-group" id="task-list">
            {tasks.map((task) => {
              return (
                <li></li>
              );
            })}
</ul>
```
3. Add in the template card that was in the `createTaskHtml` function.
4. Rewrite the HTML to conform to the new JSX syntax. 
5. Assign a key to the template. 


### Step 6: Final logic

1. Import `useEffect` from `'react'`, you can add it in right next to `useState`.
2. Change the `delete` and `done` buttons to use the unique key assigned in step 5, instead of eventListeners. 
3. Call the `save()` method after the change in the `delete` and `done` buttons. 
4. Create a new useEffect hook that will set the state of `tasks` to `taskManager.tasks`. To determine when this `useEffect` hook is called, we can change the arguments in the empty array. But for now, if we leave it blank it will only run at startup to load the tasks. 

```js
  useEffect(() => {
    setTasks(taskManager.tasks);
  }, []);
```
4. Call the `setTasks(taskManager.tasks);` function when the tasks change, and React will then update the display to match the new task list! 
5. Use the `load()` function where necessary to get the local storage. 

### Step 7: Above and beyond

You may realise that there are ways to make the app more efficient, easier to read, or just better overall. Don't stop here! 
1. Convert your `app.js` modules to use smaller components.
2. Try out some react libraries like [Redux](https://react-redux.js.org/)
3. Stop using so much state! Refactor your code to use props instead. 
4. Update all the meta information, make it a PWA.
5. Include testing for the React App. 
> #### Test Your Code!
> Now is a good chance to test your code, open your `index.html` page and fill in **wrong** data on the form and check if the matching error is shown.
> When the form fields are correct, no error message should be displayed.

## Results

We've now created the app in react, try using your app and see if you notice any differences!
Upload it to a hosting site like [Netlify](www.netlify.com) and add the completed project to your portfolio!

## Example

Stuck? Check out the provided example in the [example/](example/) folder!

[Here](https://jwd-final-project-react.netlify.app/) is a finished version to look at.

## Assessment

This will **NOT** be assessed, it is an optional extra.  
