# cypress-do-zero-a-nuvem

Sample project to learn how to use cypress and how to upload it into the Cloud and run the tests in CI/CD cicles.

## Pre-requirements

It is required to have Node.js, npm and Cypress installed to run this project.

> I used versions `v22.14.0` and `10.5.2` and `13.12.0` of Node.js, npm and Cypress respectively. I suggest you use the same or later versions.

## Installation

Run `npm install` (or `npm i` for the short version) to install the dev dependencies.
Run `npm install cypress --save-dev`

## Tests

> **Note:** Before running the tests, make a copy of the `cypress.env.example.json` file as `cypress.env.json`, which in the real world, you would update with valid credentials.
>
> The `cypress.env.json` file is included on [`.gitignore`](./.gitignore) and you're safe that confidential info won't be versioned.

Run `npm run cy:test` (or `npm t` for the short version) to run the test in headless mode.

Or, run `npm run cy:open` to open Cypress in interactive mode.

## Support this project

If you want to support this project, leave a ⭐.

___

This project was created with 💚 by [Walmyr](https://walmyr.dev).
