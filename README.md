# Technical Test

This test's objective is to develop a small application where a user is able to fill an appointment form based on the desired service. As a rule fo thumb, you should focus on:
1. **Basic functionality and fulfilling the base requirements first**. Focusing on bonuses and styling should come after you have an operational base application.
2. **Structuring your code the same way you would an a more complex application**. This is a straight forward situation, but we will evaluate how you structure you code and components for reuseability and extensibility. 
3. **Leaving comments and TODOs where you make assumptions or are take shortcuts**. It is okay due to the nature of the test to not always go all in on every aspect of the code, but it is important for you to communicate that you know what could be done better or differently in a real-life situation.

## Task: Appointment Form

![](https://user-images.githubusercontent.com/31007761/114183240-761c6c00-9911-11eb-8b9a-fc7b3b8ca04b.png)

> _**Above is an example of the appointment form, it does not have to look like this**_

### Base Feature requirements:

- Allow the user to select a service.
- The user must select one service before the rest of the form is shown.
- Depending on the service selected, show a custom form to the user so they can enter their details.
- When the user submits the form, log the field values to the console (this should also include the selected service value).
- After the form has been submitted, reset the form so that the user can make a new appointment request.

Here is the _tricky part_. Depending on the service selected, different input and labels will need to be shown in the form.

#### Data Fetching

Services: `data/services.json`
contains all the services a user can select.

Form: `data/form.json` 
describes the form constructions that are possible. When a user selects a `service`, you will need to look for the right form description containing the `service` in it's property `services` and show the right title and inputs (with the right type and label) for the user to fill out. The form containing `*` in its services is used if no other form description contains the service the user selected.

### Bonuses

1. Instead of using the local `json` files, fetch the data using Next.js api routes.

2. Implement CRUD endpoints for the Services. JSON files can be used to seed data in memory at server startup, and user should be able to dynamically add and remove services.

3. Add routing to different routes that displays the form with the selected service. For example, `/bone-scan` will show your form with "Bone scan" selected as the requested service.

4. Make sure that form values are not lost on page refresh or navigation. This should help the user perserve their progress in filling the form.

5. Implement endpoint that will handle the form submission. This can save the form value into a server-side memory and can show the user the requests that they've previously submitted.

6. Impress us! If there is anything you'd like to add to showcase your skills, go for it!

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

### Testing

This project uses `vitest` for unit tests. To run the vitest watcher, run `npm run test`.
