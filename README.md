Please follow the instructions below to run the app on your local:
1. Clone the repo in your local using `git clone `
In the project directory, you can run:
2. `npm i`: this ensures you have all the packages installed in your local
3. `npm start`: This should bring up the app on your `http://localhost:3000/` 
4. `npm test` : this should run the unit tests in your terminal


Project structure:
Although Most of the project structure is self explanatory, i would like to clarify a few things:
1. `/mockApi/index.js`:  contains the methods which return promises. This is the path i chose to simulate API calls. I wasn't really sure if the complete API layer had to be implemented. If that is the case i would bring up an API layer using Express js and have them consume the mock data and provide responses.
2. `/mocks/mockData.js`: contains a JSON object i used for this project.
3. `/containers`: Place for smart components. Usually includes components with side effects like redux initialization action dispatches etc.
4. `/components`: Usual place for dumb components / presentational components
5. `/tests`: Holds unit tests
6. `/utils`: It holds a file which has utility functions for reward points calculation.

Notes:
Although i went with the `/container` and `/components` way you will see that for this project's use case i made the `CustomerCard` component as a smart component just to demonstrate the use of hooks and API call for each customer. In a real world scenario i would expect the customer specific data to be dealt with some parallel API calls like axios.all() or via an enhanced backend API.

Months calculation: 
For this projects case i have used the date literal from the date key in the transaction object to compare and filter out monthly rewards
In a real world scenario this can be taken can be handled at the db query level or back end level

I have made description notes in files wherever necessary to explain my thought process.
