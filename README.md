# Technical Test

For this test, you are given the task of developing a feature for one of our products.

## Task: Appointment Form

Below is an example of the appointment form, it does not have to look like this:
![](https://user-images.githubusercontent.com/31007761/114183240-761c6c00-9911-11eb-8b9a-fc7b3b8ca04b.png)

#### Feature requirements:

- Allow the user to select a service.
- The user must select one service before the rest of the form is shown.
- Depending on the service selected, show a custom form to the user so they can enter their details.
- When the user submits the form, log the field values to the console (this should also include the selected service value).
- After the form has been submitted, reset the form so that the user can make a new appointment request.

Here is the _tricky part_. Depending on the service selected, different input and labels will need to be shown in the form.

#### Data Fetching

Services: `data/services.json`
Form: `data/form.json`

`Services`: contains all the services a user can select.

`Form`: describes the form constructions that are possible. When a user selects a `service`, you will need to look for the right form description containing the `service` in it's property `services` and show the right title and inputs (with the right type and label) for the user to fill out.

The form containing `*` in its services is used if no other form description contains the service the user selected.

#### Bonus

1. Instead of using the local `json` files, fetch the data using Next.js api routes.

2. Implement CRUD endpoints for the Services. JSON files can be used to seed data in memory at server startup, and user should be able to dynamically add and remove services.

3. Add field validation to prevent the user from submitting invalid information:

- Email: must be a valid email
- Phone: must only contain numbers
- Text: must not be an empty string `""`

## Getting Started

We have setup a basic Next.js app for you to build on. To get started, run the following commands from your terminal:

```
npm install
npm run dev
```

The app will run on http://localhost:3000 and any changes in your code will be reflected there without restarting your server.

Styles: in styles.scss
Entry point: pages/index.js
Syntax: ES6

---

## Part 2 - Questions

#### Q1: What is the result?

`true + false > 2 + true`

1. `true`
2. `false`
3. `TypeError`
4. `NaN`

#### Q2: What is the result?

`"1" - -"1"`

1. `0`
2. `2`
3. `11`
4. `"11"`

#### Q3: What is the result?

`new Array(5).toString()`

1. `",,,,"`
2. `[]`
3. `"[]"`

#### Q4: What is printed in the console?

```
  var arr = ["foo", "bar"]
  arr.length = 0;
  arr.push("bin")
  console.log(arr)
```

1. `['foo', 'bar']`
2. `['foo', 'bar', 'bin']`
3. `['bin', 'foo', 'bar']`
4. `['bin']`

#### Q5: What is the result?

`10 > 9 > 8 === true`

1. `true`
2. `false`

#### Q6: What is logged to the console?

```
function bar() {
 return foo;
 foo = 10;
 function foo() {}
 var foo = ‘11’;
}
console.log(typeof bar());
```

1. `number`
2. `function`
3. `undefined`
4. `string`
5. `Error`

---
