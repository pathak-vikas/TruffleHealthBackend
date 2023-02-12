// Description: This file contains the code for the medical bill API
// Author: Vikas Pathak
// Date: Sat, Feb 11, 2023  9:07 PM
const express = require('express');
const app = express();
app.use(express.json());

// Array to store medical bills
let medicalBills = [];

// GET endpoint to retrieve a list of medical bills
app.get('/items', (req, res) => {
  // Return the list of medical bills
  res.json(medicalBills);
});

// POST endpoint to create a new medical bill
app.post('/items', (req, res) => {
  // Get the bill from the request body
  const bill = req.body;

  // Check that the bill has all the required fields
  if (!bill.patientName || !bill.patientAddress || !bill.hospitalName || !bill.dateOfService || !bill.billAmount) {
    // If not, return a 400 Bad Request
    return res.status(400).json({ error: 'Bad Request' });
  }

  // Add the bill to the list of medical bills
  medicalBills.push(bill);

  // Return the bill to the user
  res.json(bill);
});


const port = 3100;
module.exports=app.listen(port, () => {
  console.log(`Medical bill API listening at http://localhost:${port}`);
});
