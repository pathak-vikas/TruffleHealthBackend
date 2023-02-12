TASK at HAND: 

Implement assignment using:
Language: Node
Framework: Express
Two endpoints are required

    GET /items: returns a list of medical bills
    POST /items: creates a new medical bill

A medical bill has the following properties:

 - patient name and address

 - the hospital name

 - date of service

 - bill amount.

Both endpoints should accept and return JSON.

You do not need to persist the bills to a database. Keep them in memory.

Provide API tests for both endpoints.

Provide instructions on how to run your assignment in a README.

Success Criteria

- Node best practices
- API implemented featuring the endpoints above
- Completeness: did you complete the features? Are all the tests running?
- Correctness: does the functionality act in sensible, thought-out ways?
- Maintainability: is it written in a clean, maintainable way?


////////////////////////	//////////////////////////////////			   
 
The build and run instructions : 

Clone this repo in your system folder : https://github.com/pathak-vikas/TruffleHealthBackend.git

Install Node.js for your platform (MacOS, Windows or Linux) : https://nodejs.org/en/

* To Fire up the backend server follow up these steps:
     # go to project folder path : "TruffleHealthBackend\" 
     # open cmd or terminal in folder path 
     # run "npm install" command
     # run "npm start" command 
     # keep this terminal open
     # you can use Postman to send requests to the server, sample data.json can be found in test folder of this project
     # for running test file (in tests folder) kill the above terminal ( Press cntrol + c in terminal screen)
     # open terminal in folder path
     # run "npm run test" command
     # feel free include your tests


