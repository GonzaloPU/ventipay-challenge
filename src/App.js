/**
 * Instructions
 *
 * 1. Show a list of payment methods filtered by type "credit_card".
 * 2. Get the list data from the API when the component is rendered and refresh it automatically every 30 seconds.
 * 3. Show a loading component while getting the list data but only on the first pull.
 * 4. Show the total number of credit cards
 * 5. Show the total number of credit cards ending in an even number (check the "last4" attribute).
 * 6. Implement a button to delete a credit card
 */

import './App.css';
import { React, useEffect, useState } from 'react';

function App() {
  let paymentMethods = fetch({
    method: 'get',
    url: 'http://127.0.0.1/payment_methods',
  });

  const payments = [];
  const go = () =>{};

  const [paymentMethodsCount, setPaymentMethodsCount] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setPaymentMethodsCount(0);
  });
  const paymentMethodsCountendingineven = () =>{};

  return (
    <div className="App">
    <h1>Payment Methods.</h1>
    <h2>Total: ({paymentMethodsCount})</h2>
    <h2>Total ending in an even number: ({ paymentMethodsCountendingineven }) </h2>

      <hr />
      {
        isLoading && <p>Loading...</p>
      }
      <ul>
        {
         payments.map( go => {
            return (
              <li>Brand: {go.brand}, Last 4: {go.last4}, Created At: {go.created_at}</li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default App;
