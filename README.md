# Connect
Connect is a minimalistic, non distracting, chat web-app - made with React, Redux and Socket.io

It makes use of the following technologies:

| **Tech** | **Description** |
|----------|-----------------|
| [NodeJS](https://nodejs.org/en/) | JavaScript runtime built on [Chrome's V8 JavaScript engine](https://developers.google.com/v8/). Allows running JavaScript on the server. |
| [React](https://facebook.github.io/react/)  |   Fast, composable client-side components. |
| [Material-UI](http://www.material-ui.com/#/) | React components that implement Google's Material Design.
| [Redux](http://redux.js.org) | Enforces a unidirectional data flow, along with an immutable store. A lean alternative to [Facebook's Flux](https://facebook.github.io/flux/docs/overview.html). |
| [React Router](https://github.com/reactjs/react-router) | A complete routing library for React |
| [Babel](http://babeljs.io) |  Compiles ES6 to ES5. Enjoy the new version of JavaScript today.     |
| [ExpressJS](http://expressjs.com/) | Fast and minimalistic web framework for NodeJS |
| [Socket.io](http://socket.io/) | Enables real-time bidirectional event-based communication. |

## Initial Machine Setup
1. **Install the newest version of [NodeJS](https://nodejs.org)**.
2. [Optional] **Install [Git](https://git-scm.com/downloads)**.

## Get started
1. [**Initial Machine Setup**](https://github.com/EliasJorgensen/connect#initial-machine-setup). Only do this if you haven't used NodeJS before.
2. **Clone the repo** (or download a zip). `git clone https://github.com/EliasJorgensen/connect.git`.
3. **Navigate** to the cloned repository from a terminal/command prompt.
4. **Install Dependencies**. `npm install` from the cloned directory.
5. **Run the web-app**. `npm start`.
6. **Navigate to** `http://localhost:8080/`

### Full list of available commands:
* `npm run start`  - Run [HMR](https://webpack.github.io/docs/hot-module-replacement.html) enabled dev server
* `npm run dist` - Compiles production ready build and places it in /dist.

## Running in production mode
1. Install Dependencies
2. Run `npm run dist`
3. Set environment variables NODE_ENV to "production" and PORT to the port of your choice (probably 80)
4. Run `npm start`.
