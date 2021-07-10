A full featured React boiler plate for getting a quick start on your project
with a file structure designed to be used for TDD right out the gates.

the folder structure leans toward the use of Webdriverio, but Jest is
included as it is the default testing library for React applications.

//IMPORTANT//
This boilerplate may need to be updated as I don't always check on it's dependancies.
Before you "npm install" be sure to run "npm install -g npm-check-updates". This will
update all of the dependancies that have not been depricated.

to get started:

1. npm install (If not writing tests make sure to comment out or delete unwanted dependencies before installing)
2. npx wdio config (Perform this step only if you plan to use automated E2E testing with Webdriverio)
3. npm run build (builds bundle.js)
4. npm start (If using the provided server use "npm run server" instead)
