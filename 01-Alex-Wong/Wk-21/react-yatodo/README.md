# YaTodo (Yet Another Todo app)

### Getting Started

1. `git clone` this repo to your computer
2. Follow the set up instructions below

---

## Set Up

### MongoDB

Make sure your mongodb is up and running `on port 27017`.

If you want to change the mongodb uri, you can do so in ./server/db/index.js file [here](./server/db/index.js).

### Express server

Run the API using the code in the [server](./server/) directory (all the code is there; you just need to run it). See [below](#api-endpoints) for documentation of the endpoints available.

```sh
cd server
npm i
npx nodemon app.js
```

### Vite + React

Open a new terminal window/tab for the vite server.

`cd` to the yatodo project root.

```sh
npm create vite@latest client -- --template react
cd client
npm i
npm run dev
```

#### Vite Config

Replace the contents of the `vite.config.js` file with the code below. Replace the `3000` port number if you're using a different one for your Express app.

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/todo": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
```

### Directory Structure

Your yatodo directory should look like this:

```text
yatodo
├── README.md
├── client
└── server
```

---

### API Endpoints

#### Create a Todo

    Method: POST
    URL: /api/todo
    Description: Creates a new Todo.
    Request Body:
        - title (string, required): The title of the Todo.
        - details (string, optional): Additional details or description of the Todo.
    Response:
        - Status Code: 201 (Created)
        - Body: JSON representation of the created Todo object.

#### Get all Todos

    Method: GET
    URL: /api/todo
    Description: Retrieves all Todos.
    Response:
        - Status Code: 200 (OK)
        - Body: JSON array containing all the Todos.

#### Get a Todo by ID

    Method: GET
    URL: /api/todo/:id
    Description: Retrieves a Todo by its ID.
    Request Parameters:
        - id (string, required): The ID of the Todo.
    Response:
        - Status Code: 200 (OK)
        - Body: JSON representation of the requested Todo object.

#### Update a Todo

    Method: PUT
    URL: /api/todo/:id
    Description: Updates a Todo.
    Request Parameters:
        - id (string, required): The ID of the Todo.
    Request Body:
        - title (string, optional): The updated title of the Todo.
        - completed (boolean, optional): The updated completion status of the Todo.
        - details (string, optional): The updated additional details or description of the Todo.
    Response:
        - Status Code: 200 (OK)
        - Body: JSON representation of the updated Todo object.

#### Delete a Todo

    Method: DELETE
    URL: /api/todo/:id
    Description: Deletes a Todo.
    Request Parameters:
        - id (string, required): The ID of the Todo.
    Response:
        - Status Code: 204 (No Content)
        - Body: Empty response body.

### Base Functionality

**NOTE: This is a React lab. You won't need to write any server-side code.**

**NOTE: To make an API request just use the path segment `/api/todo` not the full URL `http://localhost:3000/api/todo`.**

Your yatodo React app should:

#### Make a request to the server for all the todos on mount and display them

<details>
<summary>Hint</summary>
You need a `useEffect` that runs once on mount and makes an AJAX request to the server. The array of todos you receive should be added to state which you'll pass to a component as props for rendering.
</details>

#### Have a form to add a new todo

<details>
<summary>Hint</summary>
The form's submit event handler should send a POST request to the server. The object you receive should be added to state.
</details>

#### Have a way to mark a todo as completed

<details>
<summary>Hint</summary>
Add a done/complete button on each todo component that, when clicked, sends an AJAX request (DELETE or PUT) to the server to perform the appropriate operation on the database. When you receive a response back you should update state to reflect the newly completed todo.

The DELETE option is the simplest path.

</details>

#### Look nice

<details>
<summary>Hint</summary>
You can install bootstrap with npm, import it in `App.jsx` or `main.jsx`, and use bootstrap `classNames` in your jsx tags.

```sh
npm i bootstrap
```

```js
import "bootstrap/dist/css/bootstrap.min.css";
```

</details>

---

### Choose Your Own Extensions

- Add a congratulatory message when there are no pending todos.

- Display the todos' `created_at` or `last_updated_at` dates in [human-readable or relative ("added three days ago") format](https://date-fns.org/)

- Instead of deleting the todo in the server when it's marked as done, send a `PUT` request instead with `{ completed: true }` as the payload. Update the client-side React UI to show its completed state. Some options:

  - Hide it visually
  - Give it a different CSS style
  - Sort the todos so the completed ones are at the bottom

- Add filters (with buttons/links) to show just the pending todos or just the completed todos.

- Add a details textarea field to your todo form with a max length and a character countdown.

- Add the ability to edit an existing todo's title, details, or completed status.
