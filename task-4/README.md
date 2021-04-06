# Task 4: Task Form Inputs Validation

## Description

Implement a form that captures the fields required to create a task.


> #### Tools
> - [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
> - [Bootstrap](https://getbootstrap.com/)
> - [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
      
    
## Walkthrough

### Step 1: Implement a JavaScript function to validate your form fields

1. Create a JavaScript file named `index.js` and include it into your `index.html` page.
2. Implement a JavaScript function named `validFormFieldInput(data)`
3. Add an ID attribute to each form field and implement the code needed to retrieve the each form field value using the following method:
      ```javascript
       const newTaskNameInput = document.querySelector('#newTaskNameInput');
      ```
4. Log your field inputs to verify that you are getting the data you need to validate.
      ```javascript
       const newTaskNameInput = document.querySelector('#newTaskNameInput');
       console.log("name:  " + newTaskNameInput.value);
      ```
> #### Useful Resources for this step
> - [Forms](https://getbootstrap.com/docs/4.5/components/forms/)
> - [Query selector documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

### Step 2: Validation logic

1. Check if the Task Name input value is more than 5 characters.
2. Check if the Task Description input value is more than 5 characters.
3. Check if the Assigned To value is more than 5 characters.
4. Check if the Task Due Date input value is not empty.
5. Check if the Task Status input value is not empty.

### Step 3: Showing errors to users

1. Try out the example over in [Bootstrap form validation (You might have to scroll down to "validation")](https://getbootstrap.com/docs/4.5/components/forms/#validation/) and check out their valid and invalid messages.
2. Add `<div class="valid-feedback">` and `<div class="invalid-feedback">` in each of your form inputs with a message to the user.
3. Depending on if the input is valid or invalid, we can add or remove the class to the corrosponding input. We can use:
 `newTaskNameInput.classList.remove('is-valid');` together with  
`newTaskNameInput.classList.add('is-invalid');`  and Bootstrap will take care of showing an invalid input message. Try the opposite logic for a valid message!  
 

### (OPTIONAL) Stretch Goal - Valid date in the future

Stretch Goals are optional steps to attempt once your group has completed **all** previous steps. Stretch Goals require out-of-the-box thinking and do not include a step-by-step walkthrough. It's a challenge, good luck!

Should a date in the past be a valid input? Check out some [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now) on how JavaScript handles dates.



> #### Useful Resources for these steps
> - [Bootstrap form validation](https://getbootstrap.com/docs/4.5/components/forms/#validation)
> - [Document.querySelector() documentation](https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp)


> #### Test Your Code!
> Now is a good chance to test your code, open your `index.html` page and fill in **wrong** data on the form and check if the matching error is shown.
> When the form fields are correct, no error message should be displayed.

## Results

We've now created the task form, adding in JavaScript validations to make sure the user submits correct data!

## Example

Stuck? Check out the provided example in the [example/](example/) folder!

## Assessment

This will be assessed as part of [Sprint 2](https://docs.google.com/spreadsheets/d/1X-LhsK5TaDvQZl-YS6XFxemVx3UhHdAY-vRcdR-rt9Q/edit#gid=680203692) 
