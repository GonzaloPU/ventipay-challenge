/**
 * Instructions
 * 
 * Implement an endpoint that lists all payment methods and accepts a filter by "type"
 * Implement an endpoint that shows the details of a single payment method
 * Implement an endpoint that deletes a single payment method
 * Implement an endpoint that exports all payments methods in CSV format
 * 
 * Make sure you handle errors (not found, server error, etc.) with a proper HTTP status
 * Use async/await when possible
 * All endpoints must send a valid JSON response
 * The server must be started using a non-privileged port
 * You don't need to use a database to handle data, using an in-memory object is OK just make sure the delete endpoint works
 *  and that you provide an initial seed
 * A Payment Method record must use the following schema:
 * {
 *  id: <some random ID>,
 *  brand: <string, one of [visa,master,amex,discovery]>,
 *  type: <string, one of [credit_card,debit_card]>,
 *  last4: <int(4)>,
 *  created_at: <datetime>
 * }
 *
 */

const express = require('express');

const server = express();
const PORT = process.env.PORT || 8000;

server.use(express.json());
server.get('/payment_methods', (req, res) => {
  res.status(404).send({
    status: 200
  });
});

server.listen(PORT , () => {
  console.log(`🚀 API Server instance ready on port ${PORT}`);
});