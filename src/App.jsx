import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file

import TransactionGraph from './components/TransactionGraph';
import CustomerTable from './components/CustomerTabel';
import { ApiContext, ApiContextProvider } from './components/ApiContext';

function App() {
  // const [data, setData] = useState({ customers: [], transactions: [] });
  // const [selectedCustomer, setSelectedCustomer] = useState(null);



  // useEffect(() => {
  //   axios.get('http://localhost:5000/api/data')
  //     .then(response => {
  //       setData(response.data);
  //       console.log(response.data.customers)

  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  return (
    // <div className="App">
    //   <CustomerTable
    //     customers={data.customers}
    //     transactions={data.transactions}
    //     onCustomerSelect={setSelectedCustomer}
    //   />
    //   {selectedCustomer &&
    //     <TransactionGraph
    //       transactions={data.transactions.filter(t => t.customer_id === selectedCustomer.id)}
    //       customersArr={data.customers.map((el) => el)}
    //     />
    //   }
    // </div>

    <ApiContextProvider>

      <CustomerTable
      />


    </ApiContextProvider>
  );
}

export default App;
