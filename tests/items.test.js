// This file contains the tests for the API endpoints
const request = require('supertest');
const app = require('../app');
describe('API tests for both endpoints', () => {
  //TESTING for the BAD REQUEST
  it('returns an error for a bad request', async () => {
    const bill = {
      // patientName is missing
      patientAddress: '456 Main St',
      hospitalName: 'Community Hospital',
      dateOfService: '2022-01-01',
      billAmount: 2000
    };
    
    const res = await request(app).post('/items').send(bill);
    
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({ error: 'Bad Request' });
  });

  //TESTING for the EMPTY GET endpoint
  it('should retrieve empty medical bill list', async () => {
    const res = await request(app).get('/items');
    expect(res.statusCode).toEqual(200);
    // Check that the returned list is empty
    expect(res.body).toEqual([]);
  });

  //TESTING for the create a new medical bill endpoint
  it('should create a new medical bill list', async () => {
    // Create a new medical bill
    const bill ={
      patientName: 'Ashish Bhangale',
      patientAddress: '123 Main St',
      hospitalName: 'Ashish Hospital',
      dateOfService: '2022-01-01',
      billAmount: 1000
    };
    const res = await request(app)
      .post('/items')
      .send(bill);
    expect(res.statusCode).toEqual(200);
    // Check that the returned bill matches the one we sent
    expect(res.body).toEqual(bill);
  });

  //TESTING for the GET endpoint with data
  it('should check for bill we added', async () => {
    
    const expectedBill = [{
      patientName: 'Ashish Bhangale',
      patientAddress: '123 Main St',
      hospitalName: 'Ashish Hospital',
      dateOfService: '2022-01-01',
      billAmount: 1000
    }];

    const res = await request(app).get('/items');
    expect(res.statusCode).toEqual(200);
    // Check that the returned list contains the bill we added
    expect(res.body).toEqual(expectedBill);
  });
    //TESTING for the POST endpoint with more data
    it('should create a new medical bil for more data', async () => {
    const bill = {
      patientName: 'Vikas Pathak',
      patientAddress: '123 Main St',
      hospitalName: 'Vikas Hospital',
      dateOfService: '2022-01-01',
      billAmount: 1000
    };
    const res = await request(app)
      .post('/items')
      .send(bill);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(bill);
  });
  // TESTING for the GET endpoint with all data
  it('should retrieve all medical bills till this point', async () => {

    const expectedBillList =[ {
      patientName: 'Ashish Bhangale',
      patientAddress: '123 Main St',
      hospitalName: 'Ashish Hospital',
      dateOfService: '2022-01-01',
      billAmount: 1000
    }, {
      patientName: 'Vikas Pathak',
      patientAddress: '123 Main St',
      hospitalName: 'Vikas Hospital',
      dateOfService: '2022-01-01',
      billAmount: 1000
    } ];

    const res = await request(app).get('/items');
    expect(res.statusCode).toEqual(200);
    // Check that the returned list contains all the bills we added
    expect(res.body).toEqual(expectedBillList);
  });

    // After all tests are finished, close the server
    afterAll(done => {
    app.close(() => {
      done();
    });
  });

  
});