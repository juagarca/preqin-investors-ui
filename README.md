# Description

This app features a user interface (UI) for retrieving data from the API server described at https://github.com/JayGadi/preqin-technical-test.

It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

Make sure you have installed all of the following prerequisites on your development machine:

- Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.

- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

**Note: Minimum node version is `v20.15.0`**

## Installation

1. Clone the repo

```bash
git clone git@github.com:juagarca/preqin-investors-ui.git
```

2. Go into the newly created folder

```bash
cd preqin-investors-ui
```

3. Install the dependencies

```bash
npm install
```

4. Create environment file

```bash
ln -s .env.local.example .env.local
```

## Available scripts

In the project directory, you can run:

### `npm install`

Install the project dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
