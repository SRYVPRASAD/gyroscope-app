# Gyroscope App
This project was created using [Create React App](https://github.com/facebook/create-react-app) and is designed to display gyroscopic data from the user's device as well as data received from an iframe.

## Features
- Gyroscope Data: The app accesses the gyroscopic data from the user's mobile device and displays it.
- Iframe Communication: The app also fetches gyroscopic data from an iframe and displays the received data.
- React Router: Used for routing and navigation within the application.
## Technologies Used
- React: For building the user interface.
- ReactDOM: For routing with React Router.
- Gyroscope API: To access the device's gyroscopic data.
- Iframe: For communicating with another iframe and displaying its data.
## Available Scripts
In the project directory, you can run:

```bash
npm start
```
Runs the app in development mode.
Open [http://localhost:3000] to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

```bash
npm test
```
Launches the test runner in interactive watch mode.
For more information on testing, check the [Create React App testing documentation](https://create-react-app.dev/docs/running-tests/).
```bash
npm run build
```
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.
Your app is ready to be deployed!

For more information, check the [deployment guide](https://create-react-app.dev/docs/deployment/).
```bash
npm run eject
```
Note: This is a one-way operation. Once you eject, you can't go back!

If you want to customize the build tools and configuration, you can eject. This command will remove the single build dependency and copy all configuration files (webpack, Babel, ESLint, etc.) into your project.

After ejecting, you'll have full control over your build setup, but you're on your own in terms of maintenance.

## How to Use
Starting the App: Run npm start to launch the app locally.
Gyroscope Data: The app will automatically fetch and display gyroscopic data from your mobile device (if supported).
Iframe Data: The app listens for gyroscopic data from an iframe and displays it in the same interface.
## Learn More
To learn more about the technologies used, check out the following documentation:

- [Create React App Documentation](https://create-react-app.dev/docs/getting-started/)
- [React Documentation](https://react.dev/learn)
- [React Router Documentation](https://reactrouter.com/)
## License
This project is licensed under the MIT License.
