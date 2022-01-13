# todo-app

## Phase 1 Requirements

In Phase 1, refactor the To Do application as built by another team. This application mixes application state and user settings at the top level and passes things around. It was a good proof of concept, but we need to make this production ready.

- Style the application using the Blueprint Component API{target:_blank}

- Properly modularize the application into separate components

- Implement the Context API to make some basic application settings available to components

  - How many To Do Items to show at once

  - Whether or not to show completed items

Technical Requirements

- Implement the React ```context``` API for defining ```settings``` across the entire application.
  - Create a ```context``` for managing application display settings and provide this at the application level.
  - Display or Hide completed items (boolean).
  - Number of items to display per screen (number).
  - Default sort field (string).
  - Manually set (hard code) those state settings in the context provider’s state, they should not be changeable.
- Consume and utilize ```context``` values throughout your components
  - Show a maximum of a certain number of items per screen in the ```<List />``` component
  - Provide “next” and “previous” links to let the users navigate a long list of items
  - Hide or show completed items in the list
  - Optional: Sort the items based on any of the keys (i.e. difficulty)

Pagination Notes:

- Only display the first ```n``` items in the list, where ```n``` is the number to display per screen in your context.
- If you have more than ```n``` items in the list, add a button labeled ```Next``` that will replace the list with the next ```n``` items in the list.
- If you are past the first ```n``` items (i.e. on page 2 or higher), add a button labeled ```Previous``` that will replace the list with the previous ```n``` items in the list.

## Business Requirements

The To Do Manager application has the following overall requirements:

- Designed to match the mock-up
  - Header, Main Section Footer
  - Use React Bootstrap for styling and visual components

- The header should present the application title and main menu
  - Home Link, which shows the list of To Do Items as noted below
  - A Login/Register/User section
    - When a user is not logged in:
      - Show Login and Register links
        - Login: Renders a Login Form
        - Register: Renders a new user registration form
          - Require Fields:: Username, Password, Email, Role
    - When a user is logged in:
      - Show “Welcome username”
      - Show a “Logout” link
        - When clicked, this should remove any cookies you have set and remove access

- In the “Main” section
  - Nothing should be visible until a user has logged in successfully
  - The list of items in the to do list
    - Based on user preferences, show listings in groups of (5, 10, etc) and provide the ability to view multiple “pages” of results
    - Each item in list should show the text of the item as well as the assignee
      - Based on user preferences, hide or show completed items
      - If shown, completed items should be styled differently making their status visually obvious
    - For users with “Update” permissions
      - When an item is clicked, toggle the “complete” status of the item.
    - For users with “Delete” permissions
      - Items should have a delete button associated with them
        - When clicked, remove the item from the list
- For users with “Create” permissions …
  - A Form where the user can a new item to the todo list
    - Items should have the following fields:
      - To Do Item Text
      - Assigned To
      - Status (complete/incomplete)
      - Difficulty (number between 1 and 5)
      - i.e.

```const todo = mongoose.Schema({```  
```text: { type: String, required: true },```  
```assignee: { type: String },```  
```complete: { type: Boolean, default:false },```  
```difficulty: { type: Number, default: 1 },```  
```});```

Users/Passwords for example app, each with different permissions:

admin/ADMIN
editor/EDITOR
guest/GUEST

## Technical Requirements

The application will be created with the following overall architecture and methodologies

React
ES6 Classes
Settings delivered to the application using Context
User Login & Permissions delivered to the application using Context
Local Storage / Cookies for storing login status
Local Storage / Cookies for storing user preferences
Superagent or Axios for performing API Requests
React Bootstrap for styling
Test Driven Development, using Jest
Tests will be runnable locally
Deployment to cloud provider

## Author

Heather Bisgaard, Software Engineer

## Collaborators

- Ayrat Gimranov, Software Developer

## Setup

## Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## References

- Class videos & github repo

## Links

- [Github](https://github.com/vbchomp/todo-app)
