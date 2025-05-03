# Technical Test

This test's objective is to develop a small application where a user is able to fill an appointment form based on the desired service. As a rule fo thumb, you should focus on:
1. **Basic functionality and fulfilling the base requirements first**. Focusing on bonuses and styling should come after you have an operational base application.
2. **Structuring your code the same way you would an a more complex application**. This is a straight forward situation, but we will evaluate how you structure you code and components for reuseability and extensibility. 
3. **Leaving comments and TODOs where you make assumptions or are take shortcuts**. It is okay due to the nature of the test to not always go all in on every aspect of the code, but it is important for you to communicate that you know what could be done better or differently in a real-life situation.

## Task: Appointment Form

![](https://user-images.githubusercontent.com/31007761/114183240-761c6c00-9911-11eb-8b9a-fc7b3b8ca04b.png)

> _**Above is an example of the appointment form, it does not have to look like this**_

### Base requirements:

#### Frontend

- Allow the user to select a service.
- The user must select one service before the rest of the form is shown.
- Depending on the service selected, show the corresponding form to the user so they can enter their details.
- When the user submits the form, log the field values to the console (this should also include the selected service value).
- After the form has been submitted, reset the form so that the user can make a new appointment request.

#### Storage

- Modify the `docker-compose.yml` to add PostgreSQL storage to your application.
- Run the `./script/seed.js` script to seed the database.

> Services: `./data/services.json`
contains all the services a user can select.

> Form: `./data/form.json` 
contains the different forms and their associated services. The form marked with "*" is the default form.

#### Backend

- Implement the Next.js API routes to retrieve the services and forms from the database, so you can use the data in your application.

### Bonuses

If, and only if, your application fulfills all the base requirements and you still have time, tackle these additional requirements in the order they are presented.

1. Add routing to different routes that displays the form with the selected service. For example, `/bone-scan` will show your form with "Bone scan" selected as the requested service.

2. Implement endpoint that will handle the form submission. This can save the form value into a server-side memory and can show the user the requests that they've previously submitted.

3. Make sure that form values are not lost on page refresh or navigation. This should help the user perserve their progress in filling the form.

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

### Seeding

Once your storage is configured, replace the connection details in `./script/seed.js` with tje correct variables and run the following command

```
node ./scripts/seed.js
```
