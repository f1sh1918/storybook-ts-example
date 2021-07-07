# Get storybook started
For first time running/ if there are no 'node modules',run 
`npm i`
(npm version should be 6.4^ , might not work with lower)
To run storybook first time run in console (also installs peer deps)
`npm run storybook` 
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

To run storybook after installed dependencies and peer-dependencies, run

### `npm run start`

Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build-storybook`

installs dependencies, peer-dependencies and build storybook

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Integrate Storybook to other Applications

Install npm package for other applications

##### `npm i git+ssh://<reponame>/storybook.git#v0.1`

# Local Development

Since npm link is currently not working, you can also install the dependency using your branch f.e.

##### `npm i git+ssh://<repolink>#yourBranchName`


###### Required Dependencies

Important: <br>
Check package.json for peer dependencies and ensure you have them in your project!<br>
TODO: Add script to auto add peer deps

###### Use styles from component lib

##### `@import "../node_modules/storybook-example/src/samsung-storybook.scss"`

Requires: `@import "~bootstrap/scss/bootstrap";` (before)

###### Import React Components

`import {SStepper} from "storybook-example";`

# Release Management

- After finishing your feature, update version nr in package.json
- create pull  request and obtain a review.
- merge pull request into develop (delete source branch)
- create new tag on develop https://<repourl>/tags
- check for semver naming conventions
- add release notes like: fixes, components, peer dependencies
- merge release branch into main
- send a notification in the development channel that there is a new version of the storybook which the dependence
