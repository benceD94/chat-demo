# Chat POC

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Small Proof of Concept application that includes:
- [MirageJS](https://miragejs.com/)
    - To create a mocked API handling Users and messages
- FriendList
    - A simple List of users to select someone to chat with
- ChatContextProvider
    - Handling chat events and messages
- Chat
    - Reusable component to show and send messages

## Future Improvements
- Instead of refetching the messages every N seconds, implement a Web Socket connection to show messages on an update event
    - Currently mirageJS doesn't handle mocked web sockets, so it's missing in the POC

## Initial setup
1. Create .env file from .env-example `cp .env-example .env`
2. Add API url to `.env` file (since it's a POC, any madeup url will do)
3. Install dependencies `yarn install`
4. Check out the Available Scripts to see how to start the App

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
