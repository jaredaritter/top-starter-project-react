## Tiny List

A form and list rendering React project based on TOP starter React project. The focus is on use of props, state, and components to create functional list. Additionally the list items are able to be deleted and edited in place and independently of each other.

#### Main challenges that required the use of React Docs:

- Controlled components to allow React to control state of form and not refresh page on submit.
- Lists of line items in unordered list using map array method to create each element and assign key.
- Creation of unique ID for each task added to the list for reference
- Editing tasks proved to be an engaging challenge because list state is held in the parent App component. Ultimately, I had to hold the onChange state in the local component and then return it to the parent App state using a passed down handler.

#### Sources and Page

Primary tool:
[React](https://reactjs.org/)

This project was built on a pared down version of [Create React App](https://github.com/facebook/create-react-app).

The app can be found live at [Tiny List](https://jaredaritter.github.io/top-starter-project-react/).
