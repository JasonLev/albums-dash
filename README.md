# Albums Dashboard

### Description

This project is a demo dashboard built with React.js in Typescript. It is an "Albums Dashboard", so as the name would suggest, it's intended as a way to organize and analyze music albums. Perhaps a user persona for the project could be a music executive that needs to have high-level information for a new catalog of music. The main call-to-action for the user is to add/remove genre filters to see desired effects of the `Table` and `Chart`. The selected filters are clearly displayed on the sticky `AppBar` at the top of the page so this information is always known even if the filter input component is out of view.

The project demonstrates front-end development best practices with an end-user focus to include clean UI (including web responsive design), intuitive UX, high-performance and accessibility, as well as a solid codebase so the developer experience is top-notch.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It uses several libraries for various reasons explained below.

The data is sourced by combining an external API call to the [JSONPlaceholderAPI](https://jsonplaceholder.typicode.com/) and custom data generated by the [Faker](https://fakerjs.dev/) library. It is fetched upon the App component's mount, so the user should have uninterrupted usage almost immediately, followed by a dynamic UX because interaction is managed by global and local state (more details below on that too).

---

### Technical Requirements

- Node(includes npm): ^14.0.0
- Any web browser

## Decisions Made For This Project

### Libraries Used

#### MUI (Material UI)

MUI allows for a clean UI, web responsive design (it's built as a mobile-first UI library), assessibilty baked-in, and it has many pre-built React components so development is fast. Specifically, the grid-based design pattern makes it easy to ensure the web responsive design with multiple viewing experiences across screen sizes.

#### Faker

As mentioned above, the data's source of truth is held in state and original created by fetching external data and supplementing the response with Faker data. There simply wasn't enough data properties from the API to make the chart/table interesting or worthwhile.

While the faker data changes on every refresh of the page, so some might not like it when they intend to view static data, it better simulates an in-production active database that is changing/live.

#### Recharts

[Recharts](https://recharts.org/en-US) is a go-to solution for easy to implement charts and data visualizations.

### State Management

A lot of state for this project is handled locally with the `useState` hook as well as custom hooks (like passing the `albums` data). However, to avoid prop-drilling and to better manage the selected genre filters, this projects use the [React Context API](https://react.dev/learn/passing-data-deeply-with-context) to manage the global state. The reducers are very basic and minimal, however, this use of `React Context` is very effective.

### Testing

Currently, test coverage is very minimal, so there's opportunity for improvement and to continue on this effort. A few unit tests (using `jest`) are implmented to test the very basics-- tests covering the major components (the `Table`, `Chart `, and `Genre Filter`) are loaded with heading content. Also, one of the utility functions has a spot-check unit test to validate standard usage, specifically this test covers the function to transform the albums data into genre-specific data that the Chart displays.

These test files are co-located with their components respectively in the directory structure of this project.

### Error Handling / Loading State

Both an error and loading status are created and passed from the `useJSONPlaceholderAPI` hook. The UI will display and handle these states appropriately.

---

Instructions/scripts to run the dev server, launch the test runner, build and deploy, and more are available with the following CRA documentation:

## Available Scripts

In the project directory, you can run:

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
