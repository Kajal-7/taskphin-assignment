# Taskphin - HireTracker

## Overview
HireTracker, a web application designed for recruiters, serves as a comprehensive tool for managing candidate data efficiently.

## Deployed Wesite Link

### Visit the Web application [here](https://main--wondrous-meerkat-7a5637.netlify.app/).

## Technologies

* Frontend framework: ReactJs
* Other major plugin/packages: Tailwind CSS
* Backend framework: NodeJs, ExpressJs
* Database: Postgresql

## Features

1. **Add new candidate**: Implemented
   - A form to add new candidate into the database.

2. **Update candidates's application status**: Implemented
   - Update candidate application status in the database and reflect it on the frontend.

3. **View candidates list**: Implemented
   - Provides all the necessary candidates details in a card and a mechanism (dropdown) to view all associated data.

4. **Compute score**: Implemented
    - Calculate the score of every candidate using node.js and react.js experience.

## Setup & Usage

- Make sure you have node installed in your local environment by running `node -v` in your terminal
- Install necesssary dependencies by `npm install` in the root directory and backend directory 
- Run the server by `npm start` and in backend directory `node server.js`
- The application uses database deployed on digital ocean using aiven and details are public in `/backend/db/index.js`. If you want to use your database then update the config details in the same and also update url of api calls in frontend in `src/components/CandidateForm.js` , `src/components/EditModal.js`, `src/pages/DisplayCandidates.js`,
---

## Demonstration

### View Demo Video [here]().

## Contact
### Linkedin Profile [here](https://www.linkedin.com/in/kajalkaushal/).

# Made by Kajal Kaushal 
