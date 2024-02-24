# TO-DO APP

This is an app that allows the users to add tasks they want to do in a single place with an easy-to-use and beautiful interface.

## Start the project

Before you proceed, make sure that you have [Node](https://nodejs.org/en) installed in your computer.

Clone this repository, then install the packages by running this command in your terminal:

### `npm i`

After that, run this command to start the server:

### `npm run start`

Create-React-App will give you a link to spin up the web app in your browser. Open the url in your browser and you are good to go.

## Libraries/Technologies Used

This project is created using [Create-React-App](https://create-react-app.dev/) and mainly uses following libraries as dependencies:
[react-router-dom](https://www.npmjs.com/package/react-router-dom)
[tailwindcss](https://tailwindcss.com/)

## Pages

**Home Page**: A welcome screen with a navigation button to the Todo List.
**Todo List**: Add, view, and delete tasks. Your tasks will be saved in the local storage of your browser.

## Functionality

Firstly react-router-dom is being used to redirect user from Homepage component to Todo component. The Todo component leverages useState for managing tasks and new task inputs, and useEffect for persisting tasks in localStorage, ensuring data retention across sessions. Users can add new tasks through an input field, either by pressing the "Enter" key or clicking the "Add Task" button, provided the input is not empty. Tasks are displayed in a list with an option to delete individual tasks, achieved by filtering out the task based on its index. 

## Credits 

This utility was developed by [Sasnarine Deodat](https://github.com/SasnarineDeodat).